import { filters } from './filters'

export default {
  install (Vue) {
    Vue.filter('uppercase', filters.uppercase)
    Vue.filter('capitalizeFirstLetter', filters.capitalizeFirstLetter)
  }
}
