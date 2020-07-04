<template>
  <v-overflow-btn :items="items" label="Sort" dense hide-details v-model="spacesSortType"></v-overflow-btn>
</template>

<script>
export default {
  data: () => ({
    items: ['Lowest Price', 'Highest Price', 'Smallest (SF)', 'Largest (SF)']
  }),
  computed: {
    spacesSortType: {
      get () {
        return this.$store.state.spacesSortType
      },
      set (value) {
        this.$store.commit('setState', { property: 'spacesSortType', value: value })
      }
    }
  }
}
</script>
