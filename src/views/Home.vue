<template>
  <v-content class="home">
    <MainNavbar />
  </v-content>
</template>

<script>

// @ is an alias to /src
import MainNavbar from '@/components/MainNavbar.vue'

export default {
  name: 'Home',
  components: {
    MainNavbar
  }
}

</script>
