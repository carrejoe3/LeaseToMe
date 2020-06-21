import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#298140',
        secondary: '#C6E1D7',
        mainGreen: '#02883f',
        lightGreen: '#37AA49',
        lightGrey: '#F3F3F3',
        darkGrey: '#54595F',
        accent: '#ffffff',
        error: '#b71c1c'
      }
    }
  }
})
