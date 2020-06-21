<template>
  <v-main>
   <MainNavbar />
   <AboutContent />
  </v-main>
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
  },
  mounted () {
    this.$store.commit('setState', { property: 'currentPage', value: 'about' })
  }
}

</script>
