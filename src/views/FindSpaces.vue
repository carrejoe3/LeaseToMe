<template>
  <v-main class="findSpaces">
    <MainNavbar />
    <banner />
    <idealLocationFilter />
    <propertyFilterPopup />
    <propertyCards />
  </v-main>
</template>

<script>

// @ is an alias to /src
import MainNavbar from '@/components/navbars/MainNavbar'
import banner from '@/components/properties/findSpacesBanner'
import idealLocationFilter from '@/components/properties/idealLocationFilter'
import propertyCards from '@/components/properties/propertyCards'
import propertyFilterPopup from '@/components/properties/propertyFilterPopup'

export default {
  name: 'findSpaces',
  components: {
    MainNavbar,
    banner,
    idealLocationFilter,
    propertyCards,
    propertyFilterPopup
  }
}

</script>
