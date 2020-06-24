<template>
  <v-card color="lightGrey">
    <v-card-title class="submissionTitle">Where is your property located?</v-card-title>
    <v-btn @click="selectBorough(btn.value)" v-for="(btn, index) in locationBtns" :key="index" class="ma-2" :color="btn.active ? 'primary' : 'lightGrey'">{{ btn.title }}</v-btn>
  </v-card>
</template>

<script>

export default {
  data () {
    return {
      locationBtns: [
        {
          title: 'MANHATTAN',
          value: 'manhattan',
          active: false
        },
        {
          title: 'BROOKLYN',
          value: 'brooklyn',
          active: false
        },
        {
          title: 'QUEENS',
          value: 'queens',
          active: false
        },
        {
          title: 'BRONX',
          value: 'bronx',
          active: false
        },
        {
          title: 'STATEN ISLAND',
          value: 'statenIsland',
          active: false
        }
      ],
      selectedBorough: null
    }
  },
  computed: {
    step: {
      get () {
        return this.$store.state.propertyListingQsStep
      },
      set (value) {
        this.$store.commit('setState', { property: 'propertyListingQsStep', value: value })
      }
    },
    propertyListingData: {
      get () {
        return this.$store.state.propertyListingData
      },
      set (value) {
        this.$store.commit('setState', { property: 'propertyListingData', value: value })
      }
    }
  },
  methods: {
    selectBorough (borough) {
      this.propertyListingData.selectedBorough = borough

      for (const i in this.locationBtns) {
        this.locationBtns[i].active = false
        if (this.locationBtns[i].value === borough) this.locationBtns[i].active = true
      }
    }
  }
}

</script>
