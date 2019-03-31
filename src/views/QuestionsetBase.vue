<template lang="html">
  <v-layout
    row
    wrap
    align-content-space-around
  >
    <v-flex
      hidden-sm-and-down
      xs1
    >
      <v-layout
        row
        justify-start
      >
        <v-icon class="swipe-chevron">
          fa-chevron-left
        </v-icon>
      </v-layout>
    </v-flex>
    <v-flex
      xs12 md10
    >
      <router-view></router-view>
    </v-flex>
    <v-flex
      xs1
      hidden-sm-and-down
    >
      <v-layout row justify-end>
        <v-icon>
          fa-chevron-right
        </v-icon>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>

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

.swipe-chevron{

}

.swipe-chevron:hover{

}

</style>
