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
          icon: 'edit'
        },
        {
          title: 'Delete',
          icon: 'trash'
        }
      ]
    }
  }
}
</script>

<style lang="css" scoped>
</style>
