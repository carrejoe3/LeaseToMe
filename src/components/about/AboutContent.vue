<template>
  <v-row>
    <v-col>
      <div class="LTMteal">
        <p class="aboutLTM">LeaseToMe brings retail real estate solutions to you</p>
      </div>
      <p class="mission">Our Mission is to bring transparency and efficiency to commercial leasing by putting the tenant at the forefront of the transaction while democratizing the process for landlords and brokers</p>
      <div class="LTMteal">
        <v-card class="avatar" dark max-width="400" flat>
          <v-card-actions>
            <v-list-item>
              <v-list-item-avatar>
                <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title id="avatarName">Justin Baker</v-list-item-title>
                <v-list-item-title id="avatarTitle">co-founder & ceo</v-list-item-title>
                <v-list-item-title></v-list-item-title>
                <v-icon id="icon" large color="green darken-2">mdi-domain</v-icon>
              </v-list-item-content>
            </v-list-item>
          </v-card-actions>
        </v-card>
        <v-card class="avatar" max-width="400" flat>
          <v-card-actions>
            <v-list-item>
              <v-list-item-avatar>
                <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title id="avatarName">Ben Titcomb</v-list-item-title>
                <v-list-item-title id="avatarTitle">co-founder & coo</v-list-item-title>
                <v-icon id="icon" large color="green darken-2">mdi-domain</v-icon>
              </v-list-item-content>
            </v-list-item>
          </v-card-actions>
        </v-card>
      </div>
      <div class="getInTouch">
        <v-card flat class="button d-flex">
          <v-list-item>
            <v-img id="skyline" src="https://library.kissclipart.com/20190404/xpe/kissclipart-skyline-illustration-vector-graphics-clip-art-skys-37f96f38b46b7498.png"></v-img>
          </v-list-item>
          <v-card-subtitle id="buttonTitle">Operating in the five boroughs of New York City Since 2019</v-card-subtitle>
          <v-list-item>
            <v-btn x-large depressed color="success">GET IN TOUCH</v-btn>
          </v-list-item>
        </v-card>
      </div>
    </v-col>
  </v-row>
</template>

<script>

export default {
  name: 'AboutContent'
}
</script>

<style scoped lang="scss">
div .col {
  margin-top: -15px;
  padding: 0px;
}

.LTMteal {
  padding: 20px 0;
  background-color: $cardTeal;

  p {
    color: $middleGreen;
    margin: 15% 10%;
    text-align: center;
    font-size: 3.5vw;
    font-weight: 500;
  }
}

.mission {
  color: $lightGreen;
  display: block;
  text-align: center;
  margin: 8% 10% 9%;
  font-size: 3vw;
  line-height: 1.25;
}

.avatar {
  background-color: $cardTeal;
  margin-left: 12%;
  margin-bottom: 2%;

  img {
    width: 300px;
    height: 300px;
  }

  #avatarName {
    font-weight: 600;
    font-size: 2.5vw;
    color: $primary;
  }

  #avatarTitle {
    color: $middleGreen;
    font-size: 2vw;
    text-transform: uppercase;
    font-weight: 450;
  }

  #icon {
    padding-right: 90%;
  }
}

.getInTouch {
  margin-top: 10%;
  margin-bottom: 10%;

  .button {
    flex-direction: column;
    justify-content: center;
    align-items: center;

    #skyline {
      max-width: 400px;
    }

    #buttonTitle {
      color: $darkGreen;
      font-size: 1.75vw;
      font-weight: 450;
    }
  }
}
</style>
