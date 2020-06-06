<template>
  <v-app>
    <v-content class="pa-0">
      <AccountNavBar />
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import AccountNavBar from '@/components/AccountNavBar.vue'
export default {
  name: 'App',
  data: () => ({}),
  components: { AccountNavBar }
}
</script>

<style>

<style>
