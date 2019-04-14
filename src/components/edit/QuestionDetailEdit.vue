<template lang="html">

  <v-form
    ref="form"
  >
    <h1 class="heading font-weight-light">Edit Question</h1>
    <v-text-field
      v-model="questionLabel"
      :counter="10"
      :rules="labelRules"
      label="Question"
      required
    ></v-text-field>

    <v-select
      v-model="selectedType"
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
          :is="selectedType"
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
      const webServiceConfig = this.$store.state.application.questionsetWebService;

      fetch(
        `${webServiceConfig.url}${webServiceConfig.api}` +
        `${webServiceConfig.resources.questionaries}`,
        webServiceConfig.methods[this.formMode](
          JSON.stringify(this.questionsetDetail)
        )
      )
      .then(response => {
        response.text().then((jsonResponse) => {
          try{
            self.$store.state.application.context.inUseQuestionset = JSON.parse(jsonResponse);
          }
          catch(error){
            console.log(error);
          }
        });
      })
      .then(() => {
        self.$router.push({name: 'overview'})
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
        `${webService.resources.questionaries}/${routerParams.id}`,
        webService.methods.get
      )
      .then(response => {
        response.text().then(
          jsonResponse => {
            try{
              self.questionsetDetail = JSON.parse(jsonResponse);
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
