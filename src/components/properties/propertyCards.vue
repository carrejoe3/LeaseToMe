<template>
  <v-container id="propertyCards" fluid>
    <v-row>
      <v-col cols="4" v-for="property in properties" :key="property.id">
        <v-card @click="showPropertyPopup(property.id)" ripple>
          <v-img :src="property.images[0].imageSrc" :aspect-ratio="4/3">
            <v-btn @click.stop="toggleFavourite(property.id)" absolute fab x-small right top class="mt-6 mr-n1">
              <v-icon>mdi-heart</v-icon>
            </v-btn>
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular indeterminate color="secondary"></v-progress-circular>
              </v-row>
            </template>
          </v-img>
          <v-card-title>{{ property.address }}</v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'SearchResults',
  computed: {
    properties () {
      return this.$store.getters.getProperties
    }
  },
  methods: {
    showPropertyPopup (objectId) {
      this.$store.dispatch('showAssetPopup', objectId)
    },
    toggleFavourite (objectId) {
      this.$store.commit('toggleFavourite', objectId)
    }
  }
}
</script>

<style lang="scss" scoped>
#propertyCards {
  height: 66vh;
  overflow-y: scroll;
  -ms-overflow-style: none;
  padding-top: 0px;
  margin-top: 14px;
}

#propertyCards::-webkit-scrollbar {
  display: none;
}
</style>
