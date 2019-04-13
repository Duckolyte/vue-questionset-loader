<template lang="html">
  <v-list-tile
    avatar
    @click="openQuestionset(questionset)"
  >
    <v-list-tile-avatar>
      <v-icon>fa-{{ questionset.type }}</v-icon>
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
      :menuContext="{id: questionset.id, type: 'questionset'}"
    >
    </qun-menu>
  </v-list-tile>
</template>

<script>
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
    numberOfQuestions: function(){
      return this.questionset.questions.length;
    }
  },

  methods: {
    openQuestionset(set){
      return;
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
        }
      ]
    }
  },


}
</script>

<style lang="css" scoped>
</style>
