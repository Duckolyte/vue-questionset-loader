<template lang="html">
  <v-container grid-list-xs,sm,md,lg,xl>
    <v-layout row>
      <v-flex xs12>
        <v-card>
          <v-toolbar color="primary" dark>

            <v-toolbar-title class="font-weight-light">
              My Questionsets
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn icon>
              <v-icon small>fa-search</v-icon>
            </v-btn>
          </v-toolbar>

          <v-list two-line>
            <template
              v-for="(description, index) in questionsetDescriptions"
            >
              <qun-questionset-description
                :key="index"
                :description="description"
              ></qun-questionset-description>
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

export default {

  name: 'QuestionsetList',
  components: {
    'qun-questionset-description': QuestionsetDescription,
  },
  data(){
    return{
      questionsetDescriptions: [
        {
          title: 'testTile0',
          author: 'testAuthor0',
          type: 'diagnoses',
          questions: [
            {questionKey: 'questionsValue'},
            {questionKey: 'questionsValue'},
            {questionKey: 'questionsValue'},
          ]
        },
        {
          title: 'testTile1',
          author: 'testAuthor1',
          type: 'thermometer-half',
          questions: [
            {questionKey: 'questionsValue'},
          ]
        },
        {
          title: 'testTile2',
          author: 'testAuthor2VeeeeeryLoooooong',
          type: 'heartbeat',
          questions: [
            {questionKey: 'questionsValue'},
            {questionKey: 'questionsValue'},
          ]
        },
        {
          title: 'testTile3',
          author: 'testAuthor3',
          type: 'capsules',
          questions: [
          ]
        },
      ]
    }
  }

}
</script>

<style lang="css" scoped>
</style>
