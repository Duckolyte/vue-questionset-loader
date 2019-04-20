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
        allQuestionsets: null,
        inUseQuestionset: null,
      },

      questionsetWebService: {
        url: 'http://localhost:3000', //should be loaded from a resource file
        api: '/questionary-loader',
        resources: {
          questionset: '/questionaries',
          question: '/questions'
        },
        methods: {
          get: {
            mode: 'cors',
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
          update: (bodyToPost) => {
            return {
              mode: 'cors',
              method: 'PUT',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
              body: bodyToPost,
            }
          },
          delete: {
            mode: 'cors',
            method: 'DELETE',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
          },
        },

        fetchResource: {

          updateQuestionset() {

          },

          createQuestionset() {

          },

        },
      },

      menuItemCommands:{
        delete: function(menuContext) {
          const webService =
            this.$store.state.application.questionsetWebService;
          fetch(
            `${webService.url}${webService.api}`+
            `${webService.resources.questionaries}/${menuContext.id}`,
            webService.methods.delete
          )
          .then(response => {
            console.log(response);
          })
          .catch(error => {
            console.log(error);
          });
        },
        edit: function(menuContext) {
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

    allQuestionsetTypes: state => {
      return state.domain.questionsetTypes.allTypes
    },

    allTypeNames: state => {
      return state.domain.questionsetTypes.allTypes.map(
        type => type.name
      )
    },

    allTypeIcons: state => {
      return state.domain.questionsetTypes.allTypes.map(
        type => type.icon
      )
    },

  },

  mutations: {

    updateQuestionsetInUse: (state, set) => {
      state.application.context.inUseQuestionset = set;
    },

    removeSetFromAllQuestionsets: (state, setId) => {
      let allSets = state.application.context.allQuestionsets;
      if (state.application.context.inUseQuestionset._id == setId) {
        state.application.context.inUseQuestionset = ''
      }
      state.application.context.allQuestionsets = allSets.filter(
        set => set._id !== setId
      );
    },

    postQuestionInQuestionset: (state, payload) => {
        state.application.context.allQuestionsets.find(
          set => set._id == payload.id
        )
        .questions
        .push(payload.question)
    },

    updateQuestionInQuestionset: (state, payload) => {
        let setToUpdate = state.application.context.allQuestionsets.find(
          set => set._id == payload.id
        )

        let updatedQuestions = setToUpdate.questions
          .filter(question => question._id !== payload.question._id)

        updatedQuestions.push(payload.question)

        setToUpdate.questions = updatedQuestions
    },

    deleteQuestionInQuestionset: (state, payload) => {
      let setInUse = state.application.context.inUseQuestionset;
      if (setInUse) {
        setInUse.questions = setInUse.questions.filter(
          question => question._id !== payload.id
        )
      }
    },

  },

  actions: {

    deleteQuestionInQuestionset: (context, payload) => {
      let setInUse = context.state.application.context.inUseQuestionset;

      context.commit('deleteQuestionInQuestionset', payload)

      context.dispatch('updateQuestionset', {id: setInUse._id})

    },

    updateQuestionsetWithQuestion: (context, payload) => {

      context.commit(
        payload.method,
        payload
      )

      context.dispatch('updateQuestionset', payload)
    },

    updateQuestionset: (context, payload) => {
      let setToUpdate = context.state.application.context.allQuestionsets.find(
        set => set._id == payload.id
      )
      const webService = context.state.application.questionsetWebService;

      fetch(
        `${webService.url}${webService.api}` +
        `${webService.resources.questionset}/${setToUpdate._id}`,
        webService.methods.update(
          JSON.stringify(setToUpdate)
        )
      )
      .then(response => {
        response.text().then((text) => {
          // TODO snackbar info successfully updated questionset
          console.log(text);
        });
      })
      .catch(error => {
        // TODO handle error with a snackbar
        console.log(error);
      })
    },

  }
})
