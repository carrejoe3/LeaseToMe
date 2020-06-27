<template>
  <v-container id="findSpacesBanner" fluid>
    <v-container>
      <div id="title" class="mt-16 text-h3">EXPLORE NYC RETAIL LISTINGS</div>
      <div id="subtitle" class="mt-3 text-h4">Find your dream space.</div>
    </v-container>
  </v-container>
</template>

<script>

export default {
  name: 'findSpacesBanner'
}

</script>

<style lang="scss" scoped>
#findSpacesBanner {
  background-color: $accent;
  text-align: center;

  #title {
    color: $lightGreen;
  }

  #subtitle {
    color: $darkGreen;
  }
}
</style>
