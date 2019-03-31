<template lang="html">
  <v-bottom-nav
    :value="showNav"
    absolute
    color="transparent"
  >

    <v-btn flat to="/">
      <span>Overview</span>
      <v-icon>fa4-book</v-icon>
    </v-btn>

    <v-btn flat to="/file-upload">
      <span>Import</span>
      <v-icon>fa4-file-upload</v-icon>
    </v-btn>

    <v-btn flat to="/settings">
      <span>Settings</span>
      <v-icon>fa4-cog</v-icon>
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
