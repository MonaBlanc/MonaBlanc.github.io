<template>
  <h1>Projects</h1>
  <section id="selection">
    <span :class="{ selected: filterTag === 'all' }" @click="filterProjects('all')" class="tag">All</span>
    <span :class="{ selected: filterTag === 'Web Development' }" @click="filterProjects('Web Development')" class="tag">
      Web Development
    </span>
    <span :class="{ selected: filterTag === 'Full Stack' }" @click="filterProjects('Full Stack')" class="tag">
      Full Stack
    </span>
    <span :class="{ selected: filterTag === 'Software' }" @click="filterProjects('Software')" class="tag">
      Software
    </span>
  </section>
  <section class="container" id="projectList">
    <div :key="project.id" class="row" v-for="project in filteredProjects">
      <div class="col">
        <div :id="project.id" class="img-container">
          <p @click="showDialog(project.id)">&gt; Click here ! &lt;</p>
          <img :alt="project.name" :src="'/dist/assets/images/' + project.image" class="img-fluid" />
        </div>
      </div>
    </div>
  </section>

  <!-- Modal -->
  <div aria-hidden="true" aria-labelledby="projectModalLabel" class="modal fade" id="projectModal" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 :title="selectedProject?.name" class="modal-title" id="projectModalLabel">{{ selectedProject?.name }}</h5>
          <button
            :aria-label="`Close ${selectedProject?.name}`"
            class="btn-close"
            data-bs-dismiss="modal"
            type="button"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-md-6">
              <a :href="selectedProject?.link" target="_blank">
                <img :alt="selectedProject?.name" :src="`${selectedProject?.image}`" class="img-fluid" />
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
import { computed, onMounted, ref } from "vue";
import { useRoute } from "vue-router";

import type { Project } from "../types";

const route = useRoute();
const projectId: string | string[] = route.params.id;

const projects = ref<Project[]>([]);
const selectedProject = ref<null | Project>(null);
const filterTag = ref("all");

// Charger les projets depuis un fichier JSON au montage du composant
onMounted(async () => {
  try {
    const response = await fetch("/src/assets/data/projects.json");
    if (!response.ok) {
      throw new Error(`Échec du chargement des projets: ${response.statusText}`);
    }
    const contentType = response.headers.get("Content-Type");
    if (!contentType || !contentType.includes("application/json")) {
      throw new Error("La réponse obtenue n'est pas du JSON");
    }
    const data = await response.json();
    projects.value = data;
  } catch (error) {
    console.error(error);
  }

  // Afficher le dialogue du projet si un ID est présent
  if (projectIdString) {
    showDialog(projectIdString);
  }
});

function handleProjectId(id: string | string[]): string {
  if (Array.isArray(id)) {
    return id[0];
  }
  return id;
}
const projectIdString = handleProjectId(projectId);

const filteredProjects = computed(() => {
  return projects.value.filter((project: Project) => {
    if (filterTag.value === "all") {
      return true;
    } else {
      return project.category && Array.isArray(project.category) && project.category.includes(filterTag.value);
    }
  });
});

function filterProjects(tag: string): void {
  filterTag.value = tag;
}

function showDialog(id: string): void {
  // Convertir l'ID fourni en chaîne de caractères pour la comparaison
  const projectId = id.toString();
  const projectIndex = projects.value.findIndex((p: Project) => p.id.toString() === projectId);
  if (projectIndex !== -1) {
    selectedProject.value = projects.value[projectIndex];
    const modalElement = document.getElementById("projectModal");
    if (modalElement) {
      const modal = new Modal(modalElement);
      modal.show();
    } else {
      console.error("Élément modal introuvable.");
    }
  } else {
    console.error("Aucun projet trouvé avec l'ID fourni:", id);
  }
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
  display: flex;
  align-items: center;
  justify-content: center;
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
  background-color: var(--third-color);
  transition: background-color 0.3s ease;
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
