import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //strict: true,
    application: {

      userAuthentication: {
        userId: ''
      },

      questionsetWebService: {
        url: 'http://localhost:3000', //should be loaded from a resource file
        api: '/questionary-loader',
        resources: {
          questionaries: '/questionaries'
        },
        methods: {
          get: {
            method: 'GET',
            headers: {
              accept: 'application/json',
              'content-type': 'application/json',
            },
          },
          post: (bodyToPost) => {
            return {
              method: 'POST',
              headers: {
                accept: 'application/json',
                'content-type': 'application/json',
              },
              body: bodyToPost,
            }
          },
          update: {},
          delete: {},
        },
      },
      // TODO make this multi language supported
      descriptionMenuItems: [
        {
          label: 'Edit',
          icon : 'Delete'
        }
      ]

    },

    domain: {

      questionsetTypes: {
        allTypes: [
          {
            name: 'Diagnose',
            icon: 'diagnoses'
          },
          {
            name: 'Fever',
            icon: 'thermometer-half'
          },
          {
            name: 'Cardio',
            icon: 'heartbeat'
          }
        ]
      },

    },
  },
  getters: {

    allTypeNames: state => {
      return state.domain.questionsetTypes.allTypes.map(
        type => type.name
      )
    },
    allTypeIcons: state => {
      return state.allTypes.map(
        type => type.icon
      )
    },
  },
  mutations: {

  },
  actions: {

  }
})
