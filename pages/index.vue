<template>
  <div class="wrapper" id="top">
    <header class="header">
      <div class="header-left">
        <img
          src="~/assets/Kiril_Kartunov.png"
          alt="Kiril Kartunov - project manager"
          class="mobile-avatar"
        />
        <h1>HEY,</h1>
        <h2>
          <client-only>
            <vue-typer text="I'M KIRIL KARTUNOV."></vue-typer>
          </client-only>
        </h2>
        <h3>
          Freelance Product & Project Manager,
          <br />Full Stack Web Developer
        </h3>
        <img src="~/assets/separator.png" />
        <div class="follow-icons">
          Follow me:&nbsp;&nbsp;
          <a href="https://github.com/kkartunov" target="_blank">
            <img src="~/assets/github.svg" />
          </a>
        </div>
        <ul class="navbar">
          <li>
            <a href="#" v-scroll-to="'#top'">
              <span>^</span>
            </a>
          </li>
          <li>
            <a href="#" v-scroll-to="'#about'">
              <span>01</span>
            </a>
          </li>
          <li>
            <a href="#" v-scroll-to="'#skills'">
              <span>02</span>
            </a>
          </li>
          <li>
            <a href="#" v-scroll-to="'#portfolio'">
              <span>03</span>
            </a>
          </li>
          <li>
            <a href="#" v-scroll-to="'#contact'">
              <span>04</span>
            </a>
          </li>
          <li>
            <a href="#" v-scroll-to="'#end'">
              <span>.</span>
            </a>
          </li>
        </ul>
      </div>
      <img src="~/assets/Kiril_Kartunov.png" class="large-avatar" />
    </header>
    <div class="container" id="about">
      <div class="section-title">
        <span>01</span>ABOUT
      </div>
      <div>
        <strong class="name">KIRIL KARTUNOV</strong>
        <p>East Europe based freelancer, code enthusiast and lover of small business.</p>
        <p>
          <strong>I love to solve problems.</strong> I love the challenge of finding a way and discovering solutions.
        </p>
        <p>
          Graduating with a degree in Electronic Engineering, Kiril has a passion for code development, software architecture, and management,
          <br />which puts him in quite a unique category.
        </p>
        <p>Since beginning my journey as a freelance developer nearly 10 years ago, I've done remote work for agencies and collaborated with talented people to create digital products.</p>
        <p>
          This site is host to a variety of things professional and personal; a collection of my work, interests, and writings; if any of those things intrigue you, don't hesitate to reach out.
          <strong>I will be happy collaborating on projects with You!</strong>
        </p>
      </div>
    </div>
    <div class="container" id="skills">
      <div class="section-title">
        <span>02</span>SKILLS
      </div>
      <div class="skills-wrap">
        <strong class="name">Languages & Techologies I speak</strong>
        <p>
          Having the ability to learn quickly and the motivation to keep current and ahead of the game is one of my goals when it comes to my technical skills.
          <br />My strengths include, but are not limited to, the skills listed below.
        </p>
        <div class="skills-grid">
          <div class="skills-grid-item">
            <client-only>
              <apexchart type="radialBar" height="390" :options="chartOptionsPM" :series="seriesPM"></apexchart>
            </client-only>
            <h3>PROJECT MANAGEMENT</h3>
          </div>
          <div class="skills-grid-item"></div>
          <div class="skills-grid-item"></div>
          <div class="skills-grid-item">
            <client-only>
              <apexchart
                type="radialBar"
                height="390"
                :options="chartOptionsFront"
                :series="seriesFront"
              ></apexchart>
            </client-only>
            <h3>FRONT END</h3>
          </div>
          <div class="skills-grid-item">
            <client-only>
              <apexchart type="radialBar" height="390" :options="chartOptionsFP" :series="seriesFP"></apexchart>
            </client-only>
            <h3>FRAMEWORKS AND PLATFORMS</h3>
          </div>
          <div class="skills-grid-item">
            <client-only>
              <apexchart type="radialBar" height="390" :options="chartOptionsBE" :series="seriesBE"></apexchart>
            </client-only>
            <h3>BACK END</h3>
          </div>
        </div>
      </div>
    </div>
    <div class="container" id="portfolio">
      <div class="section-title">
        <span>03</span>PORTFOLIO
      </div>
      <div>
        <strong class="name">My Recent Work</strong>
        <p>
          Here are a few projects I've worked on recently. Want to see more?
          <a
            href="mailto:kiril.kartunov@gmail.com"
          >Email me</a>.
        </p>
        <div class="portfolio-grid">
          <div class="portfolio-grid-item">
            <img src="~/assets/p1.png" alt="Kiril Kartunov at Topcoder" />
            <div class="portfolio-grid-item-overlay">
              <h3>Building digital experiences for Topcoder Community.</h3>
              <a
                href="https://www.topcoder.com/community/admins"
                class="button"
                target="_blank"
              >Visit Website</a>
            </div>
          </div>
          <div class="portfolio-grid-item">
            <img src="~/assets/p2.png" alt="Kiril Kartunov at Thrive" />
            <div class="portfolio-grid-item-overlay">
              <h3>Thrive - ReactJS based learning portal.</h3>
              <a href="https://www.topcoder.com/thrive" class="button" target="_blank">Visit Website</a>
            </div>
          </div>
          <div class="portfolio-grid-item">
            <img src="~/assets/p3.png" alt="Kiril Kartunov at Neofit Rilski" />
            <div class="portfolio-grid-item-overlay">
              <h3>Primary School site, made with WordPress.</h3>
              <a href="https://www.neofitrilski.com/" class="button" target="_blank">Visit Website</a>
            </div>
          </div>
          <div class="portfolio-grid-item">
            <img src="~/assets/p4.png" alt="Kiril Kartunov at Magazin Art" />
            <div class="portfolio-grid-item-overlay">
              <h3>Silver Jewellery shop, made with OpenCart.</h3>
              <a href="https://www.magazin-art.com/" class="button" target="_blank">Visit Website</a>
            </div>
          </div>
          <div class="portfolio-grid-item">
            <img src="~/assets/p5.png" alt="Kiril Kartunov at onscene TV" />
            <div class="portfolio-grid-item-overlay">
              <h3>Plugin development for WordPress.</h3>
              <a href="https://onscene.tv/" class="button" target="_blank">Visit Website</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container" id="contact">
      <div class="section-title">
        <span>04</span>CONTACT
      </div>
      <div class="contact">
        <h1 v-if="!sent">
          Thanks for taking the time to reach out. How
          <br />can I help you today?
        </h1>
        <h1 v-if="sent">
          Thank You!
          <br />I will respond shortly...
        </h1>
        <form
          id="contact-form"
          accept-charset="UTF-8"
          @submit="checkForm"
          method="POST"
          v-if="!sent"
        >
          <div v-if="errors.length" class="form-errors">
            <b>Please correct the following error(s):</b>
            <ul>
              <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
            </ul>
          </div>
          <div class="form-row">
            <label for="name">Name:</label>
            <input
              id="name"
              v-model="name"
              type="text"
              name="name"
              required
            >
          </div>
          <div class="form-row">
            <label for="email">Email:</label>
            <input
              id="email"
              v-model="email"
              type="email"
              name="email"
              required
            >
          </div>
          <div class="form-row">
            <label for="name">Message:</label>
            <textarea
              id="msg"
              v-model="msg"
              name="msg"
              required
            ></textarea>
          </div>
          <div class="form-row">
            <input
              type="submit"
              value="Submit"
              class="submit"
            >
          </div>
        </form>
      </div>
    </div>
    <div class="container" id="end">
      <div class="footer">
        <h3>Loving & learning each day I live.</h3>
        <p>
          Handcrafted by me &#9400; 2020
          <br />Made with lovely
          <a href="https://nuxtjs.org/" target="_blank">Nuxt.js</a>. Thank you Vue&Nuxt!
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
if (process.browser) {
  var VueTyper = require("vue-typer").VueTyper;
}
// import { VueTyper } from "vue-typer";

export default {
  data: function() {
    return {
      sent: false,
      errors: [],
      name: '',
      email: '',
      msg: '',
      seriesPM: [100, 100, 100, 100],
      chartOptionsPM: {
        chart: {
          height: 390,
          type: "radialBar"
        },
        plotOptions: {
          radialBar: {
            offsetY: 0,
            startAngle: 0,
            endAngle: 270,
            hollow: {
              margin: 5,
              size: "30%",
              background: "transparent",
              image: undefined
            },
            dataLabels: {
              name: {
                show: false
              },
              value: {
                show: false
              }
            }
          }
        },
        colors: ["#ffa846", "#805423", "#99652a", "#cc8638"],
        labels: ["Communication", "Scheduling", "Teamwork", "Coaching"],
        legend: {
          show: true,
          floating: true,
          fontSize: "16px",
          position: "left",
          offsetX: 0,
          offsetY: 15,
          labels: {
            useSeriesColors: true
          },
          markers: {
            size: 0
          },
          formatter: function(seriesName, opts) {
            return (
              seriesName + ":  " + opts.w.globals.series[opts.seriesIndex] + "%"
            );
          },
          itemMargin: {
            vertical: 3
          }
        }
      },
      seriesFront: [100, 100, 100, 60],
      chartOptionsFront: {
        chart: {
          height: 390,
          type: "radialBar"
        },
        plotOptions: {
          radialBar: {
            offsetY: 0,
            startAngle: 0,
            endAngle: 270,
            hollow: {
              margin: 5,
              size: "30%",
              background: "transparent",
              image: undefined
            },
            dataLabels: {
              name: {
                show: false
              },
              value: {
                show: false
              }
            }
          }
        },
        colors: ["#479eba", "#408ea7", "#397e95", "#326f82"],
        labels: ["HTML", "CSS", "JavaScript", "WebAssembly"],
        legend: {
          show: true,
          floating: true,
          fontSize: "16px",
          position: "left",
          offsetX: 0,
          offsetY: 15,
          labels: {
            useSeriesColors: true
          },
          markers: {
            size: 0
          },
          formatter: function(seriesName, opts) {
            return (
              seriesName + ":  " + opts.w.globals.series[opts.seriesIndex] + "%"
            );
          },
          itemMargin: {
            vertical: 3
          }
        }
      },
      seriesFP: [99, 99, 100, 80, 99, 70],
      chartOptionsFP: {
        chart: {
          height: 390,
          type: "radialBar"
        },
        plotOptions: {
          radialBar: {
            offsetY: 0,
            startAngle: 0,
            endAngle: 270,
            hollow: {
              margin: 5,
              size: "30%",
              background: "transparent",
              image: undefined
            },
            dataLabels: {
              name: {
                show: false
              },
              value: {
                show: false
              }
            }
          }
        },
        colors: [
          "#dd0032",
          "#e01a47",
          "#e4335b",
          "#e74d70",
          "#eb6684",
          "#ee8099"
        ],
        labels: ["Angular", "React", "WordPress", "Vue.js", "SCSS", "Ionic"],
        legend: {
          show: true,
          floating: true,
          fontSize: "16px",
          position: "left",
          offsetX: 0,
          offsetY: 15,
          labels: {
            useSeriesColors: true
          },
          markers: {
            size: 0
          },
          formatter: function(seriesName, opts) {
            return (
              seriesName + ":  " + opts.w.globals.series[opts.seriesIndex] + "%"
            );
          },
          itemMargin: {
            vertical: 3
          }
        }
      },
      seriesBE: [100, 95, 100, 100],
      chartOptionsBE: {
        chart: {
          height: 390,
          type: "radialBar"
        },
        plotOptions: {
          radialBar: {
            offsetY: 0,
            startAngle: 0,
            endAngle: 270,
            hollow: {
              margin: 5,
              size: "30%",
              background: "transparent",
              image: undefined
            },
            dataLabels: {
              name: {
                show: false
              },
              value: {
                show: false
              }
            }
          }
        },
        colors: ["#80bd00", "#8dc41a", "#99ca33", "#a6d14d"],
        labels: ["Node.js", "PHP", "DBs", "NoSQLs"],
        legend: {
          show: true,
          floating: true,
          fontSize: "16px",
          position: "left",
          offsetX: 0,
          offsetY: 15,
          labels: {
            useSeriesColors: true
          },
          markers: {
            size: 0
          },
          formatter: function(seriesName, opts) {
            return (
              seriesName + ":  " + opts.w.globals.series[opts.seriesIndex] + "%"
            );
          },
          itemMargin: {
            vertical: 3
          }
        }
      }
    };
  },
  components: {
    VueTyper,
    apexchart: () => import("vue-apexcharts")
  },
  methods: {
    checkForm: function (e) {
      e.preventDefault();
      
      (<any>this).errors = <any>[];
      const { name, email, msg} = (<any>this);

      if (!name.trim() || name.length <= 4) {
        (<any>this).errors.push('How should I call You, when I write back? Pleae, type a name at least 4 characters long.');
        return;
      }
      if (!msg.trim() || msg.length <= 25) {
        (<any>this).errors.push('You forgot to say something :-) Please, type a message at least 25 characters long.');
        return;
      }

      fetch('/api/contact', {
        method: 'POST',
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name, email, msg
        })
      })
      .then(res => {
        if (!res.ok) {
          (<any>this).errors.push(res.statusText);
        } else {
          (<any>this).sent = true;
        }
      })
      .catch(e => {
        (<any>this).errors.push('There was some error sending your email :-(. Please, try again.');
      });
    }
  }
};
</script>

<style lang="scss">
.header,
.container {
  max-width: 1440px;
  margin: auto;
  padding: 30px;
  padding-left: 90px;
}
.header {
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: inherit;
    justify-content: center;

    img {
      margin-top: 50px;
    }
  }

  h1 {
    color: #479eba;
    font-size: 100px;

    @media screen and (max-width: 1024px) {
      font-size: 60px;
    }

    @media screen and (max-width: 425px) {
      font-size: 40px;
    }
  }

  h2 {
    color: #2a2a2a;
    font-size: 60px;

    @media screen and (max-width: 1024px) {
      font-size: 40px;
    }

    @media screen and (max-width: 425px) {
      font-size: 20px;
    }
  }

  h3 {
    color: rgb(127, 127, 127);
    font-size: 16px;
    text-transform: uppercase;
    margin: 16px 0;
    line-height: 1.2;
  }

  img {
    @media screen and (max-width: 1024px) {
      max-width: 320px;
    }
  }

  .follow-icons {
    display: flex;
    align-items: center;
    padding-top: 7px;
    width: 370px;

    img {
      margin: 0;
    }
  }

  .mobile-avatar {
    display: none;

    @media screen and (max-width: 768px) {
      display: block;
      margin: 0 0 50px;
    }
  }

  .large-avatar {
    @media screen and (max-width: 768px) {
      display: none;
    }
  }
}
.container {
  min-height: 100vh;
  display: flex;
  position: relative;
  align-items: center;
  border-bottom: 1px dashed rgba(0, 0, 0, 0.1);

  .section-title {
    font-family: "Barlow", sans-serif;
    display: flex;
    position: absolute;
    top: 30px;
    right: 30px;
    align-items: center;

    span {
      background-color: #252525;
      padding: 10px;
      color: #479eba;
      margin-right: 10px;
      font-weight: 900;
    }
  }

  .name {
    font-family: "Barlow", sans-serif;
    margin-bottom: 8px;
    display: inline-block;
    text-decoration: underline;
    font-size: 24px;
    text-transform: uppercase;
  }

  p {
    margin-bottom: 20px;
  }

  .skills-wrap {
    width: 100%;
    padding-top: 80px;
  }

  .skills-grid,
  .portfolio-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    width: 100%;

    @media screen and (max-width: 1024px) {
      grid-template-columns: 1fr;
    }

    .skills-grid-item {
      h3 {
        text-align: center;
      }
    }
  }

  .portfolio-grid-item {
    position: relative;

    &:hover {
      .portfolio-grid-item-overlay {
        opacity: 1;
        transform: scale(1);
      }
    }

    img {
      max-width: 380px;
      border-radius: 12px;
      border: 1px solid rgba(0, 0, 0, 0.1);
    }

    .portfolio-grid-item-overlay {
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      transition: all 0.4s ease-out;
      border-radius: 12px;
      background-color: rgba(0, 0, 0, 0.85);
      width: 100%;
      height: 100%;
      top: 0;
      transform: scale(0);
      color: white;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 0 25px;

      h3 {
        font-size: 24px;
      }

      .button {
        border: 5px solid blue;
        margin-top: 40px;
        padding: 10px;
        border-radius: 20px;
        color: white;
        text-decoration: none;
        transition: all 0.4s ease-out;

        &:hover {
          background-color: blue;
        }
      }
    }
  }

  .contact {
    text-align: center;
    width: 100%;

    #contact-form {
      max-width: 425px;
      text-align: left;
      margin: auto;
      margin-top: 3.5em;

      .form-errors {
        margin-bottom: 30px;
        color: red;
      }

      .form-row {
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;

        label {
          color: #7f7f7f;
        }

        input,
        textarea {
          box-shadow: none;
          border: 1px dotted #9297a1;
          border-radius: 4px;
          background: white;
          height: 3.5em;
          line-height: 1.5;
          padding-bottom: calc(0.5em - 1px);
          padding-left: calc(0.75em - 1px);
          padding-right: calc(0.75em - 1px);
          padding-top: calc(0.5em - 1px);
          position: relative;
          text-shadow: none;
          color: #2a2a2a;
        }

        textarea {
          min-height: 200px;
        }

        .submit {
          border: 1px solid #244ea3;
          color: #244ea3;
          cursor: pointer;
          font-size: 18px;
          font-family: 'Barlow', sans-serif;

          &:hover {
            background: #244ea3;
            color: white;
          }
        }
      }
    }
  }

  .footer {
    text-align: center;
    width: 100%;

    h3 {
      font-size: 24px;
    }
  }
}

.navbar {
  list-style: none;
  padding-left: 0;
  position: fixed;
  left: 3px;
  top: calc(50vh - 75px);
  z-index: 9999;

  li {
    margin-bottom: 20px;

    &:hover {
      a span {
        color: white;
      }
    }

    a {
      text-transform: uppercase;
      font-weight: 900;
      color: #479eba;

      &:hover {
        text-decoration: none;
      }

      span {
        font-family: "Barlow", sans-serif;
        padding: 10px;
        background-color: #252525;
        color: #479eba;
        margin-right: 10px;
        font-weight: 900;
      }
    }
  }
}
</style>
