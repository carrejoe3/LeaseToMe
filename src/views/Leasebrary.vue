<template>
  <v-main>
   <MainNavbar />
   <leasebraryTitle />
   <Footer />
   <FooterBar />
  </v-main>
</template>

<script>

// @ is an alias to /src
import MainNavbar from '@/components/navbars/MainNavbar'
import leasebraryTitle from '@/components/leasebrary/title'
import Footer from '@/components/footer/Footer'
import FooterBar from '@/components/footer/FooterBar'

export default {
  name: 'Leasebrary',
  components: {
    MainNavbar,
    leasebraryTitle,
    Footer,
    FooterBar
  }
}

</script>
