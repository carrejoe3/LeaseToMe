<template>
  <v-container id="HowLTMWorks" fluid>
    <v-container>
      <div class="bannerTitle mt-6 mb-6 text-center">How Lease To Me Works:</div>
      <v-row class="mt-10 mb-10">
        <v-col md="4" sm="4" offset-md="2" offset-sm="1">
          <v-avatar size="175" class="cardIcon">
            <v-img src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"></v-img>
          </v-avatar>
        </v-col>
        <v-col md="6" sm="6">
          <div class="bannerSubtitle">Tenants Post</div>
          <div class="mt-5">Businesses list their specific real estate needs on the LeaseToMe marketplace. Our resources provide assistance each step of the way.</div>
          <div class="mt-5 actionTitle">
            Post Requirements
            <v-icon color="primary">mdi-arrow-right</v-icon>
          </div>
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <v-row class="mt-10 mb-10">
        <v-col md="4" sm="4" offset-md="2" offset-sm="1">
          <v-avatar size="175" class="cardIcon">
            <v-img src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"></v-img>
          </v-avatar>
        </v-col>
        <v-col md="6" sm="6">
          <div class="bannerSubtitle">Landlords Discover</div>
          <div class="mt-5">Landlords and brokers find desirable tenants on the marketplace and proactively pursue them for their matching vacancies.</div>
          <div class="mt-5 actionTitle">
            Browse Tenant Listings
            <v-icon color="primary">mdi-arrow-right</v-icon>
          </div>
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <v-row class="mt-10 mb-10">
        <v-col md="4" sm="4" offset-md="2" offset-sm="1">
          <v-avatar size="175" class="cardIcon">
            <v-img src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"></v-img>
          </v-avatar>
        </v-col>
        <v-col md="6" sm="6">
          <div class="bannerSubtitle">LeaseToMe Connects</div>
          <div class="mt-5">We facilitate the process. Tenants receive competitive proposals or tailored property information from landlords and brokers, and respond with a single click.</div>
          <div class="mt-5 actionTitle">
            Become a Member
            <v-icon color="primary">mdi-arrow-right</v-icon>
          </div>
          <div id="joinForFree">JOIN FOR FREE</div>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>

export default {
  name: 'HowLTMWorks'
}

</script>

<style lang="scss" scoped>
#HowLTMWorks {
  background-color: $accent;

  .actionTitle {
    font-size: 1.2em;
    font-weight: 600;
    color: $primary;
    cursor: pointer;
  }

  #joinForFree {
    font-weight: 600;
    color: $lightGreen;
  }
}
</style>
