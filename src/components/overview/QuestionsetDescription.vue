<template lang="html">
  <v-list-tile
    :key="description.title"
    avatar
    @click=""
  >
    <v-list-tile-avatar>
      <v-icon>fa-{{ description.type }}</v-icon>
    </v-list-tile-avatar>

    <v-list-tile-content>
      <v-list-tile-title>
        <span>{{ description.title }}</span>
      </v-list-tile-title>
      <v-list-tile-sub-title>
        <span>Question count: </span>
        <span>{{ numberOfQuestions }}</span>
        <span> - </span>
        <span>{{ description.author }}</span>
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

    <v-btn
      v-else
      flat
      small
      fab
    >
      <v-icon small>fa-ellipsis-h</v-icon>
    </v-btn>
  </v-list-tile>
</template>

<script>
export default {
  name: 'QuestionsetDescription',
  props: {
    description: Object,
    isTitle: Boolean
  },
  computed:{
    numberOfQuestions: function(){
      return this.description.questions.length;
    }
  },
  data(){
    return{
      iconMap: {
      }
    }
  }
}
</script>

<style lang="css" scoped>
</style>
