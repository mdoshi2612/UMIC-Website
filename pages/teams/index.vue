<template>
  <div class="main">
    <div class="team-wrapper">
      <div class="header">
        <UMICLogoTopLeft />
        <div class="team">
          <div class="content">
            <h1>MEET OUR TEAM</h1>
            <div class="image">
              <img src="~assets/images/team/members-21-22/team.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-for="(teams, index) in teamInfo" :key="index">
      <TeamSection
        :id="index"
        :title="teams.title"
        :members="teams.members"
        :num-heads="teams.numHeads"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Context } from '@nuxt/types'
import Vue from 'vue'
import { TeamMember } from '~/assets/types'

type MemberQueryData = TeamMember & { rank: number }

export default Vue.extend({
  async asyncData({ $content }: Context) {
    const businessFetcher = $content('team/21-22/business')
      .sortBy('rank')
      .sortBy('teamName')
      .sortBy('name')
      .where({ visible: true })
    const facadFetcher = $content('team/21-22/facads')
      .sortBy('rank')
      .sortBy('teamName')
      .sortBy('name')
      .where({ visible: true })
    const memberFetcher = $content('team/21-22/members')
      .sortBy('rank')
      .sortBy('teamName')
      .sortBy('name')
      .where({ visible: true })
    const leaderFetcher = $content('team/21-22/leaders')
      .sortBy('rank')
      .sortBy('teamName')
      .sortBy('name')
      .where({ visible: true })

    const members = await memberFetcher.fetch()
    const business = (await businessFetcher.fetch()).filter(
      (_: MemberQueryData) => true
    )
    // not a perfect algo but works for now -> have to
    // write better if we have to put on for reals (currently demo page)
    const aeroveMembers: MemberQueryData[] = members.filter(
      (el: MemberQueryData) => el.teamName.toLowerCase() === 'aerove'
    )
    const sedricaMembers: MemberQueryData[] = members.filter(
      (el: MemberQueryData) => el.teamName.toLowerCase() === 'sedrica'
    )
    const memberArray: MemberQueryData[] = []
    const reps = Math.min(
      aeroveMembers.length / 2,
      sedricaMembers.length / 2,
      business.length
    )
    for (let index = 0; index < reps; index++) {
      memberArray.push(aeroveMembers[2 * index], aeroveMembers[2 * index + 1])
      memberArray.push(business[index])
      memberArray.push(sedricaMembers[2 * index], sedricaMembers[2 * index + 1])
    }
    if (aeroveMembers.length > 2 * reps) {
      memberArray.push(...aeroveMembers.slice(2 * reps))
    }
    if (sedricaMembers.length > 2 * reps) {
      memberArray.push(...sedricaMembers.slice(2 * reps))
    }
    if (business.length > reps) {
      memberArray.push(...business.slice(reps))
    }

    const elemCounter = (previous: number, current: MemberQueryData) =>
      current.rank === 1 ? previous + 1 : previous

    const teamInfo = [
      {
        title: 'Team Leaders',
        members: await leaderFetcher.fetch(),
        numHeads: (await leaderFetcher.fetch()).reduce(elemCounter, 0)
      },
      {
        title: 'Team Members',
        members: memberArray,
        numHeads: 0
      },
      {
        title: 'Faculty Advisors',
        members: await facadFetcher.fetch(),
        numHeads: (await facadFetcher.fetch()).reduce(elemCounter, 0)
      }
    ]
    return { teamInfo }
  }
})
</script>

<style scoped>
@import '~/assets/styles/pages/team.css';
</style>
