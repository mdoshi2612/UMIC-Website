<template>
  <div class="main">
    <UMICLogoTopLeft />
    <div class="header">
      <img
        src="~assets/images/logos/sedrica-white.png"
        alt=""
        class="main-logo"
      />
      <p class="header-text">
        In this era of artificial intelligence and automation, rapid technology
        advancements have ensured that self-driving cars are no longer limited
        to science fiction. The team SeDriCa aims to develop India's first
        self-driving car, trying to achieve Level 5 Autonomy, capable of
        autonomous driving under Indian Road Conditions. From efficient
        performance to safety considerations, we plan to cover them all!
      </p>
    </div>

    <div class="introduction-video">
      <iframe
        src="https://www.youtube.com/embed/8lNKjX0-RKY"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </div>

    <div class="content">
      <h2 class="content-header">COMPETITIONS:</h2>
      <div
        v-for="(competition, index) in competitionData"
        :key="index"
        class="card-container"
      >
        <CardsCompetitionCard
          :heading="competition.title"
          :description="competition.description"
          :image-link="competition.imageLink"
          :left-sided="competition.leftSided"
          :image-description="competition.imageDescription"
          :page-data="competition.pageData"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Context } from '@nuxt/types'
import Vue from 'vue'

export default Vue.extend({
  async asyncData({ $content }: Context) {
    const tempData = await $content('competition/sedrica').fetch()
    const competitionData = await Promise.all(
      tempData.map(async (element: any) => {
        const pageData = await $content(element.pageLink).fetch()
        return {
          ...element,
          pageData
        }
      })
    )
    return { competitionData }
  }
})
</script>

<style scoped>
@import '~/assets/styles/pages/competitions.css';
</style>
