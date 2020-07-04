<template>
  <v-main class="findSpaces">
    <MainNavbar />
    <banner />
    <idealLocationFilter />
    <propertyFilterPopup />
    <v-container class="mt-10">
      <v-row no-gutters>
        <v-col cols="3">
          <sortDropdown />
        </v-col>
      </v-row>
      <propertyCards />
    </v-container>
  </v-main>
</template>

<script>

// @ is an alias to /src
import MainNavbar from '@/components/navbars/MainNavbar'
import banner from '@/components/properties/findSpacesBanner'
import idealLocationFilter from '@/components/properties/idealLocationFilter'
import sortDropdown from '@/components/properties/sortDropdown'
import propertyCards from '@/components/properties/propertyCards'
import propertyFilterPopup from '@/components/properties/propertyFilterPopup'

export default {
  name: 'findSpaces',
  components: {
    MainNavbar,
    banner,
    idealLocationFilter,
    sortDropdown,
    propertyCards,
    propertyFilterPopup
  }
}

</script>
