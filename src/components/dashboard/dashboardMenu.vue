<template>
  <v-card width="250" tile>
    <v-navigation-drawer permanent id="sideMenu" height="calc(100vh - 94px)" color="cardTeal">
      <v-container class="ma-4">
        <div class="menuTitle">Manage Properties</div>
        <v-list nav>
          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title>My Listings</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link to="PropertyListing">
            <v-list-item-content>
              <v-list-item-title>Post New Listing</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title>Marketing Services</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <div class="menuTitle">Account</div>
        <v-list nav>
          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title>Edit Profile</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title>Membership</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title>Upgrade</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title>Logout</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-container>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
export default {
  name: 'dashboardMenu'
}
</script>

<style scoped lang="scss">
#sideMenu {
  .menuTitle {
    color: $primary;
    font-size: 1.5em;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 1.2em;
    word-break: normal;
  }
}
</style>
