<template lang="html">
    <div>
      <qun-the-navbar></qun-the-navbar>
      <v-content>
        <v-layout row wrap>
          <v-flex>
            <div id="swipe-left">

            </div>
          </v-flex>
          <v-flex>
            <router-link :name="currentView"></router-link>
          </v-flex>
          <v-flex>
            <div id="swipe-right">

            </div>
          </v-flex>
        </v-layout>
      </v-content>
      <qun-the-footer></qun-the-footer>
    </div>
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
