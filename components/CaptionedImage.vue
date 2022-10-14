<template>
  <div class="captioned-image-wrapper">
    <div
      class="captioned-image-container"
      @mouseenter="hovering = true"
      @mouseleave="hovering = false"
    >
      <img
        :src="require(`~/assets/images/${imageSrc}`)"
        :alt="imageAlt"
        class="image"
      />
      <transition name="fade">
        <p v-if="hovering" class="caption">{{ caption }}</p>
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    caption: {
      type: String,
      required: true
    },
    imageSrc: {
      type: String,
      required: true
    },
    imageAlt: {
      type: String,
      required: true
    }
  },
  data() {
    const hovering = false
    return { hovering }
  }
})
</script>

<style scoped>
@import '~/assets/styles/components/captionedImage.css';
</style>
