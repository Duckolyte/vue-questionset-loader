<template lang="html">
  <v-list-tile
    :key="description.label"
    avatar
    @click=""
  >
    <v-list-tile-avatar>
      <v-icon>fa-question</v-icon>
    </v-list-tile-avatar>

    <v-list-tile-content>
      <v-list-tile-title>
        <span>{{ description.label }}</span>
      </v-list-tile-title>
      <v-list-tile-sub-title>
        <span>Question type: </span>
        <span>{{ description.type }}</span>
        <span>{{ description.references }}</span>
      </v-list-tile-sub-title>
    </v-list-tile-content>

    <v-btn
      flat
      small
      fab
    >
      <v-icon small>fa-ellipsis-h</v-icon>
    </v-btn>
  </v-list-tile>
</template>

<script>
export default {
  name: 'QuestionDescription',
  props: {
    description: Object,
  },
}
</script>

<style lang="css" scoped>
</style>
