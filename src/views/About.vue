<template>
  <v-content>
   <MainNavbar />
   <AboutContent />
  </v-content>
</template>

<script>

// @ is an alias to /src
import MainNavbar from '@/components/MainNavbar.vue'
import AboutContent from '@/components/AboutContent.vue'

export default {
  name: 'About',
  components: {
    MainNavbar,
    AboutContent
  }
}

</script>
