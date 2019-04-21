<template>
  <base-question>
    <template v-slot:typeAttributes>
      <!-- no additional attributes for binary question required-->
    </template>
    <template v-slot:typeAnswers>
      <v-card class="mb-5">
        <v-card-title primary-title >
          <div>
            <v-btn absolute bottom left fab dark small color="secondary"
              :to="{name: 'edit-answer', params: {id: question._id || 0}}"
            >
              <v-icon dark>fa-plus</v-icon>
            </v-btn>
            <h3 class="subheader font-weight-light mb-2">Answer Yes</h3>
            <div v-if="question.answers && question.answers.length > 0">
              <v-list two-line>
                <qun-answer-description
                  :answer="question.answers[0]"
                  :isTitle="false"
                >
                </qun-answer-description>
              </v-list>
            </div>
          </div>
        </v-card-title>
      </v-card>
      <v-card class="mb-5">
        <v-card-title primary-title>
          <div>
            <v-btn absolute bottom left fab dark small color="secondary"
              :to="{name: 'edit-answer', params: {id: question._id || 0}}"
            >
              <v-icon dark>fa-plus</v-icon>
            </v-btn>
            <h3 class="subheader font-weight-light mb-2">Answer No</h3>
            <div v-if="question.answers && question.answers.length > 1">
              <v-list two-line>
                <qun-answer-description
                  :answer="question.answers[1]"
                  :isTitle="false"
                >
                </qun-answer-description>
              </v-list>
            </div>
          </div>
        </v-card-title>
      </v-card>
    </template>
  </base-question>
</template>

<script>

import BaseQuestion from './BaseQuestion.vue'
import AnswerDescription from '../answer/AnswerDescription.vue'

export default
{
  name: 'BinaryQuestion',

  components: {
    'base-question': BaseQuestion,
    'qun-answer-description': AnswerDescription, 
  },

  props: {
    question: Object,
  },
};

</script>

<style scoped>
</style>
