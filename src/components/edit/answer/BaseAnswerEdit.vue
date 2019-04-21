<template lang="html">
  <v-form
    ref="form"
  >
    
    <template v-slot="attributes">
    </template>

    <v-select
      v-model="answer.selectedNext"
      :items="nextQuestions"
      :rules="[v => !!v || 'Item is required']"
      label="Leads to question..."
      required
    ></v-select>

        <v-btn
      color="primary"
      @click="postForm"
    >
      {{ buttonLabel }}
    </v-btn>


  </v-form>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  name: 'BaseAnswerEdit',

  computed: {
    ...mapGetters({
      nextQuestions: 'allQuestionsFromSetInUseExceptQuestionInUse',
    }),

    buttonLabel() {
      return this.formMode == 'post' ? 'Create' : 'Update';
    }
  },

  data() {
    return {
      formMode: 'post',
      formContext: null,
      answer: {
        selectedNext: null
      },
    }
  },

  methods: {
    postForm() {

    },
  },

  created() {
    const self = this;

    const routerParams = this.$route.params;

    if(routerParams.id != 0)
    {
      this.formMode = 'update';
      this.formContext = routerParams;

      const webService =
        this.$store.state.application.questionsetWebService;

      fetch(
        `${webService.url}${webService.api}`+
        `${webService.resources.answer}/${routerParams.id}`,
        webService.methods.get
      )
      .then(response => {
        response.text().then(
          jsonResponse => {
            try{
              self.question = JSON.parse(jsonResponse);
            }
            catch(error){
              console.log(error);
            }
          }
        )
      })
      .catch(error => {
        // TODO handle error
        console.log(error);
      })
    }
  },
}
</script>

<style lang="css" scoped>
</style>
