<template lang="html">
  <v-layout row wrap>
    <v-flex xs12>
      <slot name="type-attributes"></slot>
    </v-flex>
    <v-flex xs12>
      <h1 class="subheader font-weight-light pt-3">Answers</h1>
      <div>
        <v-btn color="primary" small fab>
          <v-icon small>fa-plus</v-icon>
        </v-btn>
      </div>
      <v-card>
        <slot name="answers"></slot>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'BaseQuestion',
  data(){
    return{

    }
  },
}
</script>

<style lang="css" scoped>
</style>
