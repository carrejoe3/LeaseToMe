<template>
  <v-content class="home">
    <MainNavbar />
    <Footer />
  </v-content>
</template>

<script>

// @ is an alias to /src
import MainNavbar from '@/components/MainNavbar.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    MainNavbar,
    Footer
  }
}

</script>
