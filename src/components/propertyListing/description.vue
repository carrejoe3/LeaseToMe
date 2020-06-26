<template>
  <v-card color="lightGrey" width="800" class="mx-auto ma-5 pa-5" id="description" flat>
    <v-card-title class="submissionTitle pt-10">Tell us what makes your property great.</v-card-title>
    <v-card-text>
      <v-textarea solo name="input-7-4" label="Leave your property description here..." v-model="property.description"></v-textarea>
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
#description {
  text-align: center;
}
</style>
