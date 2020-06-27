<template>
  <v-container id="idealLocationFilter" fluid>
    <v-container>
      <div id="filterTitle" class="mt-3 text-h5">What's the ideal location or your business?</div>
    </v-container>
  </v-container>
</template>

<script>

export default {
  name: 'idealLocationFilter',
  computed: {
    idealLocationFilter: {
      get () {
        return this.$store.state.idealLocationFilter
      },
      set (value) {
        this.$store.commit('setState', { property: 'idealLocationFilter', value: value })
      }
    }
  }
}

</script>

<style lang="scss" scoped>
#idealLocationFilter {
  background-color: $accent;
  text-align: center;

  #filterTitle {
    color: $darkGreen;
  }
}
</style>
