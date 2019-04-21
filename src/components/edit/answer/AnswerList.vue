<template lang="html">
  <v-layout row wrap>
    <v-flex xs12>
      <v-list v-if="answers.length" two-line>
        <template
          v-for="answer in answers"
        >
          <qun-answer-description
            :answer="answer"
            :isTitle="false"
          >
          </qun-answer-description>
          <v-divider></v-divider>
        </template>
      </v-list>
    </v-flex>
  </v-layout>
</template>

<script>
import AnswerDescrition from './AnswerDescription'

export default {
  name: 'AnswerList',

  components: {
    'qun-answer-description': AnswerDescrition,
  },

  props: {
    answers: Array,
  },

  data(){
    return {
    }
  }
}
</script>

<style lang="css" scoped>
</style>
