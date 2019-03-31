<template lang="html">
  <v-bottom-nav
    :value="showNav"
    absolute
    color="transparent"
    app
  >

    <v-btn flat to="/questionset/overview">
      <span>Overview</span>
      <v-icon>fa-book</v-icon>
    </v-btn>

    <v-btn flat to="/questionset/add">
      <span>Import</span>
      <v-icon>fa-file-upload</v-icon>
    </v-btn>

    <v-btn flat to="/questionset/settings">
      <span>Settings</span>
      <v-icon>fa-cog</v-icon>
    </v-btn>

  </v-bottom-nav>
</template>

<script>
export default {
  name: 'QunTheFooter',
  data(){
    return {
      showNav: true,

    }
  }

}
</script>
