<template>
  <v-app-bar app hide-on-scroll height="30px" flat class="greenish">
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn x-small text><h6>Login</h6></v-btn>
      <v-btn x-small text><h6>Register</h6></v-btn>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
export default {
  name: 'AccountNavBar',
  props: {
    msg: String
  }
}
</script>

<style scoped>
h6 {
  display: inline;
  vertical-align: middle;
  font-weight: 400;
  color: white;
  font-size: .75vw;
}

.greenish {
background: rgb(1,0,8);
background: linear-gradient(90deg, rgba(1,0,8,1) 0%, rgba(9,35,9,0.9344729344729344) 0%, rgba(8,149,53,0.9074074074074074) 91%);
}
</style>
