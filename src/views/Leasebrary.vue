<template>
  <v-main>
   <MainNavbar />
   <Footer />
   <FooterBar />
  </v-main>
</template>

<script>

// @ is an alias to /src
import MainNavbar from '@/components/navbars/MainNavbar'
import Footer from '@/components/footer/Footer'
import FooterBar from '@/components/footer/FooterBar'

export default {
  name: 'Leasebrary',
  components: {
    MainNavbar,
    Footer,
    FooterBar
  }
}

</script>
