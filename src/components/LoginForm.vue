<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12">
        <SignUp v-if="loginFormState === 'signUp' || loginFormState === 'confirmSignUp'" />
        <SignIn v-else-if="loginFormState === 'signIn'" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

import SignUp from '@/components/SignUp'
import SignIn from '@/components/SignIn'

export default {
  name: 'LoginForm',
  components: {
    SignUp,
    SignIn
  },
  computed: {
    loginFormState () {
      return this.$store.state.loginFormState
    }
  }
}

</script>

<style lang="scss">

</style>
