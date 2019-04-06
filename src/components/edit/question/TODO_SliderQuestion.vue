<template>
  <base-question>
    <div slot="form-header">
      <h3>{{question.label}}</h3>
    </div>
    <div slot="form-fields">
      <v-layout
        justify-space-between
        mb-3
      >
        <v-flex text-xs-left>
          <span
            class="display-3 font-weight-light"
            v-text="questionValue"
          ></span>
          <span class="subheading font-weight-light ml-1">Score</span>
          <v-fade-transition>
            <v-avatar
              src=""
              class="mb-1 v-avatar--metronome"
              size="12"
            ></v-avatar>
          </v-fade-transition>
        </v-flex>
        <v-flex text-xs-right>
          <v-btn
            color="secondary"
            dark
            depressed
            fab
            @click=""
          >
            <v-icon
              :color="questionColor"
              large
            >
              {{ painRelatedSmiley }}
            </v-icon>
          </v-btn>
        </v-flex>
      </v-layout>
      <v-slider
        :min="questionMin"
        :max="questionMax"
        :step="questionStep"
        name="questionRange"
        ticks
        thumb-color="primary"
        v-model="question.answers[0].value"
        @change="submitQuestion(question, question.answers[0])"
      >
      </v-slider>
    </div>
    <div slot="form-controls">
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
      painRelatedSmilies: [
        'mdi-emoticon-outline',
        'mdi-emoticon-happy-outline',
        'mdi-emoticon-neutral-outline',
        'mdi-emoticon-cry-outline',
        'mdi-emoticon-dead-outline'
      ],
    };
  },
  computed: {
    painRelatedSmiley: function () {
      const intervalPerSmiley = (this.questionMax - this.questionMin) /
        this.painRelatedSmilies.length;
      for (let key in this.painRelatedSmilies)
      {
          if (
            (intervalPerSmiley * parseInt(key)) <= this.questionValue &&
            (intervalPerSmiley * (parseInt(key) + 1)) > this.questionValue
          )
          {
              return this.painRelatedSmilies[key]
          }
      }
      return this.painRelatedSmilies[this.painRelatedSmilies.length-1]
    },
    questionMin: function () {
      return this.question.answers[0].min_range;
    },
    questionMax: function () {
      return this.question.answers[0].max_range;
    },
    questionStep: function () {
      return this.question.answers[0].step;
    },
    questionValue: function () {
      return this.question.answers[0].value;
    },
    questionColor: function () {
      // red part grows when value < range half -> turns from green to yellow
      let partRed = this.questionValue < Math.round(this.questionMax / 2)
        ? (255-(255-this.currentRgbDecimal())).toString(16)
        : (255).toString(16);
      // green part shrinks when value > range half -> turns from yellow to red
      let partGreen = this.questionValue > Math.round(this.questionMax / 2)
        ? (255-this.currentRgbDecimal()).toString(16)
        : (255).toString(16);
      return `#${partRed}${partGreen}00`;
    },
    /*
    questionRangeLabels: function () {
      let start = this.questionMin;
      let stop = this.questionMax;
      let step = this.questionStep;
      if (typeof stop == 'undefined') {
        // one param defined
        stop = start;
        start = 0;
      }

      if (typeof step == 'undefined') {
        step = 1;
      }

      if ((step > 0 && start >= stop) || (step < 0 && start <= stop)) {
        return [];
      }

      var result = [];
      for (var i = start; step > 0 ? i < stop : i > stop; i += step) {
        result.push(i.toString());
      }

      return result;
    },
    */
  },
  methods: {
    currentRgbDecimal() {
      return Math.round(255 / this.questionMax * this.question.answers[0].value);
    },
    storeAnswer(question, answer) {
      const givenAnswer = new this.$_qap.QuestionAnswerPair(question, answer);
      bus.$emit('storeAnswer', givenAnswer);
    },
    nextQuestion(next) {
      bus.$emit('nextQuestion', next);
    },
    submitQuestion(question, answer) {
      this.storeAnswer(question, answer);
      this.nextQuestion(answer.next);
    },
  },
};

</script>

<style scoped>
</style>
