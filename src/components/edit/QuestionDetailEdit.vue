<template lang="html">

  <v-form
    ref="form"
  >
    <h1 class="heading font-weight-light">Edit Question</h1>
    <v-text-field
      v-model="question.label"
      :counter="128"
      label="Question"
      required
    ></v-text-field>

    <v-select
      v-model="question.type"
      :items="items"
      :rules="[v => !!v || 'Item is required']"
      label="Type"
      required
    ></v-select>

    <v-layout row wrap>
      <v-flex
        xs12
        v-if="selectedType"
      >
        <component
          :is="question.type"
        ></component>
      </v-flex>
    </v-layout>

    <v-btn
      color="primary"
      @click="postForm"
    >
      {{ buttonLabel }}
    </v-btn>

  </v-form>
</template>

<script>
//import InputQuestion from '../components/question/InputQuestion.vue';
//import RadioQuestion from '../components/question/RadioQuestion.vue';
//import SliderQuestion from '../components/question/SliderQuestion.vue';
import BinaryQuestion from './question/BinaryQuestion.vue';

export default {

  name: 'QuestionDetailEdit',

  components:
  {
    /*
    'input-question': InputQuestion,
    'radio-question': RadioQuestion,
    'slider-question': SliderQuestion,
    */
    'binary-question': BinaryQuestion,
  },

  computed: {
    buttonLabel() {
      return this.formMode == 'post' ? 'Create' : 'Update';
    }
  },

  data() {
    return {
      selectedType: null,

      formMode: 'post',

      formContext: null,

      question: {
        label: "",
        type: "",
      },
      items: [
        'binary-question'
      ]
    }
  },

  methods: {
    postForm() {
      const self = this;
      const webService = this.$store.state.application.questionsetWebService;

      let urlId = ``;
      if (this.formMode == 'update') {
        urlId = this.formContext.id;
      }

      fetch(
        `${webService.url}${webService.api}`+
        `${webService.resources.question}/${urlId}`,
        webService.methods[this.formMode](
          JSON.stringify(this.question)
        )
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
        ).then(() => {
          const setId =
            self.$store.state.application.context.inUseQuestionset._id;
          self.$store.dispatch(
            'updateQuestionsetWithQuestion',
            {
              id: setId,
              question: self.question,
              method: `${self.formMode}QuestionInQuestionset`
            }
          )
          // TODO this should be called as a callback .then() function
          // and action should return a promise
          self.$router.push({name: 'overview'})
        })
        .catch(error => {
          // TODO handle error
          console.log(error);
        })
      })
      .catch(error => {
        // TODO handle error
        console.log(error);
      })
    }
  },

  created(){
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
        `${webService.resources.question}/${routerParams.id}`,
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
