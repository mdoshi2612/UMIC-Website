<template>
  <div class="competition-card-wrapper">
    <div v-if="showPage" class="page-wrapper">
      <CompetitionCardPage
        :page-data="pageData"
        :on-close-button-click="closePage"
      />
    </div>
    <div
      v-else
      :class="`wrapper  ${hovering ? 'wrapper-hover' : ''}`"
      @mouseenter="hovering = true"
      @mouseleave="hovering = false"
    >
      <transition name="fade" mode="out-in">
        <div v-if="hovering" key="hover" class="hover-block">
          <h3 class="heading-hover">{{ heading }}</h3>
          <div class="description-hover">{{ description }}</div>
          <button class="show-extra" @click="onButtonClick">Read More</button>
        </div>
        <div
          v-else
          key="non-hover"
          :class="`non-hover-block ${leftSided ? 'container-reverse' : ''}`"
        >
          <h3 class="heading-non-hover">{{ heading }}</h3>
          <img
            :src="require(`~/assets/images/${imageLink}`)"
            class="main-image"
            :alt="imageDescription"
          />
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  props: {
    description: {
      type: String,
      required: true
    },
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
      required: true
    },
    leftSided: {
      type: Boolean,
      default: false
    },
    pageData: {
      type: Object,
      required: true
    }
  },
  data() {
    const showPage = false
    const hovering = false
    return { showPage, hovering }
  },
  methods: {
    onButtonClick() {
      this.showPage = true
    },
    closePage() {
      this.showPage = false
    }
  }
})
</script>

<style scoped>
@import '~/assets/styles/components/cards/competitionCard.css';
</style>
