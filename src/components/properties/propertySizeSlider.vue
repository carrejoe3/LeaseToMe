<template>
  <div class="mt-8">
    <div class="text-h6 qLabel">Size (SF)</div>
    <v-range-slider v-model="filters.propertySizeRange" :max="max" :min="min" hide-details class="align-center">
      <template v-slot:prepend>
        <v-text-field :value="range[0]" class="mt-0 pt-0" hide-details single-line type="number" style="width: 60px" @change="$set(range, 0, $event)"></v-text-field>
      </template>
      <template v-slot:append>
        <v-text-field :value="range[1]" class="mt-0 pt-0" hide-details single-line type="number" style="width: 60px" @change="$set(range, 1, $event)"></v-text-field>
      </template>
    </v-range-slider>
  </div>
</template>

<script>
export default {
  data () {
    return {
      min: -50,
      max: 90,
      slider: 40,
      range: [-20, 70]
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
