<template>
  <v-container id="footerWrapper" fluid>
    <v-container id="footer">
      <v-row>
        <v-col xs="12" sm="6" md="3" lg="4">
          <v-list color="darkGreen" dark>
            <v-list-item three-line>
              <v-list-item-content>
                <v-list-item-title>CONTACT US</v-list-item-title>
                <v-list-item-subtitle>info@LeaseToMe.com</v-list-item-subtitle>
                <v-list-item-subtitle>(917) 525-3089</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
          <v-list-item single-line dark>
              <v-list-item-title>CONNECT WITH US</v-list-item-title>
          </v-list-item>
          <div id="socialMediaIcons" class="d-flex pl-2">
            <v-btn icon color="accent">
              <v-icon>mdi-linkedin</v-icon>
            </v-btn>
            <v-btn icon color="accent">
              <v-icon>mdi-facebook</v-icon>
            </v-btn>
            <v-btn icon color="accent">
              <v-icon>mdi-instagram</v-icon>
            </v-btn>
            <v-btn icon color="accent">
              <v-icon>mdi-twitter</v-icon>
            </v-btn>
          </div>
        </v-col>
        <v-col xs="6" sm="4" md="2" lg="2">
          <v-list color="darkGreen" dark>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>TENANTS</v-list-item-title>
                <v-list-item-subtitle>Sign Up</v-list-item-subtitle>
                <v-list-item-subtitle>How It Works</v-list-item-subtitle>
                <v-list-item-subtitle>List Requirements</v-list-item-subtitle>
                <v-list-item-subtitle>Find Spaces</v-list-item-subtitle>
                <v-list-item-subtitle>Find Brokers</v-list-item-subtitle>
                <v-list-item-subtitle>Lease-brary</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-col>
        <v-col xs="6" sm="4" md="2" lg="2">
          <v-list color="darkGreen" dark>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>LANDLORDS</v-list-item-title>
                <v-list-item-subtitle>Sign Up</v-list-item-subtitle>
                <v-list-item-subtitle>How It Works</v-list-item-subtitle>
                <v-list-item-subtitle>List Spaces</v-list-item-subtitle>
                <v-list-item-subtitle>Find Tenants</v-list-item-subtitle>
                <v-list-item-subtitle>Find Brokers</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-col>
        <v-col xs="6" sm="4" md="2" lg="2">
          <v-list color="darkGreen" dark>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>BROKERS</v-list-item-title>
                <v-list-item-subtitle>Sign Up</v-list-item-subtitle>
                <v-list-item-subtitle>How It Works</v-list-item-subtitle>
                <v-list-item-subtitle>List Requirements</v-list-item-subtitle>
                <v-list-item-subtitle>List Spaces</v-list-item-subtitle>
                <v-list-item-subtitle>Find Tenants</v-list-item-subtitle>
                <v-list-item-subtitle>Find Spaces</v-list-item-subtitle>
                <v-list-item-subtitle>Broker Directory</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-col>
        <v-col xs="6" sm="4" md="2" lg="2">
          <v-list color="darkGreen" dark>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>COMPANY</v-list-item-title>
                <v-list-item-subtitle>About Us</v-list-item-subtitle>
                <v-list-item-subtitle>Retail Scoop</v-list-item-subtitle>
                <v-list-item-subtitle>Blog</v-list-item-subtitle>
                <v-list-item-subtitle>Lease-brary</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>

export default {
  name: 'Footer'
}

</script>

<style lang="scss" scoped>
#footerWrapper {
  #footer {
    background-color: $darkGreen;
  }
}
</style>
