<template lang="html">
  <v-container grid-list-xs,sm,md,lg,xl>
    <v-layout row wrap>
      <v-flex xs12>
        <h1 class="subheader font-weight-light">Questionset</h1>
        <v-toolbar
          color="primary"
        >
          <v-btn
            color="primary"
            depressed
            :to="{name: 'edit-questionset'}"
            fab
          >
            <v-icon small>fa-plus</v-icon>
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            depressed
            fab
          >
            <v-icon small>fa-save</v-icon>
          </v-btn>
          <v-btn
            color="primary"
            depressed
            fab
          >
            <v-icon small>fa-trash</v-icon>
          </v-btn>
        </v-toolbar>

        <qun-questionset-description
          v-if="questionset"
          :description="questionset"
        ></qun-questionset-description>
        <v-card
          v-else
        >
          <v-card-title primary-title>
            No questionset yet
          </v-card-title>
        </v-card>

        <h1 class="subheader font-weight-light pt-5">Questions</h1>
        <v-toolbar
          color="primary"
        >
          <v-btn
            color="primary"
            depressed
            fab
            :to="{name: 'edit-question'}"
          >
            <v-icon small>fa-plus</v-icon>
          </v-btn>
        </v-toolbar>

        <v-list
          two-line>
          <template
            v-if="questions"
            v-for="(question, index) in questionset.questions"
          >
            <qun-question-description
              :key="index"
              :description="question"
            ></qun-question-description>
            <v-divider>
            </v-divider>
          </template>
          <v-card
            v-else
          >
            <h1 class="headline">No question yet</h1>
          </v-card>
        </v-list>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import QuestionsetDescription from '../overview/QuestionsetDescription'
import QuestionDescription from '../overview/QuestionDescription'

export default {

  name: 'QuestionsetFactory',

  components: {
    'qun-questionset-description': QuestionsetDescription,
    'qun-question-description': QuestionDescription
  },

  data(){
    return {
      questionset: {
        title: 'testTile0',
        author: 'testAuthor0',
        type: 'diagnoses',
        questions: [
          {
            code: 0,
            label: 'This is a question code 0 label?',
            type: 'range',
            answers: [
              {
                code: 0,
                next: 1
              },
              {
                code: 1,
                next: 2
              },
            ],
          },
          {
            code: 1,
            label: 'This is a question code 1 label?',
            type: 'binary',
            answers: [
              {
                code: 0,
                next: 1
              },
              {
                code: 1,
                next: 2
              },
            ],
          },
          {
            code: 2,
            label: 'This is a question code 2 label?',
            type: 'range',
            answers: [
              {
                code: 0,
                next: 1
              },
              {
                code: 1,
                next: 2
              },
            ],
          },
        ]
      },
      questions: () =>{
        return this.questionset.questions;
      }
    }
  }
}
</script>

<style lang="css" scoped>
</style>
