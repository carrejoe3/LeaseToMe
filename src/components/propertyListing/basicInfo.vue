<template>
  <v-card color="lightGrey" width="800" class="mx-auto ma-5" id="locationQs" flat>
    <v-card-title class="submissionTitle pt-10">How would you categorize the space?</v-card-title>
    <v-card-text>
      <v-btn @click="selectType(btn.value)" v-for="(btn, index) in typeBtns" :key="index" class="ma-4" :color="btn.active ? 'primary' : 'lightGrey'">{{ btn.title }}</v-btn>
      <div class="d-flex align-center ma-5">
        <div class="text-h6 qLabel mr-5">What is the gross leasable square footage of the space?</div>
        <v-text-field solo hide-details v-model="property.neighborhood"></v-text-field>
      </div>
      <div class="d-flex align-center ma-5">
        <div class="text-h6 qLabel mr-5">What is the asking rent?</div>
        <v-text-field solo hide-details v-model="property.address"></v-text-field>
      </div>
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
      typeBtns: [
        {
          title: 'RESTAURANT',
          value: 'restaurant',
          active: false
        },
        {
          title: 'GENERAL RETAIL',
          value: 'generalRetail',
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
        this.$store.commit('setState', { property: 'property', value: value })
      }
    },
    nextBtnEnabled () {
      return this.property.type !== ''
    }
  },
  methods: {
    selectType (type) {
      this.property.selectedBorough = type

      for (const i in this.typeBtns) {
        this.typeBtns[i].active = false
        if (this.typeBtns[i].value === type) this.typeBtns[i].active = true
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
