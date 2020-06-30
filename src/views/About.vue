<template>
  <v-main>
   <MainNavbar />
   <AboutContent />
   <Footer />
   <FooterBar />
  </v-main>
</template>

<script>

// @ is an alias to /src
import MainNavbar from '@/components/navbars/MainNavbar'
import AboutContent from '@/components/about/AboutContent'
import Footer from '@/components/footer/Footer'
import FooterBar from '@/components/footer/FooterBar'

export default {
  name: 'About',
  components: {
    MainNavbar,
    AboutContent,
    Footer,
    FooterBar
  }
}

</script>
