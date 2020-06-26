<template>
  <v-card color="lightGrey" width="800" class="mx-auto ma-5 pa-5" id="locationQs" flat>
    <v-card-title class="submissionTitle pt-10">Where is your property located?</v-card-title>
    <v-card-text>
      <v-btn @click="selectBorough(btn.value)" v-for="(btn, index) in locationBtns" :key="index" class="ma-4" :color="btn.active ? 'primary' : 'lightGrey'">{{ btn.title }}</v-btn>
      <div class="d-flex align-center ma-5 mr-16 ml-16" v-if="property.selectedBorough !== null">
        <div class="text-h6 qLabel mr-5">Neighborhood</div>
        <v-text-field solo hide-details v-model="property.neighborhood"></v-text-field>
      </div>
      <div class="d-flex align-center ma-5 mr-16 ml-16" v-if="property.selectedBorough !== null">
        <div class="text-h6 qLabel mr-5">Address</div>
        <v-text-field solo hide-details v-model="property.address"></v-text-field>
      </div>
    </v-card-text>
    <v-card-actions>
      <div style="width: 100%;">
        <v-btn x-large color="primary" class="mb-5" :disabled="!nextBtnEnabled" @click="step++">
          Next
          <v-icon>mdi-arrow-right</v-icon>
        </v-btn>
      </div>
    </v-card-actions>
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
      ]
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
    property: {
      get () {
        return this.$store.state.propertyListingData
      },
      set (value) {
        this.$store.commit('setState', { property: 'propertyListingData', value: value })
      }
    },
    nextBtnEnabled () {
      // return this.property.address !== '' && this.property.neighborhood !== '' && this.property.selectedBorough !== ''
      return true
    }
  },
  methods: {
    selectBorough (borough) {
      this.property.selectedBorough = borough

      for (const i in this.locationBtns) {
        this.locationBtns[i].active = false
        if (this.locationBtns[i].value === borough) this.locationBtns[i].active = true
      }
    }
  }
}

</script>

<style lang="scss" scoped>
#locationQs {
  text-align: center;

  .qLabel {
    color: $primary;
  }
}
</style>
