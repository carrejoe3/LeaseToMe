<template>
  <v-card color="lightGrey" width="800" class="mx-auto ma-5" id="keyFeatures" flat>
    <v-card-title class="submissionTitle pt-10">What are three important features that help your space stand out?</v-card-title>
    <v-card-text>
      <v-chip-group column>
        <v-chip v-for="(feature, index) in features" :key="index" @click="selectFeature(feature)" :color="feature.active ? 'primary' : ''">{{ feature.title }}</v-chip>
        <v-chip>Create Your Own</v-chip>
      </v-chip-group>
    </v-card-text>
    <v-card-actions>
      <div class="justify-space-around" style="width: 100%;">
        <v-btn x-large color="primary" class="mb-5 mr-2" @click="step--">
          Back
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
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
      features: [
        {
          title: 'Corner Building',
          value: 'cornerBuilding',
          active: false
        },
        {
          title: 'Outdoor Seating',
          value: 'outdoorSeating',
          active: false
        },
        {
          title: 'Ventilated/Hood',
          value: 'ventilated',
          active: false
        },
        {
          title: 'Secure Storage',
          value: 'secureStorage',
          active: false
        },
        {
          title: 'Footcount >5,000/Day',
          value: 'footcount5000',
          active: false
        },
        {
          title: 'Turnkey Restaurant',
          value: 'TurnkeyRestaurant',
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
      return true
    }
  },
  methods: {
    selectFeature (feature) {
      if (this.property.features.indexOf(feature) === -1) {
        this.property.features.push(feature)
        this.features.find(obj => obj.value === feature.value).active = true
      } else {
        this.features.find(obj => obj.value === feature.value).active = false
        this.property.features = this.property.features.filter(obj => {
          return obj !== feature
        })
      }
    }
  }
}

</script>

<style lang="scss" scoped>

</style>
