<template>
  <v-main>
   <MainNavbar />
   <leasebraryTitle />
   <firstRow />
   <Footer />
   <FooterBar />
  </v-main>
</template>

<script>

// @ is an alias to /src
import MainNavbar from '@/components/navbars/MainNavbar'
import leasebraryTitle from '@/components/leasebrary/leasebraryTitle'
import firstRow from '@/components/leasebrary/firstRow'
import Footer from '@/components/footer/Footer'
import FooterBar from '@/components/footer/FooterBar'

export default {
  name: 'Leasebrary',
  components: {
    MainNavbar,
    leasebraryTitle,
    firstRow,
    Footer,
    FooterBar
  }
}

</script>
