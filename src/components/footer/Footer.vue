<template>
  <v-container id="footer" fluid>
    <v-container>
      <v-row>
        <v-col xs="12" sm="4" md="3" lg="4">
          <v-list color="primary" dark>
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
        <v-col xs="6" sm="3" md="2" lg="2">
          <v-list color="primary" dark dense nav>
            <v-list-item-title>TENANTS</v-list-item-title>
            <v-list-item-group>
              <v-list-item v-for="(item, i) in tenants" :key="i" :to="item.navTo">
                <v-list-item-content>
                  <v-list-item-title v-text="item.title"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-col>
        <v-col xs="6" sm="3" md="2" lg="2">
          <v-list color="primary" dark dense nav>
            <v-list-item-title>LANDLORDS</v-list-item-title>
            <v-list-item-group>
              <v-list-item v-for="(item, i) in landlords" :key="i" :to="item.navTo">
                <v-list-item-content>
                  <v-list-item-title v-text="item.title"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-col>
        <v-col xs="6" sm="3" md="2" lg="2">
          <v-list color="primary" dark dense nav>
            <v-list-item-title>BROKERS</v-list-item-title>
            <v-list-item-group>
              <v-list-item v-for="(item, i) in brokers" :key="i" :to="item.navTo">
                <v-list-item-content>
                  <v-list-item-title v-text="item.title"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-col>
        <v-col xs="6" sm="3" md="2" lg="2">
          <v-list color="primary" dark dense nav>
            <v-list-item-title>COMPANY</v-list-item-title>
            <v-list-item-group>
              <v-list-item v-for="(item, i) in company" :key="i" :to="item.navTo">
                <v-list-item-content>
                  <v-list-item-title v-text="item.title"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>

export default {
  name: 'Footer',
  data () {
    return {
      tenants: [
        {
          title: 'Sign Up',
          navTo: 'About'
        },
        {
          title: 'How It Works',
          navTo: 'About'
        },
        {
          title: 'List Requirements',
          navTo: 'About'
        },
        {
          title: 'Find Spaces',
          navTo: 'FindSpaces'
        },
        {
          title: 'Find Brokers',
          navTo: 'About'
        },
        {
          title: 'Lease-brary',
          navTo: 'About'
        }
      ],
      landlords: [
        {
          title: 'Sign Up',
          navTo: 'Login'
        },
        {
          title: 'How It Works',
          navTo: 'About'
        },
        {
          title: 'List Spaces',
          navTo: 'About'
        },
        {
          title: 'Find Tenants',
          navTo: 'About'
        },
        {
          title: 'Find Brokers',
          navTo: 'About'
        }
      ],
      brokers: [
        {
          title: 'Sign Up',
          navTo: 'Login'
        },
        {
          title: 'How It Works',
          navTo: 'About'
        },
        {
          title: 'List Requirements',
          navTo: 'About'
        },
        {
          title: 'List Spaces',
          navTo: 'About'
        },
        {
          title: 'Find Tenants',
          navTo: 'About'
        },
        {
          title: 'Find Spaces',
          navTo: 'FindSpaces'
        },
        {
          title: 'Broker Directory',
          navTo: 'About'
        }
      ],
      company: [
        {
          title: 'About Us',
          navTo: 'About'
        },
        {
          title: 'Retail Scoop',
          navTo: 'About'
        },
        {
          title: 'Blog',
          navTo: 'About'
        },
        {
          title: 'Lease-brary',
          navTo: 'About'
        }
      ]
    }
  }
}

</script>

<style lang="scss" scoped>
#footer {
  background-color: $primary;
}
</style>
