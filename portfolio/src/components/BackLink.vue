<template>
  <router-link :to="RouteName.Home" class="underline-hover-effect" v-if="$route.name !== 'Home'">
    Retour à l'accueil
  </router-link>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";

import { RouteName } from "../router";
</script>

<style lang="scss" scoped></style>
