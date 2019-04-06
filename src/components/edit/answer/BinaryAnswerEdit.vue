<template lang="html">
  <v-layout row wrap>
    <v-flex xs12>
      <qun-base-answer-edit>
        <template v-slot:attributes>
          <!-- answer for binary question has no extra attributes -->
        </template>
      </qun-base-answer-edit>
    </v-flex>
  </v-layout>
</template>

<script>
import BaseAnswerEdit from './BaseAnswerEdit';
export default {
  name: 'BinaryAnswer',
  components: {
    'qun-base-answer-edit': BaseAnswerEdit,
  }
}
</script>

<style lang="css" scoped>
</style>
