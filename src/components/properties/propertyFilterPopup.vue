<template>
  <v-row justify="center" class="mt-10" id="propertyFilterPopup">
    <v-dialog v-model="dialog" persistent width="600">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on" text>Advanced search</v-btn>
      </template>
      <v-card>
        <v-toolbar flat>
          <v-toolbar-title class="bannerSubtitle">Refine your search.</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>
        <v-card-text class="pt-5">
          <div class="d-inline mt-8">
            <div class="text-h6 qLabel">Type</div>
            <v-btn @click="selectType(btn.value)" v-for="(btn, index) in typeBtns" :key="index" class="ma-2" :color="btn.active ? 'primary' : 'lightGrey'">{{ btn.title }}</v-btn>
          </div>
          <propertySizeSlider />
          <propertyPriceFilter />
          <div class="d-flex mt-2 align-center">
            <div class="text-h6 mr-3 qLabel">Available now</div>
            <v-switch v-model="filters.availableNow"></v-switch>
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>

import propertySizeSlider from '@/components/properties/propertySizeSlider'
import propertyPriceFilter from '@/components/properties/propertyPriceFilter'

export default {
  data () {
    return {
      dialog: false,
      typeBtns: [
        {
          title: 'RESTAURANT',
          value: 'Restaurant',
          active: false
        },
        {
          title: 'GENERAL RETAIL',
          value: 'General Retail',
          active: false
        },
        {
          title: 'POP-UP',
          value: 'Pop-up',
          active: false
        },
        {
          title: 'ALL',
          value: 'All',
          active: true
        }
      ]
    }
  },
  components: {
    propertySizeSlider,
    propertyPriceFilter
  },
  computed: {
    filters: {
      get () {
        return this.$store.state.findSpaceFilters
      },
      set (value) {
        this.$store.commit('setState', {
          property: 'findSpaceFilters',
          value: value
        })
      }
    }
  },
  methods: {
    selectType (type) {
      this.filters.spaceType = type

      for (const i in this.typeBtns) {
        this.typeBtns[i].active = false
        if (this.typeBtns[i].value === type) this.typeBtns[i].active = true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#propertyFilterPopup {
  .qLabel {
    color: $darkGreen;
  }
}
</style>
