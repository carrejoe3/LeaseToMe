<template>
  <v-container id="propertyCards" fluid>
    <v-row>
      <v-col cols="4" v-for="property in properties" :key="property.id">
        <v-card @click="showPropertyPopup(property.id)" ripple>
          <v-img :src="property.images[0].imageSrc" :aspect-ratio="4/3">
            <v-btn @click.stop="toggleFavourite(property.id)" color="accent" absolute icon x-large right top class="mr-n1" v-if="showFavBtn">
              <v-icon>mdi-heart-outline</v-icon>
            </v-btn>
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular indeterminate color="secondary"></v-progress-circular>
              </v-row>
            </template>
          </v-img>
          <v-card-title class="propertyTitle">
            <v-icon class="mr-1" color="darkGreen">mdi-compass-outline</v-icon>
            {{ property.neighborhood }} | {{ property.squareFootage }} SF
          </v-card-title>
          <v-card-subtitle>
            {{ property.address }}
          </v-card-subtitle>
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
    },
    showFavBtn () {
      return this.$store.state.currentPage !== 'MyProperties'
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

  .propertyTitle {
    color: $primary;
  }
}

#propertyCards::-webkit-scrollbar {
  display: none;
}
</style>
