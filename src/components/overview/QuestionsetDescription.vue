<template lang="html">
  <v-list-tile
    avatar
    @click="useQuestionset(questionset)"
  >
    <v-list-tile-avatar>
      <v-icon>fa-{{ questionsetTypeIcon }}</v-icon>
    </v-list-tile-avatar>

    <v-list-tile-content>
      <v-list-tile-title>
        <span>{{ questionset.title }}</span>
      </v-list-tile-title>
      <v-list-tile-sub-title>
        <span>Question count: </span>
        <span>{{ numberOfQuestions }}</span>
        <span> - </span>
        <span>{{ questionset.author }}</span>
      </v-list-tile-sub-title>
    </v-list-tile-content>

    <template
      v-if="isTitle"
    >
      <v-btn flat small fab>
        <v-icon small>fa-edit</v-icon>
      </v-btn>
      <v-btn flat small fab>
        <v-icon small>fa-trash</v-icon>
      </v-btn>
    </template>

    <qun-menu
      v-else
      :menuItems="menuItems"
      :menuContext="{id: questionset._id, type: 'questionset'}"
    >
    </qun-menu>
  </v-list-tile>
</template>

<script>
import {mapGetters} from 'vuex';
import QunMenu from '../util/QunMenu'

export default {

  name: 'QuestionsetDescription',

  components: {
    'qun-menu': QunMenu,
  },

  props: {
    questionset: Object,
    isTitle: Boolean,
  },

  computed: {

    ...mapGetters({
      types: 'allQuestionsetTypes',
    }),

    numberOfQuestions() {
      return this.questionset.questions.length;
    },

    questionsetTypeIcon() {
      return this.types
        .find(type => type.name === this.questionset.type)
        .icon
    },
  },

  methods: {
    useQuestionset(set){
      this.$store.commit('updateQuestionsetInUse', set)
    }
  },

  data() {
    return {
      menuItems:[
        {
          title: 'Edit',
          icon: 'edit',
          command: function(self, menuContext) {
            const routeTo = {
              name: `edit-${menuContext.type}`,
              params: { id: menuContext.id }
            }
            self.$router.push(routeTo)
          },
        },
        {
          title: 'Delete',
          icon: 'trash',
          command: function(self, menuContext) {
            const webService =
              self.$store.state.application.questionsetWebService;
            fetch(
              `${webService.url}${webService.api}`+
              `${webService.resources[menuContext.type]}/${menuContext.id}`,
              webService.methods.delete
            )
            .then(response => {
              response.text().then(text => {
                console.log(text);
                self.$store.commit(
                  'removeSetFromAllQuestionsets',
                  menuContext.id
                )
              })
            })
            .catch(error => {
              console.log(error);
            });
          },
        }
      ]
    }
  },


}
</script>

<style lang="css" scoped>
</style>
