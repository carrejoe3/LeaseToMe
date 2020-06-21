<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <LoginForm />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

import LoginForm from '@/components/login/LoginForm.vue'

export default {
  name: 'Login',
  components: {
    LoginForm
  },
  mounted () {
    this.$store.commit('setState', { property: 'currentPage', value: 'login' })
  }
}

</script>

<style lang="scss">

</style>
