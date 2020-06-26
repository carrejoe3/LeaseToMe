<template>
  <v-main>
    <MainNavbar />
    <v-stepper v-model="step" alt-labels>
      <v-stepper-header>
        <v-stepper-step :complete="step > 1" step="1">Location</v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step :complete="step > 2" step="2">Basic Info</v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step :complete="step > 3" step="3">Key Features</v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step :complete="step > 4" step="4">Description</v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step :complete="step > 5" step="5">Details</v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step :complete="step > 6" step="6">Photos</v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step :complete="step > 7" step="7">Submit</v-stepper-step>
      </v-stepper-header>

      <v-stepper-items>
        <v-stepper-content step="1">
          <locationQs />
        </v-stepper-content>

        <v-stepper-content step="2">
          <basicInfo />
        </v-stepper-content>

        <v-stepper-content step="3">
          <keyFeatures />
        </v-stepper-content>

        <v-stepper-content step="4">
          <description />
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </v-main>
</template>

<script>

import MainNavbar from '@/components/navbars/MainNavbar'
import locationQs from '@/components/propertyListing/locationQs'
import basicInfo from '@/components/propertyListing/basicInfo'
import keyFeatures from '@/components/propertyListing/keyFeatures'
import description from '@/components/propertyListing/description'

export default {
  components: {
    MainNavbar,
    locationQs,
    basicInfo,
    keyFeatures,
    description
  },
  computed: {
    step: {
      get () {
        return this.$store.state.propertyListingQsStep
      },
      set (value) {
        this.$store.commit('setState', { property: 'propertyListingQsStep', value: value })
      }
    }
  }
}
</script>
