<template lang="html">
  <v-layout row wrap>
    <v-flex xs12>
      <h1 class="subheading">Add a Questionset</h1>
    </v-flex>
    <v-flex sx12 md4>
      <v-container
        grid-xs,sm,md,lg,xl
        class="hidden-md-and-up"
      >
        <v-btn
          block
          color="grey--text"
          :to="{name: 'editor'}"
        >
          <v-icon left small>fa-plus</v-icon>
          <span>Create new in editor</span>
        </v-btn>
      </v-container>
      <router-view></router-view>
      <router-view name="progress"></router-view>
    </v-flex>
    <v-flex
      md8
      class="hidden-sm-and-down"
    >
      <router-view name="edit"></router-view>
    </v-flex>
  </v-layout>

</template>

<script>

export default {
  name: 'QuestionsetAdd',
  computed: {
  },
  data(){
    return{
    }
  },
}
</script>

<style lang="css" scoped>
</style>
