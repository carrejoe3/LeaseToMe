import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#406B44',
        secondary: '#C6E1D7',
        accent: '#8c9eff',
        error: '#b71c1c'
      }
    }
  }
})
