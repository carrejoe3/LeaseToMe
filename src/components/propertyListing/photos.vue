<template>
  <v-card color="lightGrey" width="800" class="mx-auto ma-5 pa-5" id="photos" flat>
    <v-card-title class="submissionTitle pt-10">Now that we've heard about your space, let's see it!</v-card-title>
    <v-card-text>Photo slider group here</v-card-text>
    <v-card-actions>
      <div style="width: 100%;">
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
      file: null
    }
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
    }
  }
}
</script>

<style lang="scss" scoped>
#photos {
  text-align: center;

  .qLabel {
    color: $primary;
  }
}
</style>
