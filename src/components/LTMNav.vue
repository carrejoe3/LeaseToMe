<template>
  <header>
  <v-toolbar
  absolute
  width="100vw"
  >
    <v-toolbar-title class="titleGreen">
      <v-icon id="icon" large color="green darken-2">mdi-domain</v-icon>
      <h3><strong>LeaseToMe</strong></h3>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
     <v-btn x-small text><h6>Tenant Listings</h6></v-btn>
     <v-btn x-small text><h6>Broker Directory</h6></v-btn>
     <v-menu>
     <template v-slot:activator="{ on }">
        <v-btn x-small text v-on="on">
          <h6>How It Works</h6>
        </v-btn>
      </template>
     </v-menu>
    </v-toolbar-items>
  </v-toolbar>
  </header>
</template>

<script>
export default {
  name: 'LTMNav',
  props: {
    msg: String
  }
}
</script>

<style scoped>
  h6 {
    font-size: .75vw;
    color: #257B2D;
    display:
  }

  h3 {
    display: inline;
    font-size: 3vw;
  }

  .titleGreen {
    color: #02883F;
  }

  #icon {
    padding-bottom: 5%;
  }

</style>
