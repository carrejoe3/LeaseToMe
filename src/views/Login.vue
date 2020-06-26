<template>
  <v-main>
    <MainNavbar />
    <v-container fluid id="login">
      <v-row align="center" justify="center" class="fill-height">
        <v-col cols="12" sm="8" md="4">
          <LoginForm />
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>

import MainNavbar from '@/components/navbars/MainNavbar'
import LoginForm from '@/components/login/LoginForm.vue'

export default {
  name: 'Login',
  components: {
    LoginForm,
    MainNavbar
  }
}

</script>

<style lang="scss">
#login {
  height: calc(100vh - 94px);
}
</style>
