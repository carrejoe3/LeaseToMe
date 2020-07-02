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
        selectedBorough: 'Staten Island',
        neighborhood: 'Great Kills',
        address: '74 Daleham St, Staten Island, NY 10308',
        type: 'General Retail',
        popupRentals: true,
        squareFootage: '4500',
        expenseStructure: 'Gross',
        askingRent: '7500',
        availableNow: true,
        idealLeaseTerm: '3-5',
        buildingSize: '3000',
        zoning: 'Euclidean',
        buildingClass: 'a5',
        description: 'This is a property.',
        images: [
          {
            id: '0',
            imageSrc: 'img/propertyImages/statenIsland1.jpg'
          }
        ],
        createdAt: '2020-06-26T17:14:54.907Z',
        updatedAt: '2020-06-26T17:14:54.907Z'
      }, {
        id: '6aeef512-8517-447a-8e6e-d280376257e0',
        ownerId: 'ee30f9c5-47ff-4596-833d-2454045cca26',
        selectedBorough: 'Queens',
        neighborhood: 'Astoria',
        address: '2010 Seagirt Blvd, Far Rockaway, NY 11691',
        type: 'General Retail',
        popupRentals: false,
        squareFootage: '575',
        expenseStructure: 'Gross',
        askingRent: '4500',
        availableNow: true,
        idealLeaseTerm: '6-9',
        buildingSize: '3000',
        zoning: 'Euclidean',
        buildingClass: 'b3',
        description: 'This is a property.',
        images: [
          {
            id: '0',
            imageSrc: 'img/propertyImages/queensWoolside.jpg'
          }
        ],
        createdAt: '2020-06-26T17:16:09.859Z',
        updatedAt: '2020-06-26T17:16:09.859Z'
      }, {
        id: 'a5221a6d-1233-4837-aa15-0231e132ec73',
        ownerId: 'ee30f9c5-47ff-4596-833d-2454045cca26',
        selectedBorough: 'Brooklyn',
        neighborhood: 'Williamsburg',
        address: '395 Leonard St, Brooklyn, NY 11211',
        type: 'Restaurant',
        popupRentals: false,
        squareFootage: '434',
        expenseStructure: 'Gross',
        askingRent: '3500',
        availableNow: true,
        idealLeaseTerm: '10+',
        buildingSize: '2000',
        zoning: 'Euclidean',
        buildingClass: 'b1',
        description: 'This is a property.',
        images: [
          {
            id: '0',
            imageSrc: 'img/propertyImages/brooklyn-long-island-bar.jpeg'
          }
        ],
        createdAt: '2020-06-26T17:10:05.034Z',
        updatedAt: '2020-06-26T17:10:05.034Z'
      }
    ],
    findSpaceFilters: {
      idealLocationFilter: 'All',
      spaceType: 'All',
      propertySizeRange: [0, 20],
      propertyPriceRange: [0, 20],
      availableNow: true
    }
  },
  mutations: {
    setState (state, payload) {
      state[payload.property] = payload.value
    },
    pushToState (state, payload) {
      state[payload.property].push(payload.value)
    },
    addImgToPropertyListing (state, payload) {
      state.propertyListingData.images.push(payload)
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
      let filteredProperties = state.listedProperties

      switch (state.currentPage) {
        case 'FindSpaces':
          if (state.findSpaceFilters.idealLocationFilter !== 'All') {
            filteredProperties = filteredProperties.filter(obj => obj.selectedBorough === state.findSpaceFilters.idealLocationFilter)
          }

          filteredProperties = filteredProperties.filter(obj => obj.availableNow === state.findSpaceFilters.availableNow)

          if (state.findSpaceFilters.spaceType !== 'All') {
            filteredProperties = filteredProperties.filter(obj => obj.type === state.findSpaceFilters.spaceType)
          }

          return filteredProperties
        default:
          return filteredProperties
      }
    }
  }
})
