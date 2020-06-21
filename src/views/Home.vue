<template>
  <v-main class="home">
    <MainNavbar />
    <HeroImage />
    <ANewApproach />
    <HowLTMWorks />
    <WeDoThingsDifferently />
    <HowWeHelp />
    <Footer />
    <FooterBar />
  </v-main>
</template>

<script>

// @ is an alias to /src
import MainNavbar from '@/components/navbars/MainNavbar'
import HeroImage from '@/components/home/HeroImage'
import ANewApproach from '@/components/home/ANewApproach'
import HowLTMWorks from '@/components/home/HowLTMWorks'
import WeDoThingsDifferently from '@/components/home/WeDoThingsDifferently'
import HowWeHelp from '@/components/home/HowWeHelp'
import Footer from '@/components/footer/Footer'
import FooterBar from '@/components/footer/FooterBar'

export default {
  name: 'Home',
  components: {
    MainNavbar,
    HeroImage,
    ANewApproach,
    HowLTMWorks,
    WeDoThingsDifferently,
    HowWeHelp,
    Footer,
    FooterBar
  }
}

</script>
