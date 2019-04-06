<template lang="html">

  <v-form
    ref="form"
  >
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

  data() {
    return {
      selectedType: null,
      question: {
        label: "",
        type: "",
      },
      items: [
        'binary-question'
      ]
    }
  }
}
</script>

<style lang="css" scoped>
</style>
