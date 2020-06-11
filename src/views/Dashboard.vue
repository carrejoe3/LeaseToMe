<template>
  <v-content>
    Welcome to your dashboard
  </v-content>
</template>

<script>

export default {
  name: 'Dashboard',
  computed: {
    user () {
      return this.$store.state.user
    }
  },
  watch: {
    user () {
      if (this.user !== null) this.$store.dispatch('getNotifications')
    }
  },
  methods: {
  },
  mounted () {
  }
}

</script>

<style scoped>

</style>
