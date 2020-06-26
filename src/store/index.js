import Vue from 'vue'
import Vuex from 'vuex'
import { API, graphqlOperation } from 'aws-amplify'
import * as queries from '../graphql/queries'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    notifications: ['hello1', 'hello2'],
    loginFormState: 'signIn',
    currentPage: '',
    propertyListingQsStep: 1,
    propertyListingData: {
      selectedBorough: '',
      neighborhood: '',
      address: '',
      type: '',
      popupRentals: false,
      squareFootage: '',
      expenseStructure: '',
      askingRent: '',
      features: [],
      availableNow: true,
      idealLeaseTerm: '',
      buildingSize: '',
      zoning: '',
      buildingClass: ''
    }
  },
  mutations: {
    setState (state, payload) {
      state[payload.property] = payload.value
    }
  },
  actions: {
    async getNotifications ({ commit, state }) {
      try {
        const notifications = await API.graphql(graphqlOperation(queries.listNotifications, {
          filter: {
            userId: {
              eq: state.user.username
            }
          }
        }))
        commit('setState', { property: 'notifications', value: notifications.data.listNotifications.items })
      } catch (err) {
        console.error(err)
      }
    }
  },
  modules: {
  }
})
