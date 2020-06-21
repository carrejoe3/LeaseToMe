<template>
  <v-content class="home">
    <MainNavbar />
    <HowWeHelp />
    <ANewApproach />
    <Footer />
    <FooterBar />
  </v-content>
</template>

<script>

// @ is an alias to /src
import MainNavbar from '@/components/navbars/MainNavbar'
import ANewApproach from '@/components/home/ANewApproach'
import HowWeHelp from '@/components/home/HowWeHelp'
import Footer from '@/components/footer/Footer'
import FooterBar from '@/components/footer/FooterBar'

export default {
  name: 'Home',
  components: {
    MainNavbar,
    ANewApproach,
    HowWeHelp,
    Footer,
    FooterBar
  }
}

</script>
