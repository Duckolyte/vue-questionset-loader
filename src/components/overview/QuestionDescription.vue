<template lang="html">
  <v-list-tile
    :key="description.label"
    avatar
    @click=""
  >
    <v-list-tile-avatar>
      <v-icon>fa-question</v-icon>
    </v-list-tile-avatar>

    <v-list-tile-content>
      <v-list-tile-title>
        <span>{{ description.label }}</span>
      </v-list-tile-title>
      <v-list-tile-sub-title>
        <span>Question type: </span>
        <span>{{ description.type }}</span>
        <span>{{ description.references }}</span>
      </v-list-tile-sub-title>
    </v-list-tile-content>

    <qun-menu
      :menuItems="menuItems"
      :menuContext="{id: description._id, type: 'question'}"
    >
    </qun-menu>
  </v-list-tile>
</template>

<script>
import QunMenu from '../util/QunMenu'

export default {
  name: 'QuestionDescription',
  components: {
    'qun-menu': QunMenu,
  },
  props: {
    description: Object,
  },
  data(){
    return{
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
      ]
    }
  }
}
</script>

<style lang="css" scoped>
</style>
