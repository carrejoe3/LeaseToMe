<template>
  <v-container fluid id="footerBar" class="pa-0">
    <v-container class="pa-0">
      <v-toolbar color="darkGreen" flat>
        <v-btn x-small text color="accent">Copyright ©2020 LeaseToMe</v-btn>
        <v-spacer></v-spacer>
        <v-btn x-small text color="accent">Privacy Policy</v-btn>
        <v-btn x-small text color="accent">Terms of Service</v-btn>
      </v-toolbar>
    </v-container>
  </v-container>
</template>

<script>

export default {
  name: 'FooterBar'
}

</script>

<style lang="scss" scoped>
#footerBar {
  background-color: $darkGreen;
}
</style>
