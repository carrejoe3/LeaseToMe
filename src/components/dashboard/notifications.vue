<template>
    <div class="help">
        <v-card id="notificationCard" height="25vw" max-width="400">
            <h1>Notifications</h1>
            <v-card-title>
                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title v-for="notification in notifications" :key="notification">{{ notification }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-card-title>
        </v-card>
    </div>
</template>
<script>
export default {
  name: 'notifications',
  computed: {
    notifications () {
      return this.$store.state.notifications
    }
  }
}
</script>
<style scoped lang="scss">
#notificationCard {
    background-color: $cardTeal;
}

h1 {
    padding-top: 2vw;
    color: $lightGreen;
    font-size: 2vw;
    font-weight: normal;
    text-align: center;
}

li {
    color: grey;
    font-size: 1.25vw;
    font-weight: 300;
    list-style-type: circle;
}
</style>
