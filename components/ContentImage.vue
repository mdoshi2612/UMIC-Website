<template>
  <img
    v-if="width !== 50"
    :src="require(`~/assets/images/${src}`)"
    :alt="alt"
    :style="{ width: `${width}%`, margin: `0 ${(100 - width) / 2}%` }"
  />
  <img v-else :src="require(`~/assets/images/${src}`)" :alt="alt" />
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      default: ''
    },
    width: {
      type: Number,
      default: 50
    }
  }
})
</script>
