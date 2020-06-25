<template>
  <v-main>
    <MainNavbar />
    <v-row no-gutters>
      <v-col xs="4" sm="4" md="3" lg="2" xl="2">
        <dashboardMenu />
      </v-col>
      <v-col xs="4" sm="4" md="5" lg="5" xl="5">
        <v-row class="ma-15">
          <div class="d-inline">
            <div class="bannerTitle">Hi<span v-if="this.$store.state.user">, {{ this.$store.state.user.attributes.email }}</span></div>
            <div class="bannerSubtitle">Welcome to your dashboard</div>
          </div>
        </v-row>
        <v-row class="ma-15">
          <notifications />
        </v-row>
      </v-col>
      <v-col xs="4" sm="4" md="4" lg="5" xl="5">
        <v-row class="ma-15">
          <dashPostListing />
        </v-row>
        <v-row class="ma-15">
          <myListings />
        </v-row>
      </v-col>
    </v-row>
  </v-main>
</template>

<script>

import MainNavbar from '@/components/navbars/MainNavbar'
import notifications from '@/components/dashboard/notifications'
import dashboardMenu from '@/components/dashboard/dashboardMenu'
import myListings from '@/components/dashboard/myListings'
import dashPostListing from '@/components/dashboard/dashPostListing'

export default {
  name: 'Dashboard',
  components: {
    MainNavbar,
    notifications,
    dashboardMenu,
    myListings,
    dashPostListing
  },
  computed: {
    user () {
      return this.$store.state.user
    }
  },
  watch: {
    user () {
      if (this.user !== null) this.$store.dispatch('getNotifications')
    }
  },
  methods: {
  },
  mounted () {
    this.$store.commit('setState', { property: 'currentPage', value: 'dashboard' })
  }
}
</script>

<style scoped lang="scss">

</style>
