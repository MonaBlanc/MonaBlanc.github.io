<template>
  <head>
    <link href="./assets/css/challenge.css" rel="stylesheet" />
  </head>
  <section class="quinconce-component images-only">
    <div class="sticky-container">
      <h1 class="quinconce-title">Challenges</h1>
    </div>
    <div class="quinconce-grid">
      <!-- Grid items -->
      <div
        :data-aos="'zoom-in-' + (index % 2 === 0 ? 'left' : 'right')"
        :key="index"
        class="grid-item"
        v-for="(challenge, index) in challenges"
      >
        <ChallengeItem :challenge="challenge" :index="index" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Challenge } from "../types";

import ChallengeItem from "./Challengeitem.vue";

const challenges: Challenge[] = [
  {
    caption: "Elles bougent",
    description:
      "Projet d'école écologique avec des lycéennes afin de sensibiliser sur l'utilisation de l'eau et optimiser la structure d'une école.",
    image: "https://www.ellesbougent.com/documents/actualites/2381/image_innovatech-2.zoom.jpg",
    medal: "https://img.icons8.com/emoji/512/2nd-place-medal-emoji.png",
    name: "Hackaton InnovaTech",
    organization: "Elles Bougent",
  },
  {
    caption: "SheCodes",
    description: "Projet de page d'accueil sur le thème du japon pour un concours de sites webs entre développeuses.",
    image:
      "https://coursereport-s3-production.global.ssl.fastly.net/uploads/school/logo/633/original/SheCodes_logo_square_white_background.png",
    medal: null,
    name: "Dream Travel Destination",
    organization: "SheCodes",
  },
  {
    caption: "Polytech Nancy",
    description:
      "Evènement de cybersécurité avec plusieurs épreuves réalisé en binôme organisé par le réseau Polytech.",
    image: "https://pbs.twimg.com/profile_images/1478391918920929281/klpZxcMf_400x400.jpg",
    medal: "https://img.icons8.com/emoji/512/2nd-place-medal-emoji.png",
    name: "Capture The Flag",
    organization: "Polytech",
  },
  {
    caption: "[Upcoming] Shecodes",
    description:
      "Projet de page d'accueil sur le thème de Your Name pour un concours de sites webs entre développeuses.",
    image:
      "https://coursereport-s3-production.global.ssl.fastly.net/uploads/school/logo/633/original/SheCodes_logo_square_white_background.png",
    medal: null,
    name: "Epic Movie Challenge",
    organization: "SheCodes",
  },
  {
    caption: "100 Days of Code",
    description: "Challenge de 100 jours durant lequel on réalise des projets dans plusieurs domaines.",
    image: "https://ironfocus.com/wp-content/uploads/2020/04/9-python.jpg",
    medal: null,
    name: "100 Days of Code",
    organization: "Python",
  },
  {
    caption: "CodinGame",
    description:
      "Le hackaton et une compétition de programmation en ligne 'CodinGame Spring Challenge 2023'. Challenge entre développeurs, afin de s'affronter sur les algorithmes et stratégies !",
    image: "https://meritis.fr/wp-content/uploads/2023/05/preview.jpg",
    medal:
      "https://png.pngtree.com/png-vector/20220808/ourmid/pngtree-bronze-award-icon-ranking-with-star-design-png-image_6100837.png",
    name: "CodinGame Spring Challenge",
    organization: "Python",
  },
];
</script>
