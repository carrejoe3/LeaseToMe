<template>
  <v-content>
   <LTMNav/>
   <AboutContent/>
  </v-content>
</template>

<script>
// @ is an alias to /src
import LTMNav from '@/components/LTMNav.vue'
import AboutContent from '@/components/AboutContent.vue'

export default {
  name: 'About',
  components: { LTMNav, AboutContent }
}
</script>

<style scoped>

<style>
