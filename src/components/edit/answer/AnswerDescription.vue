<template lang="html">
  <v-layout row wrap>
    <v-flex xs12>
      <v-list-tile avatar>
        <v-list-tile-avatar>
          <v-icon>fa-reply</v-icon>
        </v-list-tile-avatar>

        <v-list-tile-content>
          <v-list-tile-title>
            <span>{{ answer.label }}</span>
          </v-list-tile-title>
          <v-list-tile-sub-title>
            <span>Redirects to: </span>
            <span>{{ answer.next }}</span>
          </v-list-tile-sub-title>
        </v-list-tile-content>

        <template
          v-if="isTitle"
        >
          <v-btn flat small fab>
            <v-icon small>fa-edit</v-icon>
          </v-btn>
          <v-btn flat small fab>
            <v-icon small>fa-trash</v-icon>
          </v-btn>
        </template>

        <qun-menu
          v-else
          :menuItems="menuItems"
        >
        </qun-menu>
      </v-list-tile>
    </v-flex>
  </v-layout>
</template>

<script>
import QunMenu from '../../util/QunMenu'

export default {
  name: 'AnswerList',
  components: {
    'qun-menu': QunMenu,
  },
  data(){
    return {
      answer: {
        label: 'default',
        next: 'default next',
      }
    }
  }
}
</script>

<style lang="css" scoped>
</style>
