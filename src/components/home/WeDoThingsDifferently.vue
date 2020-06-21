<template>
  <v-container id="WeDoThingsDifferently" fluid>
    <v-container>
      <div class="bannerTitle mt-6">We Do Things Differently</div>
      <v-row>
        <v-col class="pa-10">
          <div class="bannerSubtitle mb-3">Lease To Me</div>
          <v-list color="lightGrey" class="text-left">
            <v-list-item v-for="item in leftList" :key="item.title">
              <v-list-item-icon>
                <v-icon :color="item.iconColour">{{ item.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="item.title"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-col>
        <v-col class="pa-10">
          <div class="bannerSubtitle mb-3 greyTitle">The Other Guys</div>
          <v-list color="lightGrey" class="text-left">
            <v-list-item v-for="item in rightList" :key="item.title">
              <v-list-item-icon>
                <v-icon :color="item.iconColour">{{ item.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="item.title"></v-list-item-title>
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
  name: 'WeDoThingsDifferently',
  data () {
    return {
      leftList: [
        {
          title: 'SPACES FOR LEASE',
          icon: 'mdi-check-bold',
          iconColour: 'lightGreen'
        },
        {
          title: 'TENANTS SEEKING SPACE',
          icon: 'mdi-check-bold',
          iconColour: 'lightGreen'
        },
        {
          title: 'SEAMLESS LEASE PROPOSALS',
          icon: 'mdi-check-bold',
          iconColour: 'lightGreen'
        }
      ],
      rightList: [
        {
          title: 'SPACES FOR LEASE',
          icon: 'mdi-check-bold',
          iconColour: 'lightGreen'
        },
        {
          title: 'TENANTS SEEKING SPACE',
          icon: 'mdi-close',
          iconColour: 'darkGrey'
        },
        {
          title: 'SEAMLESS LEASE PROPOSALS',
          icon: 'mdi-close',
          iconColour: 'darkGrey'
        }
      ]
    }
  }
}

</script>

<style lang="scss" scoped>
#WeDoThingsDifferently {
  background-color: $lightGrey;
  text-align: center;

  .bannerSubtitle.greyTitle {
    color: $darkGrey;
  }
}
</style>
