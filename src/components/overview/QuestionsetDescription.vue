<template lang="html">
  <v-list-tile
    :key="questionset.title"
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
    isTitle: Boolean
  },
  computed:{
    numberOfQuestions: function(){
      return this.questionset.questions.length;
    }
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
