<template>
  <div class="wrapper">
    <div class="content">
      <slot></slot>
    </div>
    <div class="close-button" @click="onCloseButtonClick">
      <fa :icon="['fas', 'times']" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    onCloseButtonClick: {
      type: Function,
      required: true
    }
  }
})
</script>

<style scoped>
@import '~/assets/styles/components/fullScreenWrapper.css';
</style>
