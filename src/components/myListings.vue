<template>
  <v-container>
    <v-card
      class="background d-flex flex-column flex-wrap justify-center"
      height="20vw"
      width="25vw"
    >
      <v-icon id="icon" x-large color="green darken-2">mdi-domain</v-icon>
      <v-card-title class="mx-auto">
        <h1>My Listings</h1>
      </v-card-title>
      <v-card-actions>
        <v-btn x-large class="mx-auto" width="15vw">
          <h2>View</h2>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'myListings'
}
</script>

<style scoped lang="scss">
.background {
  background-color: $cardTeal;
}
h1 {
  color: $lightGreen;
  font-size: 2vw;
  font-weight: normal;
}
h2 {
  color: $darkGreen;
  font-size: 1.5vw;
  font-weight: normal;
}
</style>
