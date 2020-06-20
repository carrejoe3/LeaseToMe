<template>
  <v-content class="home">
    <MainNavbar />
    <Footer />
    <FooterBar />
  </v-content>
</template>

<script>

// @ is an alias to /src
import MainNavbar from '@/components/MainNavbar.vue'
import Footer from '@/components/footer/Footer.vue'
import FooterBar from '@/components/footer/FooterBar.vue'

export default {
  name: 'Home',
  components: {
    MainNavbar,
    Footer,
    FooterBar
  }
}

</script>
