<template>
  <v-content class="home">
    <MainNavbar />
    <ANewApproach />
    <Footer />
    <FooterBar />
  </v-content>
</template>

<script>

// @ is an alias to /src
import MainNavbar from '@/components/navbars/MainNavbar'
import ANewApproach from '@/components/home/ANewApproach'
import Footer from '@/components/footer/Footer'
import FooterBar from '@/components/footer/FooterBar'

export default {
  name: 'Home',
  components: {
    MainNavbar,
    ANewApproach,
    Footer,
    FooterBar
  }
}

</script>
