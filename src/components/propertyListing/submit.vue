<template>
  <v-card color="lightGrey" width="800" class="mx-auto ma-5 pa-5" id="submitListing" flat>
    <v-card-title class="submissionTitle pt-10 mb-5">Preview Your Listing & Submit</v-card-title>
    <v-card-text>
      <div class="d-flex justify-center" width="100%">
        <div class="d-flex flex-column" style="width: 35%;">
          <v-btn x-large class="mb-5">Preview Listing</v-btn>
          <v-btn x-large color="primary" @click="submitListing">Submit Listing</v-btn>
        </div>
      </div>
    </v-card-text>
    <v-card-actions>
      <div style="width: 100%;">
        <v-btn x-large color="primary" class="mb-5" @click="step--">
          Back
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
      </div>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data () {
    return {}
  },
  computed: {
    step: {
      get () {
        return this.$store.state.propertyListingQsStep
      },
      set (value) {
        this.$store.commit('setState', {
          property: 'propertyListingQsStep',
          value: value
        })
      }
    },
    property: {
      get () {
        return this.$store.state.propertyListingData
      },
      set (value) {
        this.$store.commit('setState', {
          property: 'propertyListingData',
          value: value
        })
      }
    },
    nextBtnEnabled () {
      // return this.property.type !== '' && this.property.expenseStructure !== '' && this.property.askingRent !== '' && this.property.squareFootage !== ''
      return true
    }
  },
  methods: {
    selectLeaseTerm (leaseTerm) {
      this.property.idealLeaseTerm = leaseTerm

      for (const i in this.leaseTerms) {
        this.leaseTerms[i].active = false
        if (this.leaseTerms[i].value === leaseTerm) { this.leaseTerms[i].active = true }
      }
    },
    submitListing () {
      console.log('submit logic goes here')
    }
  }
}
</script>

<style lang="scss" scoped>
#submitListing {
  text-align: center;

  .qLabel {
    color: $primary;
  }
}
</style>
