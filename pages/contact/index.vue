<template>
  <div class="main">
    <UMICLogoTopLeft />
    <div class="contact">
      <div class="header">
        <div class="team">
          <div class="content">
            <h2>CONTACT US</h2>
            <p>Reach out to us to know more about the Innovation Cell</p>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="grid">
          <div class="flex">
            <div class="icon">
              <fa :icon="['fas', 'phone-volume']" />
            </div>
            <div class="text">
              <div class="textitem">
                <div class="contact-image-wrapper">
                  <img
                    src="~/assets/images/team/members-21-22/mridul-agarwal.jpg"
                    alt="Keerthan Ramesh"
                    class="contact-image"
                  />
                </div>
                <div class="contact-details">
                  <p>Mridul Agarwal</p>
                  <p>Overall Co-ordinator</p>
                  <p>+91 83201 07734</p>
                  <a href="mailto:mridul.agarwal@umiciitb.com"
                    >mridul.agarwal@umiciitb.com</a
                  >
                </div>
              </div>
              <div class="line" />
              <div class="textitem">
                <div class="contact-image-wrapper">
                  <img
                    src="~/assets/images/team/members-21-22/keerthan.jpg"
                    alt="Keerthan Ramesh"
                    class="contact-image"
                  />
                </div>
                <div class="contact-details">
                  <p>Keerthan Ramesh</p>
                  <p>Overall Co-ordinator</p>
                  <p>+91 81491 88382</p>
                  <a href="mailto:keerthan.ramesh@umiciitb.com"
                    >keerthan.ramesh@umiciitb.com</a
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="item2">
            <h3 id="help">{{ helpMessage }}</h3>
            <form @submit.prevent="sendEmail">
              <input
                v-model="name"
                type="text"
                name="name"
                placeholder="Your Name"
                required
              />
              <input
                v-model="email"
                type="email"
                name="email"
                placeholder="Email"
                required
              />
              <input
                v-model="message"
                type="text"
                name="message"
                placeholder="Type your Message"
                required
              />
              <input class="button" type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import { sendForm } from 'emailjs-com'

export default Vue.extend({
  data() {
    const email = ''
    const helpMessage = 'How Can We Help?'
    const message = ''
    const name = ''
    return {
      helpMessage,
      email,
      message,
      name
    }
  },
  methods: {
    sendEmail(e: any) {
      this.helpMessage = 'Sending message...'
      sendForm(
        process.env.FORM_SERVICE_ID || '',
        process.env.FORM_TEMPLATE_ID || '',
        e.target,
        process.env.USER_ID
      ).then(
        (result) => {
          // eslint-disable-next-line no-console
          console.info(`Form successfully submitted\nMessage: ${result.text}`)
          this.helpMessage = 'We recieved your message, Thank you.'
        },
        (error) => {
          // eslint-disable-next-line no-console
          console.error(
            `Form submission encountered error\nMessage: ${error.text}`
          )
          this.helpMessage = 'Some error occured. Sorry for the inconvenience.'
        }
      )
      e.target.reset()
    }
  }
})
</script>

<style scoped>
@import '~/assets/styles/pages/contact.css';
</style>
