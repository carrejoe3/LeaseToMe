<template>
  <div class="mt-10">
    <div class="text-h6 qLabel">Price</div>
    <v-slider v-model="slider" class="align-center" :max="max" :min="min" hide-details>
      <template v-slot:append>
        <v-text-field v-model="slider" class="mt-0 pt-0" hide-details single-line type="number" style="width: 60px"></v-text-field>
      </template>
    </v-slider>
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
  }
}
</script>
