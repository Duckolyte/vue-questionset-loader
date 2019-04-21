<template lang="html">
  <v-layout row wrap>
    <v-flex xs12>
      <v-list-tile avatar>
        <v-list-tile-avatar>
          <v-icon>fa-reply</v-icon>
        </v-list-tile-avatar>

        <v-list-tile-content>
          <v-list-tile-title>
            <span>{{ answer.label }}</span>
          </v-list-tile-title>
          <v-list-tile-sub-title>
            <span>Redirects to: </span>
            <span>{{ answer.next }}</span>
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
          :menuContext="{id: answer._id, type: 'answer'}"
        >
        </qun-menu>
      </v-list-tile>
    </v-flex>
  </v-layout>
</template>

<script>
import QunMenu from '../../util/QunMenu'

export default {
  name: 'AnswerList',

  components: {
    'qun-menu': QunMenu,
  },

  props: {
    answer: Object,
    isTitle: Boolean,
  },

  data(){
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
              console.log(response);
              self.$store.dispatch(
                'deleteQuestionInQuestionset',
                { id: menuContext.id }
              )
            })
            .catch(error => {
              console.log(error);
            });
          },
        }
      ],
    }
  }
}
</script>

<style lang="css" scoped>
</style>
