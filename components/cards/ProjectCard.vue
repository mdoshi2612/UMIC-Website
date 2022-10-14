<template>
  <div
    :class="`wrapper  ${hovering ? 'wrapper-hover' : ''}`"
    @mouseenter="hovering = true"
    @mouseleave="hovering = false"
  >
    <div :class="`container ${leftSided ? 'container-reverse' : ''}`">
      <div class="text-column">
        <transition name="fade" mode="out-in">
          <div v-if="hovering" key="hover" class="hover-column">
            <h2 class="heading-hover">{{ heading }}</h2>
            <p class="info-text">{{ information }}</p>
          </div>
          <div v-else key="non-hover" class="non-hover-column">
            <h2 class="heading-non-hover">{{ heading }}</h2>
          </div>
        </transition>
      </div>
      <div class="image-column">
        <img
          :src="require(`~/assets/images/${imageLink}`)"
          class="image"
          :alt="imageDescription"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    heading: {
      type: String,
      required: true
    },
    imageLink: {
      type: String,
      required: true
    },
    imageDescription: {
      type: String,
      default: 'Image Description'
    },
    information: {
      type: String,
      required: true
    },
    leftSided: {
      type: Boolean,
      default: false
    }
  },
  data() {
    const hovering: Boolean = false
    return {
      hovering
    }
  }
})
</script>

<style scoped>
@import '~/assets/styles/components/cards/projectCard.css';
</style>
