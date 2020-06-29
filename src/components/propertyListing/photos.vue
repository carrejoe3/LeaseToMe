<template>
  <v-card color="lightGrey" width="800" class="mx-auto ma-5 pa-5" id="photos" flat>
    <v-card-title class="submissionTitle pt-10">Now that we've heard about your space, let's see it!</v-card-title>
    <v-card-text>
      <v-file-input label="Select your property images here..." @change="onFilePicked" v-model="file"></v-file-input>
    </v-card-text>
    <v-slide-group class="pa-4" show-arrows>
      <v-slide-item v-for="(img, index) in property.images" :key="index" class="ma-3">
        <v-card width="200" height="150">
          <v-img :src="img.base64" :aspect-ratio="4/3"></v-img>
        </v-card>
      </v-slide-item>
    </v-slide-group>
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
      file: undefined
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
    onFilePicked () {
      if (this.file !== undefined) {
        const imgId = this.property.images.length

        const imgObject = {
          id: imgId,
          name: this.file.name,
          lastModifiedTime: this.file.lastModified,
          lastModifiedDate: this.file.lastModifiedDate
        }

        const reader = new FileReader()
        reader.onload = (e) => {
          imgObject.base64 = e.target.result
          this.$store.commit('addImgToPropertyListing', imgObject)
        }

        reader.onerror = (error) => {
          console.error(error)
        }

        reader.readAsDataURL(this.file)
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
