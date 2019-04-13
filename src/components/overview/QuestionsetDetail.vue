<template lang="html">
  <v-container grid-list-xs,sm,md,lg,xl>
    <v-layout row>
      <v-flex xs12>
        <v-card>
          <template
            v-if="questionset"
          >
            <v-card class="pb-3">
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
              <v-btn
                fab
                dark
                small
                color="secondary"
                absolute
                bottom
                left
                :to="{name: 'edit-question', params: {id: 0}}"
              >
                <v-icon dark>fa-plus</v-icon>
              </v-btn>
            </v-card>
          </template>
        </v-card>

        <template
          v-if="questionset"
        >
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
        </template>
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

  computed: {
    questionset() {
      const appContext = this.$store.state.application.context
      if(appContext.inUseQuestionset){
        return appContext.inUseQuestionset;
      }
      else
      {
        if (appContext.allQuestionsets) {
          return appContext.allQuestionsets[0]
        }
      }
      return null;
    }
  },

  data(){
    return{
    }
  },

}
</script>

<style lang="css" scoped>
</style>
