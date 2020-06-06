<template>
  <amplify-authenticator>
    <amplify-sign-out></amplify-sign-out>
  </amplify-authenticator>
</template>

<script>

export default {
  name: 'LoginForm',
  data: () => ({
    username: null,
    password: null
  }),
  methods: {},
  mounted () {}
}

</script>

<style lang="scss">

</style>
