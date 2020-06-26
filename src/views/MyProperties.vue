<template>
  <v-main class="myProperties">
    <MainNavbar />
    <propertyCards />
  </v-main>
</template>

<script>

// @ is an alias to /src
import MainNavbar from '@/components/navbars/MainNavbar'
import propertyCards from '@/components/properties/propertyCards'

export default {
  name: 'MyProperties',
  components: {
    MainNavbar,
    propertyCards
  }
}

</script>
