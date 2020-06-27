<template>
  <v-main class="findSpaces">
    <MainNavbar />
    <banner />
    <propertyCards />
  </v-main>
</template>

<script>

// @ is an alias to /src
import MainNavbar from '@/components/navbars/MainNavbar'
import banner from '@/components/properties/findSpacesBanner'
import propertyCards from '@/components/properties/propertyCards'

export default {
  name: 'findSpaces',
  components: {
    MainNavbar,
    banner,
    propertyCards
  }
}

</script>
