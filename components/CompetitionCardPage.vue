<template>
  <div class="card-page-wrapper">
    <div class="nuxt-content-wrapper">
      <nuxt-content :document="pageData" tag="article" />
    </div>
    <div class="cross-button" @click="onCloseButtonClick">
      <fa :icon="['fas', 'times']" />
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  props: {
    pageData: {
      type: Object,
      required: true
    },
    onCloseButtonClick: {
      type: Function,
      required: true
    }
  }
})
</script>

<style scoped>
@import '~/assets/styles/components/competitionCardPage.css';
</style>

<style>
@import '~/assets/styles/nuxtContent.css';
</style>
