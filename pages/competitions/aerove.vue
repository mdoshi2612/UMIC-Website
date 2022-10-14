<template>
  <div class="main">
    <UMICLogoTopLeft />
    <div class="header">
      <img
        src="~assets/images/logos/aerove-white.png"
        alt=""
        class="main-logo"
      />
      <p class="header-text">
        “A drone is often preferred for missions that are too ‘dull, dirty, or
        dangerous’ for manned aircraft.” Team AeRoVe of UMIC is on a
        never-ending pursuit of developing an ultimate system of autonomous
        fixed-wing as well as multirotor aircraft. Incorporating different
        subsystems namely ‘Mechatronics’, ‘Controls’, ‘Machine Learning’,
        ‘Perception’, ‘Path Planning’, and ‘Localisation’, the team emphatically
        covers every aspect to forge a de rigueur system of autonomous aerial
        vehicles. We majorly focus on two competitional problem statements, the
        International Aerial Robotics Competition (IARC) and the Barcelona Smart
        Drone Challenge (BSDC).
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
    const tempData = await $content('competition/aerove').fetch()
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
