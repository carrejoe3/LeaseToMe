<template>
  <v-card class="elevation-12">
    <v-toolbar color="primary" dark flat>
      <v-toolbar-title>Login form</v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      <v-form>
        <v-text-field label="Username" name="username" prepend-icon="mdi-account" type="text" v-model="username"></v-text-field>
        <v-text-field id="password" label="Password" name="password" prepend-icon="mdi-lock" type="password" v-model="password"></v-text-field>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="primary" @click="login">Login</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>

import authentication from '@/services/authenication.js'

export default {
  name: 'LoginForm',
  data: () => ({
    username: null,
    password: null
  }),
  methods: {
    async login () {
      const response = await authentication.login({
        username: this.username,
        password: this.password
      })

      console.log(response)
    }
  }
}

</script>

<style lang="scss">

</style>
