<template>
  <footer>
    <div class="footer-wrapper">
      <div class="main-col">
        <img src="~/assets/images/logos/main-black.png" />
      </div>
      <div class="main-col row-container">
        <div class="row">
          <div class="col-icon">
            <span class="icon">
              <fa icon="map-marker-alt" />
            </span>
          </div>
          <address class="col-cover">
            <a href="https://goo.gl/maps/re7e488wB7tmKzVLA">
              F3 Shed, near BETiC Lab / OrthoCAD IIT Area, Powai, Mumbai,
              Maharashtra, 400076
            </a>
          </address>
        </div>
        <div class="row">
          <div class="col-icon">
            <span class="icon">
              <fa icon="envelope" />
            </span>
          </div>
          <address class="col-cover">
            <a href="mailto:contact@umiciitb.com">contact@umiciitb.com</a>
          </address>
        </div>
        <div class="row">
          <div class="icons">
            <a
              href="https://www.facebook.com/innovationcell/"
              class="icon"
              style="--hover-color: var(--facebook-blue)"
            >
              <fa :icon="['fab', 'facebook-square']" />
            </a>
            <a
              href="https://www.instagram.com/umic_iitb/"
              class="icon"
              style="--hover-color: var(--insta-pink)"
            >
              <fa :icon="['fab', 'instagram-square']" />
            </a>
            <a
              href="https://www.linkedin.com/company/unmesh-mashruwala-innovation-cell-iit-bombay/"
              class="icon"
              style="--hover-color: var(--linkedin-blue)"
            >
              <fa :icon="['fab', 'linkedin']" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style scoped>
@import '~/assets/styles/components/footer.css';
</style>
