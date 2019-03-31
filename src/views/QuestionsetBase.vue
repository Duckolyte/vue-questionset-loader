<template lang="html">
  <v-layout row wrap>
    <v-flex
      hidden-md-and-up
      xs1
    >
      <div id="swipe-left">

      </div>
    </v-flex>
    <v-flex
      xs12 md10
    >
      <router-view></router-view>
    </v-flex>
    <v-flex
      xs1
      hidden-md-and-up
    >
      <div id="swipe-right">

      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import QunTheNavbar from '../components/TheNavbar'
import QunTheFooter from '../components/TheFooter'

export default {
  name: 'QunQuestionsetBase',
  currentView: 'create',
  routeTo: {
    name: 'overview',
    params: {},
  }
}
</script>

<style lang="css" scoped>
</style>
