<template>
  <div class="nav-wrapper">
    <div class="menu-container">
      <transition name="fade">
        <nav v-show="menuOpen">
          <ul class="link-wrapper">
            <div class="link-container">
              <li v-for="(route, index) in routes" :key="route.id">
                <div class="link-count">
                  {{ index > 8 ? index + 1 : `0${index + 1}` }}
                </div>
                <div class="hover-line"></div>
                <div v-if="route.hasSublinks" class="nav-sublink-container">
                  <h3 class="nav-link">
                    {{ route.name }}
                  </h3>
                  <ul class="nav-sublinks">
                    <li
                      v-for="sublink in route.sublinks"
                      :key="sublink.id"
                      class="nav-sublink"
                    >
                      <h4 class="nav-link" @click="menuOpen = false">
                        <NuxtLink :to="sublink.path">
                          {{ sublink.name }}
                        </NuxtLink>
                      </h4>
                    </li>
                  </ul>
                </div>
                <h3 v-else class="nav-link" @click="menuOpen = false">
                  <NuxtLink :to="route.path"> {{ route.name }} </NuxtLink>
                </h3>
              </li>
            </div>
          </ul>
        </nav>
      </transition>
    </div>
    <div class="nav-container">
      <div class="burger-container" @click="menuOpen = !menuOpen">
        <span
          :class="`burger-line long-line ${menuOpen ? 'long-crossed' : ''}`"
        ></span>
        <span
          :class="`burger-line short-line ${menuOpen ? 'short-crossed' : ''}`"
        ></span>
      </div>
      <div class="icon-container">
        <a
          href="https://www.facebook.com/innovationcell/"
          class="icon"
          style="color: var(--facebook-blue)"
        >
          <img :src="require('~/assets/images/logos/facebook.svg')" />
        </a>
        <a
          href="https://www.instagram.com/umic_iitb/"
          class="icon"
          style="color: var(--insta-pink)"
        >
          <img :src="require('~/assets/images/logos/instagram.svg')" />
        </a>
        <a
          href="https://www.youtube.com/channel/UCkwi2H7zV2texcM6bQ_UagA"
          class="icon"
          style="color: var(--youtube-red)"
        >
          <img :src="require('~/assets/images/logos/youtube.svg')" />
        </a>
        <a
          href="https://www.linkedin.com/company/unmesh-mashruwala-innovation-cell-iit-bombay/"
          class="icon"
          style="color: var(--linkedin-blue)"
        >
          <img :src="require('~/assets/images/logos/linkedin.svg')" />
        </a>
      </div>
    </div>
    <div
      :class="`animation-block ${menuOpen ? 'anim-bl-displaced' : ''}`"
    ></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { routes } from '~/assets/constants'

export default Vue.extend({
  data() {
    return {
      routes,
      menuOpen: false
    }
  }
})
</script>

<style scoped>
@import '~/assets/styles/components/navbar.css';
</style>
