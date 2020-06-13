<template>
  <div>
    <v-card class="elevation-12" v-if="loginFormState === 'signUp'">
      <v-toolbar color="primary" dark flat>
        <v-toolbar-title>Register</v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <v-form>
          <v-text-field
            id="username"
            label="Username"
            name="username"
            prepend-icon="mdi-account"
            type="text"
            required
            v-model="form.username"
            :rules="[() => !!form.username || 'This field is required']"
          ></v-text-field>
          <v-text-field
            id="password"
            label="Password"
            name="password"
            prepend-icon="mdi-lock"
            type="password"
            required
            v-model="form.password"
            :rules="[() => !!form.password || 'This field is required']"
          ></v-text-field>
          <v-text-field
            id="email"
            label="Email"
            name="password"
            prepend-icon="mdi-email"
            type="email"
            v-model="form.email"
            required
            :rules="[() => !!form.email || 'This field is required']"
          ></v-text-field>
          <v-text-field
            id="phone"
            label="Phone"
            name="phone"
            prepend-icon="mdi-phone"
            type="tel"
            v-model="form.phone"
            prefix="+1"
            required
            :rules="[() => !!form.email || 'This field is required']"
          ></v-text-field>
          <v-overflow-btn
            class="my-2"
            prepend-icon="mdi-account-details"
            :items="clientType"
            label="Account Type"
            target="#accountTypeDropdown"
            v-model="form.accountType"
            :rules="[() => !!form.accountType || 'This field is required']"
          ></v-overflow-btn>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <span @click="loginFormState = 'signIn'" class="ml-3">Already sign up? Sign In</span>
        <v-spacer></v-spacer>
        <v-btn color="primary" @click="signUp">Sign Up</v-btn>
      </v-card-actions>
    </v-card>
    <v-card class="elevation-12" v-else-if="loginFormState === 'confirmSignUp'">
      <v-toolbar color="primary" dark flat>
        <v-toolbar-title>Confirm Sign Up</v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <v-form>
          <v-text-field
            v-model="form.authCode"
            label="Confirmation code"
            name="authCode"
            prepend-icon="mdi-account"
            type="number"
          ></v-text-field>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" @click="confirmSignUp">Confirm Sign Up</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import { Auth } from 'aws-amplify'

export default {
  name: 'home',
  data () {
    return {
      form: {
        username: '',
        password: '',
        email: '',
        phone: '',
        accountType: ''
      },
      clientType: [
        'Tenant',
        'Landlord',
        'Broker'
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
    async signUp () {
      const { username, password, email, phone, accountType } = this.form
      await Auth.signUp({
        username,
        password,
        attributes: {
          email,
          phone_number: '+1' + phone,
          'custom:ClientType': accountType
        }
      })
      this.loginFormState = 'confirmSignUp'
    },
    async confirmSignUp () {
      const { username, authCode } = this.form
      await Auth.confirmSignUp(username, authCode)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
