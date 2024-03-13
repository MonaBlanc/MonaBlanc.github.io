<template>
  <head>
    <link rel="stylesheet" href="./assets/css/challenge.css">
  </head>
  <section class="quinconce-component images-only">
    <a class="underline-hover-effect" href="/index.html">Retour à l'accueil</a>
    <div class="sticky-container">
      <h1 class="quinconce-title">Challenges</h1>
    </div>
    <div class="quinconce-grid">
      <!-- Grid items -->
      <div v-for="(challenge, index) in challenges" :key="index"
        :data-aos="'zoom-in-' + (index % 2 === 0 ? 'left' : 'right')" class="grid-item">
        <div class="wysiwyg"></div>
        <div class="img-container">
          <div class="caption-wrapper">
            <img :src="challenge.image" class="project" />
            <img v-if="challenge.medal" :src="challenge.medal" alt="avatar" class="avatar" />
            <div class="information">
              <h1 class="name">{{ challenge.name }}</h1>
              <h2 class="position">{{ challenge.organization }}</h2>
              <p class="description">{{ challenge.description }}</p>
            </div>
            <div class="caption">
              <p>{{ challenge.caption }}</p>
              <p>{{ challenge.number }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Challenges',
  data() {
    return {
      challenges: [
        {
          name: 'Hackaton InnovaTech',
          organization: 'Elles Bougent',
          description: "Projet d'école écologique avec des lycéennes afin de sensibiliser sur l'utilisation de l'eau et optimiser la structure d'une école.",
          image: 'https://www.ellesbougent.com/documents/actualites/2381/image_innovatech-2.zoom.jpg',
          medal: 'https://img.icons8.com/emoji/512/2nd-place-medal-emoji.png',
          caption: 'Elles bougent',
          number: '01'
        },
        {
          name: 'Dream Travel Destination',
          organization: 'SheCodes',
          description: "Projet de page d'accueil sur le thème du japon pour un concours de sites webs entre développeuses.",
          image: 'https://coursereport-s3-production.global.ssl.fastly.net/uploads/school/logo/633/original/SheCodes_logo_square_white_background.png',
          medal: null,
          caption: 'SheCodes',
          number: '02'
        },
        {
          name: 'Capture The Flag',
          organization: 'Polytech',
          description: "Evènement de cybersécurité avec plusieurs épreuves réalisé en binôme organisé par le réseau Polytech.",
          image: 'https://pbs.twimg.com/profile_images/1478391918920929281/klpZxcMf_400x400.jpg',
          medal: 'https://img.icons8.com/emoji/512/2nd-place-medal-emoji.png',
          caption: 'Polytech Nancy',
          number: '03'
        },
        {
          name: 'Epic Movie Challenge',
          organization: 'SheCodes',
          description: "Projet de page d'accueil sur le thème de Your Name pour un concours de sites webs entre développeuses.",
          image: 'https://coursereport-s3-production.global.ssl.fastly.net/uploads/school/logo/633/original/SheCodes_logo_square_white_background.png',
          medal: null,
          caption: '[Upcoming] Shecodes',
          number: '04'
        },
        {
          name: '100 Days of Code',
          organization: 'Python',
          description: "Challenge de 100 jours durant lequel on réalise des projets dans plusieurs domaines.",
          image: 'https://ironfocus.com/wp-content/uploads/2020/04/9-python.jpg',
          medal: null,
          caption: '100 Days of Code',
          number: '05'
        },
        {
          name: 'CodinGame Spring Challenge',
          organization: 'Python',
          description: "Le hackaton et une compétition de programmation en ligne 'CodinGame Spring Challenge 2023'. Challenge entre développeurs, afin de s'affronter sur les algorithmes et stratégies !",
          image: 'https://meritis.fr/wp-content/uploads/2023/05/preview.jpg',
          medal: 'https://png.pngtree.com/png-vector/20220808/ourmid/pngtree-bronze-award-icon-ranking-with-star-design-png-image_6100837.png',
          caption: 'CodinGame',
          number: '06'
        }
      ]
    };
  }
});
</script>
  