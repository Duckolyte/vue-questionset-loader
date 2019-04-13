<template lang="html">
  <v-container grid-list-xs,sm,md,lg,xl>
    <v-layout row>
      <v-flex xs12>
        <v-card>
          <v-card>
            <v-layout
              column
              fill-height
            >
              <qun-questionset-description
                :questionset="questionset"
                :isTitle="true"
              >
              </qun-questionset-description>
            </v-layout>
          </v-card>

          <v-list two-line>
            <template
              v-for="(question, index) in questionset.questions"
            >
              <qun-question-description
                :key="index"
                :description="question"
              ></qun-question-description>
              <v-divider>
              </v-divider>
            </template>
          </v-list>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import QuestionsetDescription from './QuestionsetDescription'
import QuestionDescription from './QuestionDescription'

export default {
  name: 'name',
  components: {
    'qun-questionset-description': QuestionsetDescription,
    'qun-question-description': QuestionDescription
  },
  data(){
    return{
      // TODO
      // use $store.state.overviewContext.selectedSet instead of the dummy
      // set selectedSet in QuestionsetDescription
      // questionset = $store.state.overviewContext.selectedSet;
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
    }
  },
}
</script>

<style lang="css" scoped>
</style>
