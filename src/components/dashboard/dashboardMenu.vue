<template>
  <v-card elevation="10">
    <v-navigation-drawer permanent id="dash" height="100vw" width="30vw">
      <v-container class="contained">
        <v-row class="d-flex justify-center">
          <v-col class="ml-12">
            <h1>Landlord Dashboard</h1>
            <li>Notifications</li>

            <h2>Proposal Requests</h2>
            <ul>
              <li>1,800 SF|Greenpoint</li>
              <li>1,200 SF|Greenpoint</li>
            </ul>

            <h2>Manage Properties</h2>
            <h3>My Listing</h3>
            <h3>Post New Listing</h3>
            <h3>Marketing Services</h3>

            <h2>Account</h2>
            <h3>Edit Profile</h3>
            <h3>Membership</h3>
            <h3>Upgrade</h3>
            <h3>Logout</h3>
          </v-col>
        </v-row>
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
#dash {
  background-color: $cardTeal;
}

.contained {
  line-height: 3vw;
}

h1 {
  margin-top: 7vw;
  color: $primary;
  font-size: 2vw;
  font-weight: normal;
}

h2 {
  color: $primary;
  font-size: 1.75vw;
  font-weight: normal;
}

h3 {
  color: grey;
  font-size: 1.25vw;
  font-weight: normal;
}

li {
  list-style-type: none;
}
</style>
