<template>
  <div class="main">
    <UMICLogoTopLeft />
    <div class="header">
      <img src="~assets/images/logos/main-white.png" alt="" class="main-logo" />
      <p class="header-text">
        Here are some more competitions that we participate in...
      </p>
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
    const tempData = await $content('competition/others').fetch()
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
