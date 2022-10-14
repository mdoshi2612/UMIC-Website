<template>
  <div class="container">
    <h2 class="title">{{ title }}</h2>
    <div v-if="headMembers.length !== 0">
      <div :class="`grid-${headMembers.length} head`">
        <CardsTeamFlipCard
          v-for="(member, index) in headMembers"
          :key="index"
          :branch="member.department"
          :email="member.links.email"
          :fb="member.links.fb"
          :image="member.image"
          :linkedin="member.links.linkedin"
          :name="member.name"
          :position="member.position"
          :team-name="member.teamName"
        />
      </div>
    </div>

    <div class="grid-5">
      <CardsTeamFlipCard
        v-for="(member, index) in mainMembers"
        :key="index"
        :branch="member.department"
        :email="member.links.email"
        :fb="member.links.fb"
        :image="member.image"
        :linkedin="member.links.linkedin"
        :name="member.name"
        :position="member.position"
        :team-name="member.teamName"
      />
    </div>

    <div v-if="trailingMembers.length !== 0">
      <div :class="`grid-${trailingMembers.length}`">
        <CardsTeamFlipCard
          v-for="(member, index) in trailingMembers"
          :key="index"
          :branch="member.department"
          :email="member.links.email"
          :fb="member.links.fb"
          :image="member.image"
          :linkedin="member.links.linkedin"
          :name="member.name"
          :position="member.position"
          :team-name="member.teamName"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { TeamMember } from '~/assets/types'

// demo component

export default Vue.extend({
  props: {
    id: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    members: {
      type: Array as () => TeamMember[],
      required: true
    },
    // represents number of members in top row
    // those members must be the first in array
    numHeads: {
      type: Number,
      validator(value) {
        // value must be less than or equal to 5
        return value <= 5
      },
      default: 0
    }
  },
  data() {
    const headMembers = this.members.slice(0, this.numHeads % 5)
    let mainMembers = this.members.slice(this.numHeads % 5)
    let trailingMembers: TeamMember[] = []
    const breakPoint = -1 * (mainMembers.length % 5)
    if (breakPoint !== 0) {
      trailingMembers = mainMembers.slice(breakPoint)
      mainMembers = mainMembers.slice(0, breakPoint)
    }
    return {
      headMembers,
      mainMembers,
      trailingMembers
    }
  }
})
</script>

<style scoped>
@import '~/assets/styles/components/teamSection.css';
</style>
