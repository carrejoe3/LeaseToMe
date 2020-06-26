<template>
  <v-main>
    <MainNavbar />
    <v-row no-gutters>
      <v-col xs="4" sm="4" md="3" lg="2" xl="2">
        <dashboardMenu />
      </v-col>
      <v-col xs="8" sm="8" md="9" lg="10" xl="10">
        <v-row class="ma-15">
          <v-col cols="8">
            <div class="d-inline">
              <div class="bannerTitle">Hi<span v-if="this.$store.state.user">, {{ this.$store.state.user.attributes.email }}</span></div>
              <div class="bannerSubtitle">Welcome to your dashboard</div>
            </div>
          </v-col>
          <v-col cols="4">
            <v-row class="ma-15">
              <dashPostListing />
            </v-row>
          </v-col>
        </v-row>
        <v-row class="ma-15">
          <v-col cols="6">
            <notifications />
          </v-col>
          <v-col cols="6">
            <myListings />
          </v-col>
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
      if (this.user !== null) {
        this.$store.dispatch('getNotifications')
        this.$store.dispatch('getProperties')
      }
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
