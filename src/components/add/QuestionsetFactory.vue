<template lang="html">
  <v-container grid-list-xs,sm,md,lg,xl>
    <v-layout row wrap>
      <v-flex xs12>
        <h1 class="headline font-weight-light pb-3">New Questionset</h1>
        <v-toolbar
          color="primary"
        >
          <v-btn
            color="primary"
            depressed
          >
            <v-icon small left>fa-plus</v-icon>
            <span>Create</span>
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            depressed
          >
            <v-icon small left>fa-save</v-icon>
            <span>Save</span>
          </v-btn>
          <v-btn
            color="primary"
            depressed
          >
            <v-icon small left>fa-trash</v-icon>
            <span>Delete</span>
          </v-btn>
        </v-toolbar>
        <qun-questionset-detail-edit></qun-questionset-detail-edit>

        <h1 class="headline"></h1>
        <v-toolbar color="primary">
          <v-btn
            color="primary"
            depressed
          >
            <v-icon small left>fa-plus</v-icon>
            <span>Create</span>
          </v-btn>
        </v-toolbar>
        <qun-question-detail-edit></qun-question-detail-edit>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import QuestionsetDetailEdit from '../edit/QuestionsetDetailEdit'
import QuestionDetailEdit from '../edit/QuestionDetailEdit'

export default {
  name: 'QuestionsetFactory',
  components: {
    'qun-questionset-detail-edit': QuestionsetDetailEdit,
     'qun-question-detail-edit': QuestionDetailEdit,
  },
}
</script>

<style lang="css" scoped>
</style>
