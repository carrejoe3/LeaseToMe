<template>
  <v-main class="home">
    <MainNavbar />
    <ANewApproach />
    <WeDoThingsDifferently />
    <HowWeHelp />
    <Footer />
    <FooterBar />
  </v-main>
</template>

<script>

// @ is an alias to /src
import MainNavbar from '@/components/navbars/MainNavbar'
import ANewApproach from '@/components/home/ANewApproach'
import WeDoThingsDifferently from '@/components/home/WeDoThingsDifferently'
import HowWeHelp from '@/components/home/HowWeHelp'
import Footer from '@/components/footer/Footer'
import FooterBar from '@/components/footer/FooterBar'

export default {
  name: 'Home',
  components: {
    MainNavbar,
    ANewApproach,
    WeDoThingsDifferently,
    HowWeHelp,
    Footer,
    FooterBar
  }
}

</script>
