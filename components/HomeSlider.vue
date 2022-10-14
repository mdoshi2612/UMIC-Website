<template>
  <div class="wrapper">
    <div class="container">
      <transition-group name="slider" class="anim-container" tag="ul">
        <li
          v-for="(data, index) in homeData"
          v-show="index === selectedIndex"
          :key="data.logoLink"
          class="anim-item"
        >
          <HomeHeader
            :image-link="data.logoLink"
            :info-text="data.infoText"
            :click-link="data.clickLink"
            :bg-link="data.bgLink"
            :img-description="data.imgDescription"
            :right-sided="data.rightSided"
          />
        </li>
      </transition-group>
    </div>
    <ul class="button-container">
      <li
        v-for="(data, index) in homeData"
        :key="index"
        :class="`button ${index === selectedIndex ? 'button-active' : ''}`"
        @click="startAnimation(index, true)"
      />
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { HomeData } from '~/assets/types'

export default Vue.extend({
  props: {
    homeData: {
      type: Array as () => HomeData[],
      required: true
    }
  },
  data() {
    const selectedIndex: number = 0
    const animOngoing: boolean = false
    const skipAnimLoop: boolean = false
    let animInterval: any
    return {
      animOngoing,
      selectedIndex,
      skipAnimLoop,
      animInterval
    }
  },
  mounted() {
    this.animInterval = setInterval(() => {
      if (!this.skipAnimLoop) {
        this.startAnimation(
          (this.selectedIndex + 1) % this.homeData.length,
          false
        )
      }
      this.skipAnimLoop = false
    }, 3000)
  },
  beforeDestroy() {
    clearInterval(this.animInterval)
  },
  methods: {
    startAnimation(toIndex: number, skipNextAnim: boolean = false) {
      if (!this.animOngoing) {
        this.animOngoing = true
        setTimeout(() => {
          this.animOngoing = false
        }, 1000)
        this.selectedIndex = toIndex
        this.skipAnimLoop = skipNextAnim
      }
    }
  }
})
</script>

<style scoped>
@import '~/assets/styles/components/homeSlider.css';
</style>
