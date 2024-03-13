<template>
  <div id="app">
    <!-- About section -->
    <section class="container-fluid" id="about">
      <div class="col-8 col-lg-4 avatar">
        <img src="/src/assets/images/room_kim.png" />
      </div>
      <div class="heading">
        <h1>
          hi, i'm
          <span class="auto-type"></span>
        </h1>
        <h3>Computer Engineering Apprentice</h3>
        <p>
          I'm a 22 years old student at
          <a class="underline-hover-effect" href="https://polytech-nancy.univ-lorraine.fr/">Polytech Nancy</a>
          , an engineering school based in France.
          <br />
          I study Computer Science and Robotics there in an apprenticeship formation. I had
          <br />
          the pleasure to start as a serious game developper and I am now looking for a new
          <br />
          challenge in the field of web development.
        </p>
        <a class="btn btn-outline-light" href="mailto:jacquemotkimberley@gmail.com">Contact me</a>
      </div>
    </section>

    <!-- Skills section -->
    <section class="container-fluid" id="skills">
      <div class="col-10 col-lg-6 skills">
        <div class="text">
          <h2>My Skills</h2>
          <p>Experience and skills I acquired either at school, work or by myself!</p>
        </div>

        <div class="skill-card">
          <div class="card">
            <i class="fa-solid fa-note-sticky"></i>
            <h4>
              Front-End
              <br />
              Development
            </h4>
            <p>
              I learnt to use HTML, CSS and Tailwind/Bootstrap in order to realize this website or personnal projects. I
              also know how to use React and NodeJS.
            </p>
          </div>

          <div class="card">
            <i class="fa-solid fa-file-code"></i>
            <h4>
              Back-End
              <br />
              Development
            </h4>
            <p>
              I acquired knowledge in SQL and NO-SQL databases during my cursus at school, I can also use Express and
              manage REST APIs in a MERN structure. I was also able to use .NET and MVC Model at Faurecia.
            </p>
          </div>

          <div class="card">
            <i class="fa-solid fa-terminal"></i>
            <h4>Software Development</h4>
            <p>
              I learned multiple languages during my scholarity, as you will see on my projects, such as : C#, C++ (and
              C), Python and Java.
            </p>
          </div>

          <div class="card">
            <i class="fa-solid fa-microchip"></i>
            <h4>Electronics</h4>
            <p>
              I learnt to program a STM32 ship and it was part of an important project in school, but I can also use
              Arduino and Eagle softwares.
            </p>
          </div>

          <div class="card">
            <i class="fa-solid fa-cube"></i>
            <h4>Unity Engine</h4>
            <p>
              Unity is my main software at work, we use it in order to manipulate 3D models on real-time and create CAD
              softwares in VR.
            </p>
          </div>

          <div class="card">
            <i class="fa-solid fa-code-branch"></i>
            <h4>GitHub</h4>
            <p>
              I use Git and GitHub a lot : school, work, personnal projects. It is a really useful tool that I am glad
              to know. I use it as a DevOps tool when it's not Azure DevOps.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Portfolio section -->
    <section class="container-fluid" id="portfolio">
      <div class="container">
        <div class="white-divider"></div>
        <div class="heading">
          <h2>Portfolio</h2>
          <p style="color: var(--main-color); text-align: center">Some of my personal projects !</p>
        </div>
        <div class="swiper mySwiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img src="/src/assets/images/ChefBotPlus.png" />
              <h2>Chefbot</h2>
              <a href="projects.html"><span class="tag">#React</span></a>
              <a href="projects.html"><span class="tag">#NodeJS</span></a>
              <a href="projects.html"><span class="tag">#API</span></a>
              <a href="projects.html"><span class="tag">#Express</span></a>
              <a href="projects.html"><span class="tag">#MongoDB</span></a>
            </div>
            <div class="swiper-slide">
              <img src="/src/assets/images/BlackjackSquare.png" />
              <h2>Blackjack</h2>
              <a href="#"><span class="tag">#Python</span></a>
            </div>
            <div class="swiper-slide">
              <img src="/src/assets/images/FlashCards.png" />
              <h2>Flashcards</h2>
              <a href="projects.html"><span class="tag">#Python</span></a>
              <a href="projects.html"><span class="tag">#Tkinter</span></a>
              <a href="projects.html"><span class="tag">#Pandas</span></a>
            </div>
            <div class="swiper-slide">
              <img src="/src/assets/images/GunplaEshop.png" />
              <h2>GunplaEshop</h2>
              <a href="projects.html"><span class="tag">#React</span></a>
              <a href="projects.html"><span class="tag">#Tailwind CSS</span></a>
              <a href="projects.html"><span class="tag">#SpringBoot</span></a>
              <a href="projects.html"><span class="tag">#Java</span></a>
              <a href="projects.html"><span class="tag">#H2</span></a>
            </div>
          </div>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
          <div class="swiper-pagination"></div>
        </div>
      </div>
    </section>

    <!-- Experience section -->
    <section class="container-fluid" id="experience">
      <div class="container">
        <div class="divider white"></div>
        <div class="heading">
          <h2 class="mb-3" style="color: var(--second-color); text-align: center">Work Experience</h2>
          <p style="color: var(--main-color); text-align: center">A little details about my professional experiences</p>
        </div>
        <ul class="timeline">
          <li>
            <div class="timeline-badge">
              <span class="bi-briefcase-fill"></span>
            </div>
            <div class="timeline-panel-container">
              <div class="timeline-panel">
                <div class="timeline-heading">
                  <h3>FAURECIA</h3>
                  <h4>Serious Game Developper Apprentice</h4>
                  <p class="text-muted">
                    <span class="bi-clock-fill" style="color: var(--main-color)"></span>
                    2021-Now
                  </p>
                </div>
                <div class="timeline-body">
                  <p>Unity and Web Development</p>
                  <p>xR Platform team</p>
                  <p>Visual Studio and C#</p>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="timeline-badge">
              <span class="bi-briefcase-fill"></span>
            </div>
            <div class="timeline-panel-container-inverted">
              <div class="timeline-panel">
                <div class="timeline-heading">
                  <h3>DELCOS</h3>
                  <h4>Telecom technician</h4>
                  <p class="text-muted">
                    <span class="bi-clock-fill" style="color: var(--main-color)"></span>
                    2019-2021
                  </p>
                </div>
                <div class="timeline-body">
                  <p>RJ45 Network Setup</p>
                  <p>FTTH installation</p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>

    <!-- Education section -->
    <section class="container-fluid" id="education">
      <div class="container">
        <div class="divider white"></div>
        <div class="heading">
          <h2 class="mb-3" style="color: var(--second-color); text-align: center">Education</h2>
          <p style="color: var(--main-color); text-align: center">School and licenses</p>
        </div>
        <div class="row">
          <div class="col-sm-6">
            <div class="education-block">
              <h5>2019-2021</h5>
              <span class="bi bi-mortarboard" style="font-size: 40px; color: var(--main-color)"></span>
              <h3>University Institute of Technology</h3>
              <h4>Two-year university degree in technology (GEII)</h4>
              <div class="red-divider"></div>
              <p>Electricity, Electronics, Engineering science</p>
              <p>Industrial Computing, Robotics, Automatism</p>
              <p>Embedded Systems, C and C++ languages</p>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="education-block">
              <h5>2021-2024 (In Progress...)</h5>
              <span class="bi bi-mortarboard" style="font-size: 40px; color: var(--main-color)"></span>
              <h3>Polytech Nancy</h3>
              <h4>IA2R Cursus</h4>
              <h5>Engineer degree</h5>
              <div class="red-divider"></div>
              <p>Computer Science, Network, Robotics and Automatism</p>
              <p>Apprenticeship as a developer</p>
              <p>C#, Java, Web</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Certifications section -->
    <section id="certifications">
      <div class="divider white"></div>
      <div class="heading">
        <h2 class="mb-3" style="color: var(--second-color); text-align: center">A little further?</h2>
      </div>
      <div class="container">
        <ul>
          <div class="row">
            <div class="col">
              <li style="--color: var(--second-color)">
                <router-link :to="RouteName.Challenges" class="base"></router-link>
                <span class="title">Challenges</span>
                <span class="icon">
                  <i class="bi bi-hash"></i>
                </span>
              </li>
            </div>
            <div class="col">
              <li style="--color: var(--third-color)">
                <a class="base" href="/certifications.html"></a>
                <span class="title">Certifications</span>
                <span class="icon">
                  <i class="bi bi-award-fill"></i>
                </span>
              </li>
            </div>
            <div class="col">
              <li style="--color: #64ffda">
                <a class="base" href="/projects.html"></a>
                <span class="title">Projects</span>
                <span class="icon">
                  <i class="bi bi-braces"></i>
                </span>
              </li>
            </div>
          </div>
        </ul>
      </div>
    </section>
    <NavBar />
    <!-- Footer section -->
    <footer class="text-center">
      <a href="#about">
        <span
          class="bi bi-caret-up"
          style="font-size: 25px; margin: 20px; color: var(--third-color); height: 30px"
        ></span>
      </a>
      <h5>Built and designed by Kimberley Jacquemot.</h5>
      <h5>All rights reserved. ©</h5>
    </footer>
  </div>
</template>

<script setup lang="ts">
import Swiper from "swiper";
import Typed from "typed.js";
import { onMounted, ref } from "vue";
import { RouterLink } from "vue-router";

import NavBar from "../components/NavBar.vue";
import { RouteName } from "../router";

// Declare refs for swiper and typed
const typed = ref<null | Typed>(null);
let swiper: null | Swiper = null;

// On mounted, initialize typed and swiper
onMounted(() => {
  // Initialize Typed.js
  typed.value = new Typed(".auto-type", {
    backSpeed: 150,
    loop: true,
    strings: ["kimberley :)", "coding ;)", "sleeping zZz"],
    typeSpeed: 150,
  });

  // Initialize Swiper
  swiper = new Swiper(".mySwiper", {
    effect: "flip",
    grabCursor: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });

  // Handle click event on next button
  const nextButton = document.querySelector(".swiper-button-next");
  nextButton?.addEventListener("click", () => {
    swiper?.slideNext();
  });

  // Handle click event on previous button
  const prevButton = document.querySelector(".swiper-button-prev");
  prevButton?.addEventListener("click", () => {
    swiper?.slidePrev();
  });
});
</script>

<style lang="scss" scoped>
.swiper {
  width: 60%;
  height: auto;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 600px;
  padding-bottom: 50px;
}

.swiper-slide img {
  display: block;
  aspect-ratio: 4/3;
  width: 100%;
  padding-bottom: 15px;
}

.swiper h2 {
  font-size: 30px;
  font-weight: 700;
  color: #fff;
}

.tag {
  display: inline-block;
  border-radius: 3px;
  padding: 0.2em 0.5em 0.3em;
  border-radius: 5px;
  background: var(--third-color);
  color: var(--bg-color);
  font-weight: 600;
  margin: 0.25em 0.1em;
}

h1.tag {
  margin-left: 0;
  margin-right: 0;
}

.swiper-button-next,
.swiper-button-prev {
  position: absolute;
  top: var(--swiper-navigation-top-offset, 50%);
  width: calc(var(--swiper-navigation-size) / 44 * 27);
  height: var(--swiper-navigation-size);
  margin-top: calc(0px - (var(--swiper-navigation-size) / 2));
  z-index: 10;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--swiper-navigation-color, var(--main-color));
}

.swiper-pagination-bullet-active {
  opacity: var(--swiper-pagination-bullet-opacity, 1);
  background: var(--swiper-pagination-color, var(--third-color));
}
</style>
