<template>
  <v-main class="findSpaces">
    <MainNavbar />
    <banner />
    <idealLocationFilter />
    <propertyCards />
  </v-main>
</template>

<script>

// @ is an alias to /src
import MainNavbar from '@/components/navbars/MainNavbar'
import banner from '@/components/properties/findSpacesBanner'
import idealLocationFilter from '@/components/properties/idealLocationFilter'
import propertyCards from '@/components/properties/propertyCards'

export default {
  name: 'findSpaces',
  components: {
    MainNavbar,
    banner,
    idealLocationFilter,
    propertyCards
  }
}

</script>
