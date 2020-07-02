<template>
  <div class="mt-8">
    <div class="text-h6 qLabel">Size (SF)</div>
    <v-range-slider v-model="filters.propertySizeRange" :max="max" :min="min" hide-details class="align-center">
      <template v-slot:prepend>
        <v-text-field :value="filters.propertySizeRange[0]" class="mt-0 pt-0" hide-details single-line type="number" style="width: 60px" @change="$set(range, 0, $event)"></v-text-field>
      </template>
      <template v-slot:append>
        <v-text-field :value="filters.propertySizeRange[1]" class="mt-0 pt-0" hide-details single-line type="number" style="width: 60px" @change="$set(range, 1, $event)"></v-text-field>
      </template>
    </v-range-slider>
  </div>
</template>

<script>
export default {
  data () {
    return {
      min: 1,
      max: 99999,
      range: [1, 99999]
    }
  },
  computed: {
    filters: {
      get () {
        return this.$store.state.findSpaceFilters
      },
      set (value) {
        this.$store.commit('setState', { property: 'findSpaceFilters', value: value })
      }
    }
  }
}
</script>
