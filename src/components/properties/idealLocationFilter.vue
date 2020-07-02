<template>
  <v-container id="idealLocationFilter" fluid>
    <v-container>
      <div id="filterTitle" class="mt-3 text-h5">What's the ideal location for your business?</div>
      <v-btn @click="selectLocation(btn)" class="ma-2 mt-5" v-for="(btn, index) in filterOptions" :key="index" :color="btn.active ? 'primary' : ''">{{ btn.value }}</v-btn>
    </v-container>
  </v-container>
</template>

<script>

export default {
  name: 'idealLocationFilter',
  data () {
    return {
      filterOptions: [
        {
          value: 'Brooklyn',
          active: false
        },
        {
          value: 'Manhatten',
          active: false
        },
        {
          value: 'Staten Island',
          active: false
        },
        {
          value: 'Queens',
          active: false
        },
        {
          value: 'Bronx',
          active: false
        },
        {
          value: 'All',
          active: true
        }
      ]
    }
  },
  computed: {
    filters: {
      get () {
        return this.$store.state.findSpaceFilters
      },
      set (value) {
        this.$store.commit('setState', { property: 'findSpaceFilters', value: value })
      }
    }
  },
  methods: {
    selectLocation (filter) {
      this.filters.idealLocationFilter = filter.value

      for (const i in this.filterOptions) {
        this.filterOptions[i].active = false
        if (this.filterOptions[i].value === filter.value) this.filterOptions[i].active = true
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
