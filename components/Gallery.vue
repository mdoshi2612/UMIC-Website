<template>
  <div class="wrapper">
    <div class="image-container">
      <h2 class="heading">{{ heading }}</h2>
      <div class="grid">
        <div class="grid-member">
          <div
            v-for="(image, index) in firstImageColumn"
            :key="index"
            class="gallery-image-container"
            @click="bringUpGallery(3 * index)"
          >
            <CaptionedImage
              :image-src="image.src"
              :image-alt="image.alt"
              :caption="image.description"
            />
          </div>
        </div>
        <div class="grid-member">
          <div
            v-for="(image, index) in secondImageColumn"
            :key="index"
            class="gallery-image-container"
            @click="bringUpGallery(3 * index + 1)"
          >
            <CaptionedImage
              :image-src="image.src"
              :image-alt="image.alt"
              :caption="image.description"
            />
          </div>
        </div>
        <div class="grid-member">
          <div
            v-for="(image, index) in thirdImageColumn"
            :key="index"
            class="gallery-image-container"
            @click="bringUpGallery(3 * index + 2)"
          >
            <CaptionedImage
              :image-src="image.src"
              :image-alt="image.alt"
              :caption="image.description"
            />
          </div>
        </div>
      </div>
    </div>
    <FullScreenWrapper
      v-if="showGallery"
      :on-close-button-click="
        () => {
          showGallery = false
        }
      "
    >
      <img
        :src="require(`~/assets/images/${images[activeImageIndex].src}`)"
        class="display-image"
      />
      <p class="image-caption">{{ images[activeImageIndex].description }}</p>
      <div
        :class="`icon right-icon  ${images.length === 1 ? 'faded' : ''}`"
        @click="nextPicture"
      >
        <fa :icon="['fas', 'chevron-right']" />
      </div>
      <div
        :class="`icon left-icon ${images.length === 1 ? 'faded' : ''}`"
        @click="previousPicture"
      >
        <fa :icon="['fas', 'chevron-left']" />
      </div>
    </FullScreenWrapper>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Image } from '~/assets/types'

export default Vue.extend({
  props: {
    heading: {
      type: String,
      required: true
    },
    images: {
      type: Array as () => Image[],
      required: true
    }
  },
  data() {
    const showGallery = false
    const activeImageIndex = 0
    return {
      activeImageIndex,
      showGallery
    }
  },
  computed: {
    firstImageColumn() {
      return this.images.filter((_, index) => index % 3 === 0)
    },
    secondImageColumn() {
      return this.images.filter((_, index) => index % 3 === 1)
    },
    thirdImageColumn() {
      return this.images.filter((_, index) => index % 3 === 2)
    }
  },
  methods: {
    bringUpGallery(index: number) {
      this.showGallery = true
      this.activeImageIndex = index
    },
    nextPicture() {
      this.activeImageIndex = (this.activeImageIndex + 1) % this.images.length
    },
    previousPicture() {
      const newIndex = this.activeImageIndex - 1
      this.activeImageIndex = newIndex < 0 ? this.images.length - 1 : newIndex
    }
  }
})
</script>

<style scoped>
@import '~/assets/styles/components/gallery.css';
</style>
