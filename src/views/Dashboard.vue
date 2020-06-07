<template>
  <v-content>
    Welcome to your dashboard
  </v-content>
</template>

<script>

export default {
  name: 'Dashboard',
  methods: {
    getNofications () {
      this.$store.dispatch('getNotifications')
    }
  },
  mounted () {
    this.getNofications()
  }
}

</script>

<style scoped>

</style>
