<template>
  <v-app>
    <v-content class="pa-0">
      <AccountNavBar />
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>

import { Hub } from 'aws-amplify'
import AccountNavBar from '@/components/AccountNavBar.vue'

export default {
  name: 'App',
  components: { AccountNavBar },
  methods: {
    onAuthEvent (payload) {
      switch (payload.event) {
        case 'signIn':
          this.$store.commit('setState', { property: 'userId', value: payload.data.username })
          this.$router.push('Dashboard')
          break
        case 'signOut':
          this.$store.commit('setState', { property: 'userId', value: null })
          break
        default:
          break
      }
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
