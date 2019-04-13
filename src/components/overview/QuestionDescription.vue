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
      :menuContext="{id: description.id, type: 'question'}"
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
          command: function(menuContext) {
            const routeTo = {
              name: `edit-${menuContext.type}`,
              params: { id: menuContext.id }
            }
            this.$router.push(routeTo)
          },
        },
        {
          title: 'Delete',
          icon: 'trash',
          command: function(menuContext) {
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
        }
      ]
    }
  }
}
</script>

<style lang="css" scoped>
</style>
