<template>
  <v-app>

    <qun-the-navbar></qun-the-navbar>
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
      <!--
      <v-layout row wrap>
        <v-flex>
          <div id="swipe-left">
            <v-icon large>iconName</v-icon>
          </div>
        </v-flex>
        <v-flex>
          <router-view name="testroute"></router-view>
        </v-flex>
        <v-flex>
          <div id="swipe-right">
            <v-icon>iconName</v-icon>
          </div>
        </v-flex>
      </v-layout>-->
      <!-- <router-view name="progress"></router-view> -->
    </v-content>
    <qun-the-footer></qun-the-footer>

    <!--<router-link name="base"></router-link>-->
  </v-app>
</template>

<script>

import TheNavbar from './components/TheNavbar'
import TheFooter from './components/TheFooter'

export default {
  components: {
    'qun-the-navbar': TheNavbar,
    'qun-the-footer': TheFooter,
  },
}
</script>
