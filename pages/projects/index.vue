<template>
  <div class="project-wrapper">
    <UMICLogoTopLeft />
    <div class="container">
      <h1>Projects</h1>
      <div class="cards-container">
        <div
          v-for="(project, index) in projectData"
          :key="index"
          class="card-wrapper"
        >
          <CardsProjectCard
            :heading="project.heading"
            :image-link="project.imageLink"
            :image-description="project.imageDescription"
            :information="project.infoText"
            :left-sided="index % 2 === 0"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Context } from '@nuxt/types'
import Vue from 'vue'

export default Vue.extend({
  async asyncData({ $content }: Context) {
    const projectData = await $content('projects').fetch()
    return { projectData }
  }
})
</script>

<style scoped>
@import '~/assets/styles/pages/projects/index.css';
</style>
