import express from 'express'
import nodemailer from 'nodemailer'
import validator from 'validator'
import xssFilters from 'xss-filters'

const rejectFunctions = new Map([
  ['name', v => v.length < 4],
  ['email', v => !validator.isEmail(v)],
  ['msg', v => v.length < 25]
])
const validateAndSanitize = (key, value) => {
  // If map has key and function returns false, return sanitized input. Else, return false
  return rejectFunctions.has(key) && !rejectFunctions.get(key)(value) && xssFilters.inHTMLData(value)
}

const sendMail = (name, email, msg) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  })
  return transporter.sendMail({
    from: email,
    to: 'kiril.kartunov@gmail.com',
    subject: 'New contact form message',
    text: msg
  })
}

const app = express()

app.use(express.json())

app.post('/', (req, res) => {
  const attributes = ['name', 'email', 'msg'] // Our three form fields, all required

  // Map each attribute name to the validated and sanitized equivalent (false if validation failed)
  const sanitizedAttributes = attributes.map(n => validateAndSanitize(n, req.body[n]))

  // True if some of the attributes new values are false -> validation failed
  const someInvalid = sanitizedAttributes.some(r => !r)

  console.log(someInvalid, attributes, req.body)

  if (someInvalid) {
    // Throw a 422 with a neat error message if validation failed
    return res.status(422).json({ 'error': 'Ugh.. That looks unprocessable!' })
  }

  // Upcoming here: sending the mail
  sendMail(...sanitizedAttributes)
    .then(() => {
      res.status(200).json({ 'message': 'OH YEAH' })
    })
    .catch(e => {
      res.status(500).json(e)
    })
})

export default {
  path: '/api/contact',
  handler: app
}
