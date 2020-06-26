import Vue from 'vue'
import Vuex from 'vuex'
import { API, graphqlOperation } from 'aws-amplify'
import * as queries from '../graphql/queries'
import * as mutations from '../graphql/mutations'

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
      buildingClass: '',
      description: '',
      images: []
    },
    listedProperties: []
  },
  mutations: {
    setState (state, payload) {
      state[payload.property] = payload.value
    },
    pushToState (state, payload) {
      state[payload.property].push(payload.value)
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
    },
    async submitProperty ({ commit, state }) {
      try {
        const property = await API.graphql(graphqlOperation(mutations.createProperty, {
          input: {
            ownerId: state.user.username,
            selectedBorough: state.propertyListingData.selectedBorough,
            neighborhood: state.propertyListingData.neighborhood,
            address: state.propertyListingData.address,
            type: state.propertyListingData.type,
            popupRentals: state.propertyListingData.popupRentals,
            squareFootage: state.propertyListingData.squareFootage,
            expenseStructure: state.propertyListingData.expenseStructure,
            askingRent: state.propertyListingData.askingRent,
            availableNow: state.propertyListingData.availableNow,
            idealLeaseTerm: state.propertyListingData.idealLeaseTerm,
            buildingSize: state.propertyListingData.buildingSize,
            zoning: state.propertyListingData.zoning,
            buildingClass: state.propertyListingData.buildingClass,
            description: state.propertyListingData.description
          }
        }))
        commit('pushToState', { property: 'listedProperties', value: property.data.createProperty })
      } catch (err) {
        console.error(err)
      }
    }
  },
  modules: {
  }
})
