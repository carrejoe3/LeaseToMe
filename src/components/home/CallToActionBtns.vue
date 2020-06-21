<template>
  <v-container id="CallToActionBtns" fluid>
    <v-row>
      <v-btn color="lightGreen" dark x-large id="tenantsBtn" class="mt-n11" :style="{ left: '50%', transform:'translateX(-50%)' }">TENANTS START HERE</v-btn>
    </v-row>
    <v-row>
      <v-btn outlined color="primary" dark x-large id="LLBrokerBtn" class="mt-5 mb-15" :style="{ left: '50%', transform:'translateX(-50%)' }">LANDLORDS/BROKERS START HERE</v-btn>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: 'CallToActionBtns'
}

</script>

<style lang="scss" scoped>
#CallToActionBtns {
  background-color: $accent;

  button {
    width: 350px;
    height: 60px;
  }
}
</style>
