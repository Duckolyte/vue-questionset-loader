<template lang="html">
  <v-layout row wrap>
    <v-flex xs12>
      <qun-questionset-factory></qun-questionset-factory>
    </v-flex>
  </v-layout>
</template>

<script>
import QuestionsetFactory from '../components/add/QuestionsetFactory'

export default {
  name: 'QuestionsetEdit',
  components: {
    'qun-questionset-factory': QuestionsetFactory,
  }
}
</script>

<style lang="css" scoped>
</style>
