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
    listedProperties: [
      {
        id: 'f58b8f96-b037-434d-99cf-c45ac8c4b48d',
        ownerId: 'ee30f9c5-47ff-4596-833d-2454045cca26',
        selectedBorough: 'brooklyn',
        neighborhood: 'd',
        address: 'd',
        type: 'generalRetail',
        popupRentals: true,
        squareFootage: '3',
        expenseStructure: 'gross',
        askingRent: '333',
        availableNow: true,
        idealLeaseTerm: '3-5',
        buildingSize: '3',
        zoning: '3',
        buildingClass: '3',
        description: 'eeee',
        images: {
          nextToken: null
        },
        createdAt: '2020-06-26T17:14:54.907Z',
        updatedAt: '2020-06-26T17:14:54.907Z'
      }, {
        id: '6aeef512-8517-447a-8e6e-d280376257e0',
        ownerId: 'ee30f9c5-47ff-4596-833d-2454045cca26',
        selectedBorough: 'queens',
        neighborhood: 'e',
        address: '',
        type: '',
        popupRentals: false,
        squareFootage: '3',
        expenseStructure: 'mg',
        askingRent: '',
        availableNow: true,
        idealLeaseTerm: '6-9',
        buildingSize: '',
        zoning: '',
        buildingClass: '',
        description: 'e',
        images: {
          nextToken: null
        },
        createdAt: '2020-06-26T17:16:09.859Z',
        updatedAt: '2020-06-26T17:16:09.859Z'
      }, {
        id: 'a5221a6d-1233-4837-aa15-0231e132ec73',
        ownerId: 'ee30f9c5-47ff-4596-833d-2454045cca26',
        selectedBorough: 'brooklyn',
        neighborhood: '',
        address: '',
        type: 'generalRetail',
        popupRentals: false,
        squareFootage: '',
        expenseStructure: '',
        askingRent: '',
        availableNow: true,
        idealLeaseTerm: '10+',
        buildingSize: '',
        zoning: '',
        buildingClass: '',
        description: '',
        images: {
          nextToken: null
        },
        createdAt: '2020-06-26T17:10:05.034Z',
        updatedAt: '2020-06-26T17:10:05.034Z'
      }
    ]
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
    async getProperties ({ commit, state }) {
      try {
        const properties = await API.graphql(graphqlOperation(queries.listPropertys, {
          filter: {
            ownerId: {
              eq: state.user.username
            }
          }
        }))
        commit('setState', { property: 'listedProperties', value: properties.data.listPropertys.items })
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
  getters: {
    getProperties (state) {
      return state.listedProperties
    }
  }
})
