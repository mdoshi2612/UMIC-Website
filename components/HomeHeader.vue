<template>
  <div class="wrapper">
    <img class="background" :src="require(`~/assets/images/${bgLink}`)" />
    <div :class="`content-wrapper ${rightSided ? 'content-right' : ''}`">
      <img
        class="logo"
        :src="require(`~/assets/images/${imageLink}`)"
        :alt="imgDescription"
      />
      <div class="description-wrapper">
        <p :class="`description ${rightSided ? 'description-right' : ''}`">
          {{ infoText }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    imageLink: {
      type: String,
      required: true
    },
    bgLink: {
      type: String,
      required: true
    },
    infoText: {
      type: String,
      required: true
    },
    imgDescription: {
      type: String,
      default: 'Image Description'
    },
    clickLink: {
      type: String,
      default: '/'
    },
    rightSided: {
      type: Boolean,
      default: false
    }
  }
})
</script>

<style scoped>
@import '~/assets/styles/components/homeHeader.css';
</style>
