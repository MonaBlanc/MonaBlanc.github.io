<template>
  <h1>Projects</h1>
  <section id="selection">
    <span @click="filterProjects('all')" class="tag">All</span>
    <span @click="filterProjects('front')" class="tag">Front-End</span>
    <span @click="filterProjects('back')" class="tag">Back-End</span>
    <span @click="filterProjects('software')" class="tag">Software</span>
  </section>
  <section class="container" id="projectList">
    <div :key="project.id" class="row" v-for="project in filteredProjects">
      <div class="col">
        <div :id="project.id" class="img-container">
          <p @click="showDialog(project.id)">&gt; Click here ! &lt;</p>
          <img :src="'/src/assets/images/' + project.image" alt="Project Image" class="img-fluid" />
        </div>
      </div>
    </div>
  </section>

  <!-- Modal -->
  <div aria-hidden="true" aria-labelledby="projectModalLabel" class="modal fade" id="projectModal" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="projectModalLabel">{{ selectedProject?.name }}</h5>
          <button aria-label="Close" class="btn-close" data-bs-dismiss="modal" type="button"></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-md-6">
              <a :href="selectedProject?.link" target="_blank">
                <img :src="'/src/assets/images/' + selectedProject?.image" alt="Project Image" class="img-fluid" />
              </a>
            </div>
            <div class="col-md-6">
              <p>{{ selectedProject?.description }}</p>
              <p>Year: {{ selectedProject?.year }}</p>
              <p>Stack:</p>
              <ul>
                <li :key="stack" v-for="stack in selectedProject?.stack">{{ stack }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Modal } from "bootstrap";
import { computed, ref } from "vue";

import type { Project } from "../types";

const projects: Project[] = [
  {
    category: "front",
    description:
      "Gunpla Eshop is an e-commerce platform specifically designed for Gundam plastic model (Gunpla) enthusiasts.",
    id: "GunplaEshop",
    image: "GunplaEshop.png",
    isVisible: true,
    link: "https://github.com/MonaBlanc/GunplaShop-frontend/blob/master/README.md",
    name: "GunplaEshop",
    stack: ["React", "Tailwind CSS", "H2", "Spring Boot"],
    year: "2023",
  },
  {
    category: "back",
    description:
      "Chefbot helps you choose what to eat depending on your diet and even helps you make your grocery list!",
    id: "ChefBot",
    image: "ChefBotPlus.png",
    isVisible: true,
    link: "https://github.com/MonaBlanc/ChatBot/blob/master/README.md",
    name: "Chefbot",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    year: "2022-2023",
  },
  {
    category: "software",
    description:
      "The Blackjack Python Console Game is a text-based implementation of the popular casino card game, Blackjack. It allows players to play against a computer dealer and experience the excitement of trying to beat the house.",
    id: "BlackJack",
    image: "BlackjackSquare.png",
    isVisible: true,
    link: "https://github.com/MonaBlanc/100DaysOfCode/tree/main/Day%2011%20-%20Blackjack",
    name: "BlackJack",
    stack: ["Python"],
    year: "2023",
  },
  {
    category: "software",
    description:
      "Made a python application to help me while learning Japanese words and did it with Flaschards system where as long as you don't get the word, you will have to train for it.",
    id: "FlashCards",
    image: "FlashCards.png",
    isVisible: true,
    link: "https://github.com/MonaBlanc/100DaysOfCode/tree/main/Day%2031%20-%20Flash%20Cards%20App",
    name: "Flashcards",
    stack: ["Python", "Pandas", "Tkinter"],
    year: "2023",
  },
];

const filterTag = ref("all");
const selectedProject = ref<null | Project>(null);

const filteredProjects = computed(() => {
  return projects.filter((project) => {
    if (filterTag.value === "all") {
      return true;
    } else if (filterTag.value === "front") {
      return project.category === "front";
    } else if (filterTag.value === "back") {
      return project.category === "back";
    } else if (filterTag.value === "software") {
      return project.category === "software";
    }
  });
});

function showDialog(id: string): void {
  const project = projects.find((p) => p.id === id);
  if (project) {
    selectedProject.value = project;
    const modal = new Modal(document.getElementById("projectModal")!);
    modal.show();
  }
}

function filterProjects(tag: string): void {
  filterTag.value = tag;
}
</script>

<style scoped lang="scss">
* {
  scroll-behavior: smooth;
}

/* TAGS SELECTORS */
h1 {
  text-align: center;
  color: white;
  padding-top: 5%;
}

#selection {
  /* Center the tags in the section */
  display: flex;
  align-items: center;
  justify-content: center;
  /* Make the section take up the whole width of the page */
  width: 100%;
}

#projectList {
  display: flex;
  flex-flow: row-reverse wrap;
  justify-content: center;
  gap: 10px;
}

#projectList .item {
  gap: 10px;
  flex-grow: 1;
  transition: all ease 0.5s;
  overflow: hidden;
}

#projectList .item #GunplaEshop {
  flex-grow: 4;
}

#projectList .img-container {
  position: relative;
  overflow: hidden;
}

#projectList .img-container p {
  position: absolute;
  color: var(--second-color);
  visibility: hidden;
  transition:
    visibility 0s,
    opacity 0.5s linear;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  font-weight: bold;
  font-size: 1.25rem;
}

/* Modal styles */
.modal {
  display: none;
  animation: pop-dialog ease 0.2s both;
  border: 0px;
  border-radius: 10px;
  backdrop-filter: blur(2px);
}

.modal-content {
  background-color: var(--third-color); /* Your desired background color */
  transition: background-color 0.3s ease; /* Smooth transition effect */
}

@keyframes pop-dialog {
  from {
    opacity: 0;
    transform: rotate(10deg) scale(0.7);
  }

  to {
    opacity: 1;
    transform: rotate(0deg) scale(1);
  }
}

.modal[open] {
  display: block;
  outline: 0;
}

.modal::backdrop {
  animation: pop-backdrop ease 1s both;
  background: rgba(0, 0, 0, 0.5);
}

@keyframes pop-backdrop {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.slide-fwd-center {
  animation: slide-fwd-center 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

@keyframes slide-fwd-center {
  0% {
    transform: translateZ(0);
  }
  100% {
    transform: translateZ(160px);
  }
}

.description {
  padding: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 10px;
  background-color: var(--main-color);
}

.colSide {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 50px;
  align-items: center;
}

em {
  color: white;
  font-size: 0.8rem;
}

.description h2#ModalTitle {
  color: white;
  text-align: left;
  padding-top: 0;
  margin-bottom: 0;
}

.description p {
  color: white;
}

.description svg {
  cursor: pointer;
}

.description svg path {
  fill: var(--bg-color);
}

.description img {
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}

/* Hover effect on the item */
#projectList .img-container:hover img {
  transform: scale(1.1);
  filter: grayscale(1) opacity(0.6) blur(1px);
  cursor: pointer;
}

#projectList .img-container:hover p {
  visibility: visible;
  opacity: 1;
  cursor: pointer;
}

#projectList img {
  aspect-ratio: 4/3;
  width: 300px;
  transition: all ease 0.5s;
}

#projectList h2 {
  text-align: center;
  color: white;
  padding-top: 5%;
}

.tree {
  padding: 1.5rem;
}

/* Homepage redirection */

a {
  color: var(--third-color);
  text-decoration: none;
}

a:hover {
  color: var(--third-color);
  text-decoration: underline;
}

a.underline-hover-effect {
  text-decoration: none;
  color: var(--third-color);
}

.underline-hover-effect {
  display: inline-block;
  padding-bottom: 0.15rem;
  position: relative;
}

.underline-hover-effect::before {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  height: 1px;
  background-color: var(--third-color);
  transition: width 0.25s ease-out;
}
.underline-hover-effect:hover::before {
  width: 100%;
}
</style>
