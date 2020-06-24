<template>
  <v-card class="elevation-12" :loading="this.isLoading">
    <v-toolbar color="primary" dark flat>
      <v-toolbar-title>Login</v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      <v-form v-model="valid">
        <v-text-field
          label="Email"
          name="email"
          prepend-icon="mdi-email"
          type="text"
          v-model="form.email"
          :rules="emailRules"
          autocomplete="email"
        ></v-text-field>
        <v-text-field
          id="password"
          label="Password"
          name="password"
          prepend-icon="mdi-lock"
          type="password"
          v-model="form.password"
          :rules="[() => !!form.password || 'This field is required']"
          autocomplete="current-password"
        ></v-text-field>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <span @click="loginFormState = 'signUp'" class="ml-3">Need an account? Sign Up</span>
      <v-spacer></v-spacer>
      <v-btn color="primary" @click="signIn" :disabled="isLoading !== false || !valid">Login</v-btn>
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
        email: '',
        password: ''
      },
      isLoading: false,
      valid: false,
      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ]
    }
  },
  computed: {
    loginFormState: {
      get () {
        return this.$store.state.loginFormState
      },
      set (value) {
        this.$store.commit('setState', {
          property: 'loginFormState',
          value: value
        })
      }
    }
  },
  methods: {
    async signIn () {
      this.isLoading = 'accent'
      await Auth.signIn(this.form.email, this.form.password)
      this.isLoading = false
    }
  }
}
</script>
