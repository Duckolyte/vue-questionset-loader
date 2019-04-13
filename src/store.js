import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //strict: true,
    application: {

      userAuthentication: {
        userName: '',
        authCookie: '',
      },

      context: {
        allQuestionsets: [],
        inUseQuestionset: {},
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
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
          },
          post: (bodyToPost) => {
            return {
              mode: 'cors',
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
              body: bodyToPost,
            }
          },
          update: {},
          delete: {},
        },
      },

      menuItemCommands:{
        delete: function(menuContext) {
          const webService =
            this.$store.state.application.questionsetWebService;
          fetch(
            `${webService.url}${webService.api}`+
            `${webService.resources.questionaries}/${menuContext.id}`,
            webServiceConfig.methods.delete
          )
          .then(response => {
            console.log(response);
          })
          .catch(error => {
            console.log(error);
          });
        },
        edit: function() {
          const routeTo = {
            name: menuContext.type,
            params: { id: menuContext.id}
          }
          this.$router.push(routeTo)
        },
      },
      descriptionMenuItems: [
        {
          label: 'Delete',
          icon : 'trash'
        },
        {
          label: 'Edit',
          icon : 'edit'
        }
      ],

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
