<template>
  <v-app>
    <v-main class="pa-0">
      <AccountNavBar />
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>

import { Hub, Auth } from 'aws-amplify'
import AccountNavBar from '@/components/navbars/AccountNavBar.vue'

export default {
  name: 'App',
  components: { AccountNavBar },
  methods: {
    onAuthEvent (payload) {
      switch (payload.event) {
        case 'signIn':
          this.getUser()
          this.$router.push('Dashboard')
          break
        case 'signOut':
          this.$store.commit('setState', { property: 'user', value: null })
          this.$router.push('/')
          break
        default:
          break
      }
    },
    getUser () {
      Auth.currentAuthenticatedUser()
        .then(user => {
          this.$store.commit('setState', { property: 'user', value: user })
          this.$store.dispatch('getNotifications')
          this.$store.dispatch('getProperties')
        })
        .catch(() => {
          if (this.$store.state.currentPage !== 'Home') this.$router.push('Home')
        })
    }
  },
  watch: {
    $route (to, from) {
      this.$store.commit('setState', { property: 'currentPage', value: to.name })
    }
  },
  mounted () {
    Hub.listen('auth', (data) => {
      const { payload } = data
      this.onAuthEvent(payload)
    })

    // this.getUser()
  }
}
</script>

<style>

</style>
