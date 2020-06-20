<template>
  <v-app-bar app hide-on-scroll height="30px" flat class="greenish">
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn x-small text v-if="!loggedIn" to="/"><h6>Login/ Register</h6></v-btn>
      <v-btn x-small text color="white" @click="signOut" v-if="loggedIn">Sign Out</v-btn>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>

import { Auth } from 'aws-amplify'

export default {
  name: 'AccountNavBar',
  props: {
    msg: String
  },
  computed: {
    loggedIn () {
      return this.$store.state.user !== null
    }
  },
  methods: {
    async signOut () {
      try {
        await Auth.signOut()
      } catch (error) {
        console.error('error signing out: ', error)
      }
    }
  }
}

</script>

<style scoped>
h6 {
  display: inline;
  vertical-align: middle;
  font-weight: 400;
  color: white;
  font-size: .75vw;
}

.greenish {
background: rgb(1,0,8);
background: linear-gradient(90deg, rgba(1,0,8,1) 0%, rgba(9,35,9,0.9344729344729344) 0%, rgba(8,149,53,0.9074074074074074) 91%);
}
</style>
