<template>
  <base-question>
    <div slot="form-header">
      <h3 class="headline">{{question.label}}</h3>
    </div>
    <div slot="form-fields">
      <v-layout column align-center>
        <v-flex xs-12>
          <div style="position: relative; overflow: hidden;">
            <v-toolbar
              color="primary"
              dark
              scroll-off-screen
              scroll-target="#scrolling-techniques"
            >
              <v-toolbar-title>Answers</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-btn icon>
                <v-icon>search</v-icon>
              </v-btn>

              <v-btn 
                absolute 
                bottom 
                left 
                fab 
                dark 
                small 
                color="secondary"
                :to="{name: 'edit-answer', params: {id: 0}}"
              >
                <v-icon dark>fa-plus</v-icon>
              </v-btn>
            
            </v-toolbar>
            
            <div
              style="max-height: 600px; min-height: 100px;"
              class="scroll-y"
              id="scrolling-techniques"
            >
                <answer-list
                  :answers="question.answers"
                ></answer-list>
            </div>
          </div>

          <!-- <v-radio-group color="secondary">
            <v-radio
            v-for="answer in question.answers"
            :key="answer.code"
            :label="answer.label"
            :value="answer.label"
            @click="submitQuestion(question, answer)"
            ></v-radio>
          </v-radio-group> -->
        </v-flex>
      </v-layout>
    </div>
    <div slot="form-controls">
      <!-- OBSOLETE
      <button
        type="button"
        name="button"
      >
        Weiter
      </button>
      -->
    </div>
    <div slot="form-footer">
    </div>
  </base-question>
</template>

<script>

import { bus } from '../../main';

import BaseQuestion from './BaseQuestion.vue';

export default
{
  props: {
    question: {
      type: Object,
    },
  },
  components: {
    'base-question': BaseQuestion,
  },
  data() {
    return {

    };
  },
  computed: {
  },
  methods: {
    storeAnswer(question, answer) {
      const givenAnswer = new this.$_qap.QuestionAnswerPair(question, answer);
      bus.$emit('storeAnswer', givenAnswer);
    },
    nextQuestion(next) {
      bus.$emit('nextQuestion', next);
    },
    submitQuestion(question, answer) {
      this.storeAnswer(question, answer);
      // this.nextQuestion(answer.next);
    },
  },
};

</script>

<style scoped>
</style>
