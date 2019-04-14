<template lang="html">
  <v-container grid-list-xs,sm,md,lg,xl>
    <v-layout row>
      <v-flex xs12>
        <v-card extended>
          <v-toolbar color="primary pb-3">
            <v-toolbar-title class="font-weight-light">
              My Questionsets
            </v-toolbar-title>

            <v-spacer></v-spacer>
            <!--
            <v-text-field
              small
              label="Search"
              append-icon="search"
            ></v-text-field>
            -->
            <v-icon small>fa-search</v-icon>
          </v-toolbar>

          <v-btn
            fab
            small
            icon
            color="secondary"
            bottom
            left
            absolute
            :to="{name: 'edit-questionset', params: {id: 0}}"
          >
            <v-icon>fa-plus</v-icon>
          </v-btn>
        </v-card>

        <v-list two-line>
          <template
            v-for="(questionset, index) in questionsetDescriptions"
          >
            <qun-questionset-description
              :key="index"
              :questionset="questionset"
              :isTitle="false"
            ></qun-questionset-description>
            <v-divider>
            </v-divider>
          </template>
        </v-list>

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

  computed: {
    questionsetDescriptions() {
      return this.$store.state.application.context.allQuestionsets;
    }
  },

  data(){
    return {
    }
  },

  created() {

    const self = this;

    const webServiceConfig = this.$store.state.application.questionsetWebService;
    fetch(
      `${webServiceConfig.url}${webServiceConfig.api}` +
      `${webServiceConfig.resources.questionaries}`,
      this.$store.state.application.questionsetWebService.methods.get
    )
    .then(response => {
      response.text().then((jsonResponse) => {
        try{
          const allQuestionsets = JSON.parse(jsonResponse);
          const appContext = self.$store.state.application.context;

          appContext.allQuestionsets = allQuestionsets;
          if (allQuestionsets.length) {
              appContext.inUseQuestionset = allQuestionsets[0];
          }
        }
        catch(error){
          console.log(error);
        }
      });
    })
    .catch(error => {
      // TODO handle error
    })

  },
}
</script>

<style lang="css" scoped>
</style>
