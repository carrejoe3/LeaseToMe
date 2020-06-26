<template>
  <v-card color="lightGrey" width="800" class="mx-auto ma-5 pa-5" id="details" flat>
    <v-card-title class="submissionTitle pt-10">Just a few more details...</v-card-title>
    <v-card-text>
      <div class="d-flex align-center ma-5 mr-16 ml-16 text-left">
        <div class="text-h6 qLabel mr-5">Availability</div>
        <v-switch v-model="property.availableNow" :label="property.availableNow ? 'Available Now' : 'Not Currently Available'"></v-switch>
      </div>

      <div class="d-inline ma-5 mr-16 ml-16 text-left">
        <div class="text-h6 qLabel ml-16">Ideal Lease Term</div>
        <v-btn @click="selectLeaseTerm(term.value)" v-for="(term, index) in leaseTerms" :key="index" class="ma-1" :color="term.active ? 'primary' : 'lightGrey'">{{ term.title }}</v-btn>
      </div>

      <div class="d-flex align-center ma-5 mr-16 ml-16">
        <div class="text-h6 qLabel mr-5">Total Building Size (SF)</div>
        <v-text-field solo hide-details v-model="property.buildingSize" type="number"></v-text-field>
      </div>

      <div class="d-flex align-center ma-5 mr-16 ml-16">
        <div class="text-h6 qLabel mr-5">Zoning</div>
        <v-text-field solo hide-details v-model="property.zoning" type="text" style="width: 200px;"></v-text-field>
      </div>

      <div class="d-flex align-center ma-5 mr-16 ml-16">
        <div class="text-h6 qLabel mr-5">Building Class</div>
        <v-text-field solo hide-details v-model="property.buildingClass" type="text"></v-text-field>
      </div>
    </v-card-text>
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
      leaseTerms: [
        {
          title: '>1 year',
          value: '0-1',
          active: false
        },
        {
          title: '1-2 years',
          value: '1-2',
          active: false
        },
        {
          title: '3-5 years',
          value: '3-5',
          active: false
        },
        {
          title: '6-9 years',
          value: '6-9',
          active: false
        },
        {
          title: '10+ years',
          value: '10+',
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
      // return this.property.type !== '' && this.property.expenseStructure !== '' && this.property.askingRent !== '' && this.property.squareFootage !== ''
      return true
    }
  },
  methods: {
    selectLeaseTerm (leaseTerm) {
      this.property.idealLeaseTerm = leaseTerm

      for (const i in this.leaseTerms) {
        this.leaseTerms[i].active = false
        if (this.leaseTerms[i].value === leaseTerm) this.leaseTerms[i].active = true
      }
    }
  }
}

</script>

<style lang="scss" scoped>
#details {
  text-align: center;

  .qLabel {
    color: $primary;
  }
}
</style>
