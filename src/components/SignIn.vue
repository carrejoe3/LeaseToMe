<template>
  <v-card class="elevation-12">
    <v-toolbar color="primary" dark flat>
      <v-toolbar-title>Login</v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      <v-form>
        <v-text-field label="Username" name="username" prepend-icon="mdi-account" type="text" v-model="form.username"></v-text-field>
        <v-text-field id="password" label="Password" name="password" prepend-icon="mdi-lock" type="password" v-model="form.password"></v-text-field>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="primary" @click="signIn">Login</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>

import { Auth } from 'aws-amplify'

export default {
  name: 'home',
  data () {
    return {
      form: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    async signIn () {
      await Auth.signIn(this.form.username, this.form.password)
    }
  }
}

</script>
