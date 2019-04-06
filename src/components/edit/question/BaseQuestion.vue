<template lang="html">
  <v-layout row wrap>
    <v-flex xs12>
      <slot name="type-attributes"></slot>
    </v-flex>
    <v-flex xs12>
      <h1 class="subheading font-weight-light pt-3">Answers</h1>
      <span class="pl-2">
        <v-btn
          color="primary"
          small
          fab
          right
          :to="{name: 'edit-answer'}"
        >
          <v-icon small>fa-plus</v-icon>
        </v-btn>
      </span>

      <qun-answer-list></qun-answer-list>
    </v-flex>
  </v-layout>
</template>

<script>
import AnswerList from '../answer/AnswerList'

export default {
  name: 'BaseQuestion',
  components: {
    'qun-answer-list': AnswerList,
  },
  data(){
    return{

    }
  },
}
</script>

<style lang="css" scoped>
</style>
