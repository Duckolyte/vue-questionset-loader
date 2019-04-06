<template lang="html">
  <v-layout row wrap>
    <v-flex xs12>
      <v-list two-line>
        <template
          v-if="answers"
          v-for="answer in answers"
        >
          <qun-answer-description
            :answer="answer"
          >
          </qun-answer-description>
          <v-divider></v-divider>
        </template>
        <v-list-tile avatar v-else>
          <v-list-tile-avatar>
            <v-icon>fa-error</v-icon>
          </v-list-tile-avatar>
          <v-list-tile-title>
            No answers yet
          </v-list-tile-title>
        </v-list-tile>
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
  data(){
    return {
      answers: [
          {
            label: 'deafult answer 0',
            next: 'default question 0'
          },
          {
            label: 'deafult answer 1',
            next: 'default question 1'
          },
          {
            label: 'deafult answer 2',
            next: 'default question 2'
          },
          {
            label: 'deafult answer 3',
            next: 'default question 3'
          },
          {
            label: 'deafult answer 4',
            next: 'default question 4'
          }
      ]
    }
  }
}
</script>

<style lang="css" scoped>
</style>
