<template lang="html">
  <div>
    <h1 class="font-weight-light">Answer</h1>
    <component
    :is="selectedEdit"
    ></component>
  </div>
</template>

<script>
import BinaryAnswerEdit from './answer/BinaryAnswerEdit'
//... more specifc answer edit implementations

export default {
  name: 'AnswerDetailEdit',
  components: {
    'qun-binary-answer-edit': BinaryAnswerEdit,
  },
  data(){
    return{
      selectedEdit: 'qun-binary-answer-edit'
    }
  }
}
</script>

<style lang="css" scoped>
</style>
