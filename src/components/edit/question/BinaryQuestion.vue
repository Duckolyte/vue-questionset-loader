<template>
  <base-question>
    <template v-slot="type-attributes">
      <!-- binary question has no type specific additional attributes -->
    </template>
    <template v-slot="answers">
      <component
        :is="answerType"
      >
      </component>
    </template>
  </base-question>
</template>

<script>

import BaseQuestion from './BaseQuestion.vue';

export default
{
  name: 'BinaryQuestion',

  components: {
    'base-question': BaseQuestion,
  },

  data() {
    return {
      answerType: 'binary-Answer', // TODO make dynamic
    };
  },

  methods: {
  },
};

</script>

<style scoped>
</style>
