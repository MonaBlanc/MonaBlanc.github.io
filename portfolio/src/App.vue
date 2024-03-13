<script setup lang="ts">
import { RouterView, useRoute } from "vue-router";

import BackLink from "./components/BackLink.vue";
</script>

<template>
  <div>
    <BackLink />
    <router-view :key="useRoute().fullPath" v-slot="{ Component }"><component :is="Component" /></router-view>
  </div>
</template>

<style lang="scss">
/* GENERAL */

* {
  scroll-behavior: smooth;
}

:root {
  --main-color: #007ea7;
  --second-color: #ccdbdc;
  --third-color: #80ced7;
  --bg-color: #003249;
  --main-grid: repeat(auto-fill, minmax(300px, 1fr));
  --main-padding: 40px;
}

body {
  font-family: "Rubik", sans-serif;
  overflow-x: hidden;
  background-color: var(--bg-color);
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: bold;
}

img {
  max-width: 100%;
  height: auto;
}

.divider {
  width: 100px;
  height: 3px;
  margin: 0 auto 20px;
  background-color: var(--third-color);
}

.divider.white {
  background-color: var(--second-color);
  width: 100px;
  height: 3px;
  border-style: dotted;
  margin: 30px auto;
}

ul {
  list-style: none;
}

section {
  padding: 45px 0 80px 0;
}

section .heading {
  text-align: center;
  padding-bottom: 40px;
}

/*ABOUT*/

#about {
  background-color: var(--bg-color);
}
.avatar {
  text-align: center;
  margin: 0px auto 10px;
}

#about .heading h1 {
  color: var(--second-color);
}
#about .heading h3 {
  color: var(--main-color);
}
#about .heading p {
  color: #fff;
}
#about span {
  color: var(--third-color);
}

#about a.underline-hover-effect {
  text-decoration: none;
  color: var(--third-color);
}

#about .underline-hover-effect {
  display: inline-block;
  padding-bottom: 0.15rem;
  position: relative;
}

#about .underline-hover-effect::before {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  height: 1px;
  background-color: var(--third-color);
  transition: width 0.25s ease-out;
}
#about .underline-hover-effect:hover::before {
  width: 100%;
}

/*SKILLS*/

#skills {
  text-align: center;
  padding-top: var(--main-padding);
  padding-bottom: var(--main-padding);
  background-color: var(--bg-color);
}

.skills {
  margin: 0px auto 10px;
}

.container {
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;
}

.skills .text {
  padding-bottom: 20px;
}

.skills h2 {
  font-size: 45px;
  color: white;
  padding-bottom: 20px;
}

.skills p {
  font-size: 18px;
  color: var(--main-color);
  font-weight: 400;
}

.skills .skill-card {
  display: grid;
  grid-template-columns: var(--main-grid);
  grid-gap: 60px;
  margin-bottom: 70px;
  margin-top: 60px;
}

.skills .skill-card .card {
  padding: 25px;
  text-align: center;
  background-color: var(--bg-color);
  border: 2px solid var(--main-color);
  color: var(--second-color);
  transition: 1s;
  position: relative;
}

.skills .card h4 {
  padding-top: 30px;
  padding-bottom: 10px;
  font-size: 25px;
  font-weight: 500;
}

.skills .card p {
  line-height: 1.7;
  font-size: 16px;
  color: var(--second-color);
}

.skills .card i {
  font-size: 42px;
  padding: 15px;
  width: 75px;
  height: 75px;
  color: var(--second-color);
  background-color: var(--main-color);
  position: absolute;
  top: calc(-75px / 2);
  transform: rotate(45deg);
  left: 40%;
  transition: 1s;
  border: 1px solid var(--main-color);
}

.skills .card:hover {
  background-color: transparent;
}

.skills .card:hover i {
  transform: rotate(0deg);
  background-color: var(--bg-color);
}

.skills .card:hover h4,
.skills .card:hover p {
  color: var(--third-color);
  transition: 1s;
}

.skills a {
  border: 1px solid var(--main-color);
  background-color: var(--main-color);
  border-radius: 2px;
  color: var(--second-color);
  transition: background-color 0.8s;
  padding: 12px 20px;
  letter-spacing: 1.5px;
  z-index: 50px;
  text-decoration: none;
}

.skills a:hover {
  background-color: var(--third-color);
  color: var(--main-color);
}

/*PROJECTS*/

#portfolio {
  width: 100%;
  height: 100%;
  background-color: var(--bg-color);
}

#portfolio .heading h2 {
  font-size: 45px;
  color: white;
  padding-bottom: 20px;
}

#portfolio .container {
  padding-left: 15px;
  padding-right: 15px;
  text-align: center;
  flex-wrap: wrap;
  position: relative;
  height: 100%;
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

/*EXPERIENCE*/

#experience {
  background-color: var(--bg-color);
}
#experience .heading h2 {
  font-size: 45px;
  color: white;
  padding-bottom: 20px;
}
.timeline {
  padding: 30px 10px;
  position: relative;
}
.timeline:before {
  top: 0;
  bottom: 0;
  position: absolute;
  content: " ";
  width: 5px;
  background-color: var(--third-color);
  left: 50%;
  margin-left: -2.5px;
}
.timeline > li {
  margin-bottom: 20px;
  position: relative;
}
.timeline > li:before,
.timeline > li:after {
  content: " ";
  display: table;
}
.timeline > li:after {
  clear: both;
}
.timeline li .timeline-badge {
  color: var(--main-color) !important;
  width: 50px;
  line-height: 50px;
  font-size: 20px;
  text-align: center;
  position: absolute;
  top: 16px;
  left: 50%;
  margin-left: -25px;
  background-color: var(--bg-color);
  border-radius: 50%;
}
.timeline-panel-container {
  width: 50%;
  float: left;
}
.timeline-panel-container-inverted {
  width: 50%;
  float: right;
}

.timeline-panel {
  width: 90%;
  float: right;
  margin-right: 40px;
  border: 1px solid rgb(214, 205, 205);
  border-radius: 7px;
  padding: 20px 25px;
  position: relative;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.175);
  background-color: white;
}
.timeline-panel-container-inverted .timeline-panel {
  float: left;
  margin-left: 40px;
}
.timeline-panel:after {
  position: absolute;
  top: 27px;
  right: -14px;
  display: inline-block;
  border-top: 14px solid transparent;
  border-left: 14px solid white;
  border-right: 0 solid white;
  border-bottom: 14px solid transparent;
  content: " ";
}
.timeline-panel-container-inverted .timeline-panel:after {
  border-left-width: 0;
  border-right-width: 14px;
  left: -14px;
  right: auto;
}
.timeline-heading h3 {
  margin-top: 5px;
  font-size: 20px;
  color: var(--main-color);
}
.timeline-heading h4 {
  color: var(--bg-color);
}

/* EDUCATION*/

#education {
  background: var(--bg-color);
}

#education .heading h2 {
  font-size: 45px;
  color: white;
  padding-bottom: 20px;
}

.education-block {
  width: 80%;
  margin: 0 auto;
  text-align: center;
  padding: 30px;
  margin-bottom: 20px;
  background: var(--bg-color);
  border-radius: 10px;
  border: 2px solid var(--third-color);
}

.education-block:hover {
  width: 80%;
  margin: 0 auto;
  text-align: center;
  padding: 30px;
  background: var(--second-color);
  border-radius: 10px;
  border: 2px solid var(--third-color);
  margin-bottom: 20px;
  transition: 1s;
}

.education-block:hover h3,
.education-block:hover p {
  color: var(--bg-color);
  transition: 1s;
}

.education-block:hover h5 {
  color: var(--main-color);
  transition: 1s;
}

.education-block h5 {
  color: var(--third-color);
  font-size: 15px;
  margin-bottom: 15px;
}

.education-block h3 {
  color: var(--second-color);
}

.education-block h4 {
  margin-bottom: 20px;
  color: var(--main-color);
}

.education-block p {
  font-weight: bold;
  color: var(--second-color);
}

/*FOOTER*/

footer {
  background: var(--bg-color);
  text-align: center;
  padding: 0px 0 20px;
}

footer .iconfoot {
  font-size: 25px;
  margin: 20px;
  color: var(--third-color);
  height: 30px;
}

footer .iconfoot:hover {
  font-size: 50px;
}

footer h5 {
  color: var(--second-color);
  font-weight: normal;
}

.box {
  flex: 1;
  overflow: hidden;
  transition: 0.5s;
  margin: 0 2%;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.1);
  line-height: 0;
  flex-direction: column;
  position: relative;
}

.box > img {
  width: 200%;
  height: calc(100% - 10vh);
  object-fit: cover;
  transition: 0.5s;
  position: absolute;
  top: 0;
  left: 0;
}

.box > span {
  font-size: 3vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 12%;
  padding: 10px 0;
  background-color: #d2f1ff;
  color: #001d5b;
  opacity: 0;
  transition: 0.5s;
  transform: translateY(-0%);
  font-family: "Rubik", sans-serif;
}

.box:hover {
  flex: 1 1 50%;
}

.box:hover > img {
  width: 100%;
  height: 100%;
}

.box:hover > span {
  opacity: 1;
}

.containerPro {
  display: flex;
  width: 100%;
  padding: 4% 2%;
  box-sizing: border-box;
  height: 45vh;
}

/* Certifications */

/* Certifications */

#certifications {
  text-align: center;
  background-color: var(--bg-color);
}

#certifications h2 {
  color: white;
  font-size: 45px;
  padding-bottom: 20px;
}

#certifications ul {
  padding-top: 100px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  list-style-type: none;
}

#certifications ul li {
  position: relative;
  display: grid;
  place-items: center;
  width: 200px;
  height: 200px;
}

#certifications li .base {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 8px solid var(--color);
  border-left: 8px solid transparent;
  animation: spin 8s linear infinite;
  filter: drop-shadow(0 0 10px var(--color));
}

@keyframes spin {
  0% {
    transform: rotateX(60deg) rotateZ(0);
  }
  100% {
    transform: rotateX(60deg) rotateZ(-360deg);
  }
}

#certifications li .base::after {
  position: absolute;
  content: "";
  width: 30px;
  height: 30px;
  top: 9px;
  left: 9px;
  border-radius: 50%;
  background-color: var(--color);
}

#certifications li .base,
li .title,
li .icon,
li .details {
  position: absolute;
  color: #b5b5b5;
  transform: rotateX(60deg) rotateZ(-25deg);
  cursor: pointer;
  transition: 0.5s ease-in-out;
}

#certifications li .title {
  text-transform: uppercase;
  font-size: 22px;
  font-weight: 700;
  letter-spacing: 2px;
  transform: rotateY(10deg) skewY(-12deg) translateY(-100px);
  opacity: 1;
  pointer-events: none;
}

#certifications li .icon {
  display: grid;
  place-items: center;
  font-size: 80px;
  height: 100%;
  pointer-events: none;
}

.base:hover ~ .title {
  transform: rotateY(10deg) skewY(-12deg) translateY(-160px);
  color: var(--color);
  filter: drop-shadow(0 0 3px var(--color));
  animation: wave 1s ease-in-out infinite;
}

@keyframes wave {
  0%,
  100% {
    margin-bottom: 0;
  }
  50% {
    margin-bottom: 15px;
  }
}

.base:hover {
  filter: drop-shadow(0 0 10px var(--color));
  animation-play-state: paused;
}

.base:hover + .title + .icon {
  transform: rotateY(10deg) skewY(-12deg) translateY(-160px);
  color: var(--color);
  filter: drop-shadow(0 0 2px var(--color));
  animation: wave 1s ease-in-out infinite;
}

.base:hover + .title {
  color: var(--color);
  transform: rotateY(10deg) skewY(-12deg) translateY(-90px);
  text-shadow: 0 0 1px var(--color);
  transition-delay: 0.1s;
  animation: wave 1s ease-in-out infinite;
}

#certifications .row {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: auto;
  align-items: center;
  list-style-type: none;
}
</style>
