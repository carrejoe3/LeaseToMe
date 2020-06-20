<template>
  <v-content>
   <MainNavbar />
   <AboutContent />
  </v-content>
</template>

<script>

// @ is an alias to /src
import MainNavbar from '@/components/navbars/MainNavbar'
import AboutContent from '@/components/about/AboutContent'

export default {
  name: 'About',
  components: {
    MainNavbar,
    AboutContent
  }
}

</script>
