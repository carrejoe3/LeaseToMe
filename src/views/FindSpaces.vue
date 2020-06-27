<template>
  <v-main class="findSpaces">
    <MainNavbar />
    <propertyCards />
  </v-main>
</template>

<script>

// @ is an alias to /src
import MainNavbar from '@/components/navbars/MainNavbar'
import propertyCards from '@/components/properties/propertyCards'

export default {
  name: 'findSpaces',
  components: {
    MainNavbar,
    propertyCards
  }
}

</script>
