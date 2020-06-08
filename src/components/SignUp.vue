<template>
  <div>
    <v-card class="elevation-12" v-if="formState === 'signUp'">
      <v-toolbar color="primary" dark flat>
        <v-toolbar-title>Register</v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <v-form>
          <v-text-field id="username" label="Username" name="username" prepend-icon="mdi-account" type="text" v-model="form.username"></v-text-field>
          <v-text-field id="password" label="Password" name="password" prepend-icon="mdi-lock" type="password" v-model="form.password"></v-text-field>
          <v-text-field id="email" label="Email" name="password" prepend-icon="mdi-email" type="email" v-model="form.email"></v-text-field>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" @click='signUp'>Sign Up</v-btn>
      </v-card-actions>
    </v-card>
    <v-card class="elevation-12" v-if="formState === 'confirmSignUp'">
      <v-toolbar color="primary" dark flat>
        <v-toolbar-title>Confirm Sign Up</v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <v-form>
          <v-text-field v-model='form.authCode' label="Confirmation code" name="authCode" prepend-icon="mdi-account" type="number"></v-text-field>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" @click='confirmSignUp'>Confirm Sign Up</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>

import { Auth } from 'aws-amplify'

export default {
  name: 'home',
  props: ['toggle'],
  data () {
    return {
      formState: 'signUp',
      form: {
        username: '',
        password: '',
        email: ''
      }
    }
  },
  methods: {
    async signUp () {
      const { username, password, email } = this.form
      await Auth.signUp({
        username, password, attributes: { email }
      })
      this.formState = 'confirmSignUp'
    },
    async confirmSignUp () {
      const { username, authCode } = this.form
      await Auth.confirmSignUp(username, authCode)
      this.toggle()
    }
  }
}

</script>

<style lang="scss" scoped>

</style>
