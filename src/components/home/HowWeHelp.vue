<template>
  <v-container id="HowWeHelp" fluid>
    <v-container>
      <div class="bannerTitle mt-6 mb-4">How We Help</div>
      <div class="bannerText mb-6">Landlords and brokers find desirable tenants on the marketplace and proactively pursue them for their matching vacancies.</div>
      <v-row>
        <v-col v-for="(card, index) in cards" :key="index" md="4" lg="4">
          <v-card class="card mb-6" height="250" ripple elevation="8">
            <v-avatar size="64" class="mt-5 cardIcon">
              <v-img src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"></v-img>
            </v-avatar>
            <div class="bannerSubtitle mt-5">
              {{ card.title }}
              <v-icon color="lightGreen">mdi-arrow-right</v-icon>
            </div>
            <v-card-text>{{ card.body }}</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>

export default {
  name: 'HowWeHelp',
  data () {
    return {
      cards: [
        {
          title: 'Tenants',
          body: 'We give your business the opportunity to be seen so the best deals can come to you.'
        },
        {
          title: 'Landlords',
          body: 'A new, easy way to fill vacancies. Need we say more?'
        },
        {
          title: 'Brokers',
          body: 'Market your services, advertise properties and find tenants. It’s all here!'
        }
      ]
    }
  }
}

</script>

<style lang="scss" scoped>
#HowWeHelp {
  background-color: $accent;
  text-align: center;

  .card {
    border-radius: 20px;
    cursor: pointer;

    .cardIcon {
      border-top-left-radius: 50%;
      border-top-right-radius: 50%;
    }

    .cardTitle {
      color: $lightGreen;
      font-weight: 600;
    }
  }
}
</style>
