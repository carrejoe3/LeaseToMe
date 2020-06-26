<template>
  <v-card color="lightGrey" width="800" class="mx-auto ma-5 pa-5" id="keyFeatures" flat>
    <v-card-title class="submissionTitle pt-10">What are three important features that help your space stand out?</v-card-title>
    <v-card-text>
      <v-chip-group column multiple max="3" v-model="property.features" active-class="activeFeature">
        <v-chip v-for="(feature, index) in features" :key="index">{{ feature.title }}</v-chip>
      </v-chip-group>
    </v-card-text>
    <v-card-actions>
      <div style="width: 100%;">
        <v-btn x-large color="primary" class="mb-5 mr-2" @click="step--;">
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
  }
}

</script>

<style lang="scss" scoped>
#keyFeatures {
  text-align: center;

  .activeFeature {
    color: $accent;
    background-color: $primary;
  }
}
</style>
