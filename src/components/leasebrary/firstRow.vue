<template>
  <v-container class="firstRow">
    <div class="subheading">I: When You're Searching</div>
    <v-divider></v-divider>
    <v-slide-group multiple show-arrows>
      <v-slide-item v-for="(card, index) in cards" :key="index">
        <v-card width="215" class="ma-2 mt-5" style="display: flex; flex-direction: column;">
          <v-card-title class="cardTitle">{{ card.title }}</v-card-title>
          <v-card-text style="flex-grow: 1;">{{ card.body }}</v-card-text>
          <v-card-actions>
            <v-btn text color="darkGreen">Read More</v-btn>
          </v-card-actions>
        </v-card>
      </v-slide-item>
    </v-slide-group>
  </v-container>
</template>

<script>
export default {
  name: 'firstRow',
  data () {
    return {
      cards: [
        {
          title: 'How to Lease Commercial Real Estate in 10 Steps',
          body: 'Justin Baker, CEO @ LeaseToMe The idea of renting retail, office, or industrial real estate can seem daunting given its relative complexity as compared to…'
        },
        {
          title: 'What Is Class A, B, and C Commercial Real Estate?',
          body: 'Justin Baker, CEO @ LeaseToMe Commercial properties are typically classified as Class A, Class B, or Class C. While the lines are blurry and precise…'
        },
        {
          title: 'How Long Are Commercial Real Estate Leases?',
          body: 'Justin Baker, CEO @ LeaseToMe Commercial leases can range in length from a day to a hundred years, and anywhere in between. That being said,…'
        },
        {
          title: 'What Is Rentable Area vs. Usable Area?',
          body: 'Justin Baker, CEO @ LeaseToMe Usable area is the space you actually occupy within your particular suite, whereas rentable area includes a portion of the…'
        },
        {
          title: 'What Is a Commercial Leasing Broker?',
          body: 'Justin Baker, CEO @ LeaseToMe A commercial leasing broker is a real estate professional who helps advise tenants and/or landlords during the leasing process. Commercial…'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.firstRow {
  .subheading {
    color: $darkGreen;
    font-size: 1.2em;
    font-weight: 600;
    line-height: 1.2em;
  }

  .cardTitle {
    word-break: normal;
    color: $lightGreen;
  }
}
</style>
