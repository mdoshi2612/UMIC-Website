<template>
  <div class="main">
    <UMICLogoTopLeft />
    <div class="header">
      <img src="~assets/images/logos/asme-black.png" alt="" class="main-logo" />
      <p class="header-text">
        "At the bottom, Robotics is about us. It is the discipline of emulating
        our lives, of wondering how we work."" Working towards bringing together
        people having similar motives is the ASME-SDC. ASME stands for the
        American Society of Mechanical Engineers. It organizes the Student
        Design Challenge(SDC). The problem statement is carefully devised from
        real-life applications. Each team is expected to ideate, design,
        construct, and operate a prototype that provides solutions to all these
        intricate problem statements stated. The qualifiers are conducted in the
        Asia Pacific region, with the winners of qualifiers participating in the
        US finals. Our freshman team participates in this competition because we
        believe that SDC builds the fundamentals and technological mindset
        required for the tech industry's advancement. It assists in
        understanding the basic working and structure of complex mechatronics
        systems. As an outcome of SDC, participants are inspired to come up with
        new innovative projects, also providing them with a broad spectrum of
        knowledge in the field of robotics and control systems."
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
    const tempData = await $content('competition/asme').fetch()
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
