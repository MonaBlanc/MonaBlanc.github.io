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

        <button @click="machin()">machin {{ valeur }} + {{ computedValue }}</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";

import type { Challenge } from "../types";

defineProps<{
  challenge: Challenge;
  index: number;
}>();

const valeur = ref<number>(0);
const computedValue = computed(() => {
  return valeur.value * 200;
});

function machin(): void {
  valeur.value += 10;
}
</script>

<style lang="scss" scoped></style>
