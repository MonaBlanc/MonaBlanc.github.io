<template>
  <div class="wysiwyg"></div>
  <div class="img-container">
    <div class="caption-wrapper">
      <img :src="challenge.image" class="project" />
      <img :src="challenge.medal" alt="avatar" class="avatar" v-if="challenge.medal" />
      <div class="information">
        <h1 class="name">{{ challenge.name }}</h1>
        <h2 class="position">{{ challenge.organization }}</h2>
        <p class="description">{{ challenge.description }}</p>
      </div>
      <div class="caption">
        <p>{{ challenge.caption }}</p>
        <p>{{ index }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Challenge } from "../types";

defineProps<{
  challenge: Challenge;
  index: number;
}>();
</script>

<style lang="scss" scoped>
body,
h1,
h2,
p {
  margin: 0;
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

/* Quinconce */

.quinconce-component {
  margin: 0 8vw;
}

.quinconce-title {
  font-size: 70px;
  font-size: min(70px, 15vw);
  line-height: 0.94em;
  font-weight: 300;
  text-align: center;
  text-transform: uppercase;

  position: relative;
  z-index: 1;
  margin-bottom: -0.4em;
  color: white;
  mix-blend-mode: difference;

  display: flex;
  flex-direction: column;
}
.quinconce-grid {
  display: grid;
  grid-auto-flow: row;
  grid-auto-rows: auto;
  grid-template-columns: 1fr;
}

.grid-item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.grid-item:nth-child(2n + 2) {
  flex-direction: row-reverse;
}
.wysiwyg,
.img-container {
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.img-container .project {
  width: 100%;
  max-width: 100%;
  object-fit: cover;
  object-position: 50% 50%;
  border-radius: 40px;
  aspect-ratio: 1/1;
}

.wysiwyg {
  padding: 150px 0;
  min-height: 50px;
}
.grid-item + .grid-item {
  margin-top: -100px;
}

.img-container {
  font-size: 16px;
  line-height: 1em;
  color: white;
  font-weight: bold;
}
.img-container > .caption-wrapper {
  position: relative;
}
.caption {
  text-transform: uppercase;
  position: absolute;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
/* right imgs */
.grid-item:nth-child(2n + 1) .caption {
  right: 0;
  align-items: flex-end;
}
.grid-item:nth-child(2n + 1) .caption :first-child {
  transform-origin: top left;
  transform: translateX(100%) rotateZ(90deg);
}
.grid-item:nth-child(2n + 1) .caption :last-child {
  transform-origin: bottom right;
  transform: rotateZ(90deg) translateY(100%);
}

.grid-item:nth-child(2n + 2) .caption {
  left: 0;
  align-items: flex-start;
}
.grid-item:nth-child(2n + 2) .caption :first-child {
  transform-origin: top left;
  transform: rotateZ(90deg) translateY(-100%);
}
.grid-item:nth-child(2n + 2) .caption :last-child {
  transform-origin: bottom right;
  transform: translateX(-100%) rotateZ(90deg);
}
.caption {
  overflow: hidden;
}
.caption > p:first-child {
  padding-right: 10px;
  position: relative;
  z-index: 1;
}
.caption > p:last-child {
  padding-left: 10px;
}
.caption > p::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: var(--bg-color);
  z-index: -1;
}
.caption > p:first-child::before {
  left: 0;
}
.caption > p:last-child::before {
  right: 0;
}
.caption :last-child::after {
  content: "";
  position: absolute;
  top: 0.5em;
  right: 0;
  display: inline-block;
  width: 100px;
  height: 1px;
  background-color: white;
  transform-origin: right;
  z-index: -2;
}

.caption-wrapper {
  padding: 0 2em;
}

/* sticky title */
.quinconce-component.images-only .sticky-container {
  height: 100vh;
  position: sticky;
  display: flex;
  justify-content: center;
  align-items: center;
  mix-blend-mode: difference;
  color: white;
  top: 0;
  bottom: 0;
  z-index: 1;
  pointer-events: none;
  /* transform: translateY(-50%); */
}
.quinconce-component.images-only .quinconce-grid {
  margin-top: -100vh;
}
.quinconce-component.images-only .wysiwyg,
.quinconce-component.images-only .img-container {
  width: 34%;
}

/* hovering */
.caption-wrapper a {
  display: block;
  overflow: hidden;
}
.caption-wrapper img {
  aspect-ratio: 1/1;
  object-fit: cover;
  transition: transform 0.6s ease-in-out 0s;
}
.caption {
  pointer-events: none;
}
.caption p {
  pointer-events: all;
}

.caption-wrapper:hover a:not([href]) {
  cursor: default;
}
.caption-wrapper:hover a[href] img {
  transform: scale(1.1);
}

/* wysiwyg what you see is what you get  */

.wysiwyg {
  max-width: 40ch;
}
.grid-item:nth-child(2n + 1) .wysiwyg {
  margin: auto 5% auto 10%;
}
.grid-item:nth-child(2n + 2) .wysiwyg {
  margin: auto 10% auto 5%;
}
.wysiwyg h2 {
  font-size: 2em;
  font-weight: 300;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
.wysiwyg p {
  display: inline-block;
}
.wysiwyg h2:first-letter {
  text-transform: capitalize;
}
.wysiwyg h2 :nth-child(1) {
  transform: translateX(2ch);
}
.wysiwyg h2 :nth-child(2) {
  transform: translateX(-2ch);
}

/* .wysiwyg h2 :nth-child(3n - 2) { transform: translateX(-10%); }
.wysiwyg h2 :nth-child(3n - 1) { transform: translateX(-20%); }
.wysiwyg h2 :nth-child(3n) { transform: none; } */

.wysiwyg h2 :last-child {
  transform: none;
}

.wysiwyg > h2 + p {
  margin-top: 1.5em;
}
.wysiwyg > p {
  font-size: 18px;
  line-height: 1.5em;
}
.wysiwyg > p + p {
  margin-top: 1em;
}

/* quotation mark */
.wysiwyg h2.quotation-mark :first-child {
  position: relative;
}
.wysiwyg h2.quotation-mark :first-child::before {
  content: "“";
  position: absolute;
  top: -50%;
  right: 0;
  font-size: 6em;
  line-height: 1em;
  color: var(--third-color);
  z-index: -1;
}

/* mobile view */
@media screen and (max-width: 768px) {
  .quinconce-component:not(.images-only) .grid-item {
    flex-direction: column-reverse !important;
  }
  .wysiwyg {
    width: auto;
    max-width: 100%;
  }
  .img-container {
    width: 100%;
  }
  .quinconce-component:not(.images-only) .grid-item + .grid-item {
    margin-top: 0;
  }
  .quinconce-component.images-only .grid-item + .grid-item {
    margin-top: 40px;
  }
  .quinconce-component.images-only .wysiwyg {
    width: 0;
  }
  .quinconce-component.images-only .img-container {
    width: 75%;
  }
  .wysiwyg {
    margin: 2em auto 2em 2em !important;
    padding: 0;
  }

  .wysiwyg h2 :nth-last-child(2) {
    transform: none;
  }
  .wysiwyg h2 :last-child {
    transform: translateX(2ch);
  }
}

.user-card {
  color: var(--bg-color);
  padding: 40px 0;
  border-radius: 40px;
  width: 45%;
}

.container {
  margin: 0 auto;
  width: 300px;
  height: 465px;
  background: white;
  border-radius: 3px;
  position: relative;
}

.information {
  text-align: center;
  padding: 5px;
}

.avatar {
  position: absolute;
  width: 100px;
  top: -2%;
  left: calc(50% - 45px);
  filter: drop-shadow(8px 6px 8px rgb(0 0 0 / 50%));
}

.avatar-league {
  position: absolute;
  width: 100px;
  top: -7%;
  left: calc(50% - 45px);
  filter: drop-shadow(8px 6px 8px rgb(0 0 0 / 50%));
}

.name {
  font-size: 22px;
}

.position {
  font-size: 16px;
  color: lightgray;
  margin-bottom: 24px;
}

.description {
  font-size: 18px;
  color: white;
  font-weight: lighter;
  margin-bottom: 24px;
  font-family: serif;
}
</style>
