<template>
  <div id="app">
    <!-- About section -->
    <section class="container-fluid" id="about">
      <div class="col-8 col-lg-4 avatar">
        <img alt="Room" src="/src/assets/images/room_kim.png" />
      </div>
      <div class="heading">
        <h1>
          {{ t("about.hi") }}
          <span class="auto-type"></span>
        </h1>
        <h3>{{ t("about.title") }}</h3>
        <p>
          {{ t("about.description1") }}
          <a :href="t('about.schoolUrl')" class="underline-hover-effect">{{ t("about.schoolName") }}</a>
          ,
          {{ t("about.description2") }}
        </p>
        <a class="btn btn-outline-light" href="mailto:jacquemotkimberley@gmail.com">{{ t("about.contact") }}</a>
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
          <div :key="skill.title" class="card" v-for="skill in skills">
            <i :class="skill.icon" style="font-size: 36px"></i>
            <h4>{{ skill.title }}</h4>
            <p>{{ skill.description }}</p>
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
            <div :key="project.id" class="swiper-slide" v-for="project in projects">
              <img :src="'/src/assets/images/' + project.image" alt="Project" />
              <h2>{{ project.name }}</h2>
              <a :href="'projects.html?tag=' + stack" :key="stack" v-for="stack in project.stack">
                <span class="tag">#{{ stack }}</span>
              </a>
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
          <li :key="experience.id" v-for="(experience, index) in experiences">
            <div class="timeline-badge">
              <span class="bi-briefcase-fill"></span>
            </div>
            <div :class="index % 2 === 0 ? 'timeline-panel-container' : 'timeline-panel-container-inverted'">
              <div class="timeline-panel">
                <div class="timeline-heading">
                  <h3>{{ experience.company }}</h3>
                  <h4>{{ experience.position }}</h4>
                  <p class="text-muted">
                    <span class="bi-clock-fill" style="color: var(--main-color)"></span>
                    {{ experience.period }}
                  </p>
                </div>
                <div class="timeline-body">
                  <p :key="task" v-for="task in experience.tasks">{{ task }}</p>
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
          <div :key="education.period" class="col-sm-6" v-for="education in educations">
            <div class="education-block">
              <h5>{{ education.period }}</h5>
              <span class="bi bi-mortarboard" style="font-size: 40px; color: var(--main-color)"></span>
              <h3>{{ education.institution }}</h3>
              <h4>{{ education.degree }}</h4>
              <div class="red-divider"></div>
              <p :key="detail" v-for="detail in education.details">{{ detail }}</p>
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
          <div class="row" style="display: flex; justify-content: center; text-align: center">
            <div
              class="col"
              style="display: flex; flex-direction: column; justify-content: center; align-items: center"
            >
              <li style="--color: var(--second-color)">
                <router-link :to="RouteName.Challenges" class="base"></router-link>
                <span class="title">Challenges</span>
                <span class="icon">
                  <i class="bi bi-hash"></i>
                </span>
              </li>
            </div>
            <div
              class="col"
              style="display: flex; flex-direction: column; justify-content: center; align-items: center"
            >
              <li style="--color: #64ffda">
                <router-link :to="RouteName.Projects" class="base"></router-link>
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
import { useI18n } from "vue-i18n";
import { RouterLink } from "vue-router";

import educationsJson from "../assets/data/education.json";
import experiencesJson from "../assets/data/experiences.json";
import projectsJson from "../assets/data/projects.json";
import skillsJson from "../assets/data/skills.json";
import NavBar from "../components/NavBar.vue";
import { RouteName } from "../router";

const experiences = ref(experiencesJson);
const educations = ref(educationsJson);
const projects = ref(projectsJson);
const skills = ref(skillsJson);
const { t } = useI18n();

// Declare refs for swiper and typed
const typed = ref<null | Typed>(null);
let swiper: null | Swiper = null;

// On mounted, initialize typed and swiper
onMounted(() => {
  // Initialize Typed.js
  typed.value = new Typed(".auto-type", {
    backSpeed: 150,
    loop: true,
    strings: [t("strings[0]"), t("strings[1]"), t("strings[2]")],
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
#about p {
  white-space: pre-wrap;
  text-align: center;
  max-width: 800px;
  margin: 20px auto; /* Add more margin on the y-axis */
}

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
  background: var(--third-color);
}
</style>
