<template>
  <div class="tree">
    <router-link :to="RouteName.Home" class="underline-hover-effect" v-if="$route.name !== 'Home'">
      Retour à l'accueil
    </router-link>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";

import { RouteName } from "../router";
</script>

<style lang="scss" scoped>
.tree {
  padding: 1.5rem;
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
