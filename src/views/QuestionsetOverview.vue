<template lang="html">

  <v-layout row wrap>
    <v-flex xs12>
      <h1 class="subheading">Questionary Overview</h1>
    </v-flex>
    <v-flex sx12 md4>
      <router-view></router-view>
    </v-flex>
    <v-flex
      md8
      class="hidden-sm-and-down"
    >
      <router-view name="setdetail"></router-view>
    </v-flex>
  </v-layout>

</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
</style>
