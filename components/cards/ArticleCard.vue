<template>
  <div :class="`container ${rightSided ? 'container-reverse' : ''}`">
    <div class="col">
      <p class="date">{{ dateString }}</p>
    </div>
    <div class="col content-col">
      <h4>
        <a :href="contentLink">{{ title }}</a>
      </h4>
      <p>{{ content }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    content: {
      type: String,
      required: true
    },
    contentLink: {
      type: String,
      default: ''
    },
    date: {
      type: String,
      required: true
    },
    rightSided: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      required: true
    }
  },
  data() {
    const dateString = new Date(this.date).toLocaleString('default', {
      month: 'short',
      year: 'numeric'
    })
    return {
      dateString
    }
  }
})
</script>

<style scoped>
@import '~/assets/styles/components/cards/articleCard.css';
</style>
