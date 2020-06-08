<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <SignUp :toggle='toggle' v-if="formState === 'signUp'" />
        <SignIn v-if="formState === 'signIn'" />
        <p v-on:click="toggle">
          {{ formState === 'signUp' ? 'Already sign up? Sign In' : 'Need an account? Sign Up' }}
        </p>
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
  data () {
    return {
      formState: 'signIn'
    }
  },
  methods: {
    toggle () {
      this.formState === 'signUp' ? this.formState = 'signIn' : this.formState = 'signUp'
    }
  }
}

</script>

<style lang="scss">

</style>
