import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#406B44',
        secondary: '#C6E1D7',
        mainGreen: '#02883f',
        darkGreen: '#2A572E',
        lightGrey: '#F3F3F3',
        accent: '#ffffff',
        error: '#b71c1c'
      }
    }
  }
})
