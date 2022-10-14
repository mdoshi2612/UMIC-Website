<template>
  <div class="team-card-wrapper">
    <div class="team-card-container">
      <div class="front">
        <div class="image-container">
          <img :src="require(`~/assets/images/${image}`)" />
        </div>
        <h3>{{ name }}</h3>
        <div class="line" />
        <h4>{{ position }}</h4>
        <h4>Team : {{ teamName }}</h4>
      </div>
      <div class="back">
        <div v-if="email === ''" class="envelope back-container back-hidden">
          <fa :icon="['fas', 'envelope']" />
        </div>
        <a
          v-else
          class="envelope back-container"
          :href="`mailto:${email}`"
          style="--hover-color: var(--gmail-red)"
        >
          <fa :icon="['fas', 'envelope']" />
        </a>
        <div v-if="fb === ''" class="facebook back-container back-hidden">
          <fa :icon="['fab', 'facebook-square']" />
        </div>
        <a
          v-else
          class="facebook back-container"
          :href="`${fb}`"
          target="_blank"
          style="--hover-color: var(--facebook-blue)"
        >
          <fa :icon="['fab', 'facebook-square']" />
        </a>
        <div v-if="linkedin === ''" class="linkedin back-container back-hidden">
          <fa :icon="['fab', 'linkedin']" />
        </div>
        <a
          v-else
          class="linkedin back-container"
          :href="`${linkedin}`"
          target="_blank"
          style="--hover-color: var(--linkedin-blue)"
        >
          <fa :icon="['fab', 'linkedin']" />
        </a>
        <div class="back-content back-container">
          <h4 v-if="!isFacad">Branch: {{ branchString }}</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    branch: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    fb: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    linkedin: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    position: {
      type: String,
      required: true
    },
    teamName: {
      type: String,
      required: true
    }
  },
  data() {
    const branchString = this.branch === '' ? 'Not available' : this.branch
    const isFacad = this.position === 'Faculty Advisor'
    return { branchString, isFacad }
  }
})
</script>

<style scoped>
@import '~/assets/styles/components/cards/teamFlipCard.css';
</style>
