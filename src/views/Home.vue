<template>
  <v-content class="home">
    <MainNavbar />
    <Footer />
    <FooterBar />
  </v-content>
</template>

<script>

// @ is an alias to /src
import MainNavbar from '@/components/navbars/MainNavbar'
import Footer from '@/components/footer/Footer'
import FooterBar from '@/components/footer/FooterBar'

export default {
  name: 'Home',
  components: {
    MainNavbar,
    Footer,
    FooterBar
  }
}

</script>
