<template>
  <div class="gallery-page-wrapper">
    <UMICLogoTopLeft />
    <h1 class="page-heading">Gallery</h1>
    <div
      v-for="(gallery, index) in galleryData"
      :key="index"
      class="gallery-container"
    >
      <Gallery :heading="gallery.heading" :images="gallery.images" />
    </div>
  </div>
</template>

<script lang="ts">
import { Context } from '@nuxt/types'
import Vue from 'vue'

export default Vue.extend({
  async asyncData({ $content }: Context) {
    const galleryData = [
      {
        heading: 'Achievements',
        images: await $content('images')
          .where({ visible: true })
          .where({ type: 'achievement' })
          .fetch()
      },
      {
        heading: 'Team',
        images: await $content('images')
          .where({ visible: true })
          .where({ type: 'team' })
          .fetch()
      },
      {
        heading: 'Robots',
        images: await $content('images')
          .where({ visible: true })
          .where({ type: 'robot' })
          .fetch()
      },
      {
        heading: 'Miscellaneous',
        images: await $content('images')
          .where({ visible: true })
          .where({ type: 'misc' })
          .fetch()
      }
    ]
    return { galleryData }
  }
})
</script>

<style scoped>
@import '~/assets/styles/pages/gallery.css';
</style>
