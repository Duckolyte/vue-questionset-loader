<template lang="html">
  <v-layout row wrap>
    <v-flex xs12>
      <slot name="typeAttributes"></slot>
    </v-flex>
    <v-flex xs12>
      <slot name="typeAnswers"></slot>
    </v-flex>
  </v-layout>
</template>

<script>

export default {
  name: 'BaseQuestion',

  components: {
  },

  data(){
    return{

    }
  },
}
</script>

<style lang="css" scoped>
</style>
