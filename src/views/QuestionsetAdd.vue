<template lang="html">
  <v-layout row wrap>
    <v-flex sx12 md4>
      <h1 class="subheading">Add a Questionary</h1>
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
      <!-- <router-view name="editor"></router-view> -->
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
