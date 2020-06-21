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
        })
        .catch(() => console.log('User is not signed in'))
    }
  },
  mounted () {
    Hub.listen('auth', (data) => {
      const { payload } = data
      this.onAuthEvent(payload)
    })
  }
}
</script>

<style>

</style>
