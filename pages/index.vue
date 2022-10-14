<template>
  <div class="main-wrapper">
    <HomeSlider :home-data="homeData" />
    <UMICLogoTopLeft />
    <div class="main">
      <!-- About starts-->
      <div class="about">
        <div class="text">
          <p>
            Unmesh Mashruwala Innovation Cell, also widely known as UMIC, is a
            tech team formed in the late 90s to introduce the field of robotics
            to students. The team consists of 50+ diligent and dedicated
            students from various fields of study from IIT Bombay working
            towards embracing and developing the idea of an autonomous future.
          </p>
          <p>
            UMIC works on the principle of co-existence of Machines and Humans
            developing automated prototypes to make the world a safer and more
            sustainable place. Under the sheds of UMIC, the primary area of
            focus is developing autonomous vehicles. Team AeRoVe is aiming for
            the skies and is on a continuous pursuit of advancing autonomous
            multi-copters and fixed-wing systems for search and rescue
            operations. Likewise, Team SeDriCa has its feet on the ground and is
            developing an autonomous car for the Indian roads.
          </p>
        </div>
      </div>

      <!-- Video starts-->
      <div class="orientation">
        <iframe
          src="https://www.youtube.com/embed/nG-g2qUkGCk"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>

      <!-- Announcements starts -->
      <div class="announcement">
        <div class="col">
          <h3>Announcements</h3>
          <div v-if="announcementData.length !== 0" class="cards-container">
            <span
              v-for="(announcement, index) in announcementData"
              :key="index"
            >
              <CardsArticleCard
                :title="announcement.title"
                :date="announcement.displayDate"
                :content="announcement.content"
                :content-link="announcement.contentLink"
              />
              <div
                v-if="index + 1 !== announcementData.length"
                class="line horizontal"
              />
            </span>
          </div>
          <div v-else class="no-cards">No Announcements Available</div>
        </div>
        <div class="line" />
        <div class="col">
          <h3>Results</h3>
          <div v-if="resultData.length !== 0" class="cards-container">
            <span v-for="(result, index) in resultData" :key="index">
              <CardsArticleCard
                :title="result.title"
                :date="result.displayDate"
                :content="result.content"
                :content-link="result.contentLink"
                right-sided
              />
              <div
                v-if="index + 1 !== resultData.length"
                class="line horizontal"
              />
            </span>
          </div>
          <div v-else class="no-cards">No Results Available</div>
        </div>
      </div>
      <!-- Sponsors starts -->

      <div class="sponsors">
        <div class="text">
          <h2>Our Sponsors</h2>
          <p>We would like to thank the generous support of our sponsors!</p>
        </div>
        <div class="image1">
          <img src="~assets/images/misc/sponsors.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Context } from '@nuxt/types'

export default {
  async asyncData({ $content }: Context) {
    // TODO: remove the empty array later when results are added
    const resultData =
      [] ||
      (await $content('results')
        .only(['title', 'displayDate', 'content', 'contentLink'])
        .fetch())
    const announcementData = await $content('announcements')
      .only(['title', 'displayDate', 'content', 'contentLink'])
      .fetch()
    const homeData = await $content('home').fetch()
    return {
      announcementData,
      resultData,
      homeData
    }
  }
}
</script>

<style scoped>
@import '~/assets/styles/pages/index.css';
</style>
