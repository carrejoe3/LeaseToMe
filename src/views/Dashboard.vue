<template>
  <v-content>
   <MainNavbar/>
   <v-row>
    <v-flex md3 id="column1">
      <dashboardMenu/>
    </v-flex>
    <v-flex md3 id="column2">
      <h1 class="middleGreen greeting">Hi, {{ this.$store.state.user }}</h1>
      <h2 class="lightGreen subGreeting">Welcome to your dashboard</h2>
      <notifications class=""/>
    </v-flex>
    <v-flex md4 id="column3">
      <dashPostListing class="toTheLeft"/>
      <myListings class="mt-6"/>
    </v-flex>
   </v-row>
  </v-content>
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
  }
}
</script>

<style scoped lang="scss">
/* Font Colors */

  .darkGreen {
    color: $darkGreen;
  }
  .middleGreen {
    color: $middleGreen;
  }
  .lightGreen {
    color: $lightGreen;
  }

/* Font Colors */
  #column1 {
    margin-right: 5vw;
  }

  #column2 {
    margin-top: 8vw;
  }

  #column3 {
    margin-top: 11vw;
    margin-left: 3vw;
  }

  .toTheLeft {
    margin-right: 115px;
    margin-bottom: 2vw;
  }

  .smaller {
    max-width: 256px;
  }

  .greeting {
    font-size: 3vw;
    font-weight: 450;
  }

  .subGreeting {
    margin-bottom: 1.5vw;
    font-size: 2vw;
    font-weight: normal;
  }
</style>
