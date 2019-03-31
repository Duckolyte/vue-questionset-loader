<template>
  <v-app>
    <qun-the-navbar></qun-the-navbar>
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
    <qun-the-footer></qun-the-footer>
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
