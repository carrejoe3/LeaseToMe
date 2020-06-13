<template>
  <div>
    <v-card class="elevation-12" v-if="loginFormState === 'signUp'">
      <v-toolbar color="primary" dark flat>
        <v-toolbar-title>Register</v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <v-form>
          <v-text-field id="username" label="Username" name="username" prepend-icon="mdi-account" type="text" v-model="form.username"></v-text-field>
          <v-text-field id="password" label="Password" name="password" prepend-icon="mdi-lock" type="password" v-model="form.password"></v-text-field>
          <v-text-field id="email" label="Email" name="password" prepend-icon="mdi-email" type="email" v-model="form.email"></v-text-field>
          <v-text-field id="phone" label="Phone" name="phone" prepend-icon="mdi-phone" type="tel" v-model="form.phone" prefix="+1"></v-text-field>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <span @click="loginFormState = 'signIn'" class="ml-3">
          Already sign up? Sign In
        </span>
        <v-spacer></v-spacer>
        <v-btn color="primary" @click='signUp'>Sign Up</v-btn>
      </v-card-actions>
    </v-card>
    <v-card class="elevation-12" v-else-if="loginFormState === 'confirmSignUp'">
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
      form: {
        username: '',
        password: '',
        email: '',
        phone: ''
      }
    }
  },
  computed: {
    loginFormState: {
      get () {
        return this.$store.state.loginFormState
      },
      set (value) {
        this.$store.commit('setState', { property: 'loginFormState', value: value })
      }
    }
  },
  methods: {
    async signUp () {
      const { username, password, email, phone } = this.form
      await Auth.signUp({
        username,
        password,
        attributes: {
          email,
          phone_number: '+1' + phone
        }
      })
      this.loginFormState = 'confirmSignUp'
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
