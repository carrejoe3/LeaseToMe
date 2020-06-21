<template>
  <v-toolbar>
    <v-icon large color="mainGreen" class="mr-2">mdi-domain</v-icon>
    <v-toolbar-title id="title" @click="navToHome">LeaseToMe</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn x-small text color="mainGreen">Tenant Listings</v-btn>
      <v-btn x-small text color="mainGreen">Broker Directory</v-btn>
      <v-btn x-small text color="mainGreen">How it works</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>

export default {
  name: 'MainNavBar',
  computed: {
    currentPage () {
      return this.$store.state.currentPage
    }
  },
  methods: {
    navToHome () {
      if (this.currentPage !== 'home') this.$router.push('Home')
    }
  }
}

</script>

<style lang="scss" scoped>
#title {
  font-weight: 700;
  color: $middleGreen;
  cursor: pointer;
}
</style>
