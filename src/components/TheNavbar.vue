<template lang="html">
  <nav>
    <v-toolbar flat app color="primary">
      <v-toolbar-side-icon
        class="grey--text"
        @click="drawer = !drawer"
      >

      </v-toolbar-side-icon>
      <v-toolbar-title class="text-uppercase grey-text">
        <span class="font-weight-light">{{ apiName }}</span>
        <span>{{ appTitle }}</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>

    <v-navigation-drawer
      v-model="drawer"
      app
      color="primary"
    >
      <p>test</p>
    </v-navigation-drawer>

  </nav>
</template>

<script>
export default {
  name: 'QunTheNavbar',
  data(){
    return {
      appTitle: 'Loader',
      apiName: 'Questionset',
      drawer: false
    }
  }

}
</script>

<style lang="css" scoped>
</style>
