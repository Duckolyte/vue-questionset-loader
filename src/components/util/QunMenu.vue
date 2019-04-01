<template lang="html">
  <v-menu open-on-hover offset-y>
    <template v-slot:activator="{ on }">
      <v-btn flat small fab v-on="on">
        <v-icon small>fa-ellipsis-h</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-list>
        <v-list-tile
          v-for="(item, index) in menuItems"
          :key="index"
          @click=""
        >
          <v-list-tile-avatar>
            <v-icon fab right small>fa-{{item.icon}}</v-icon>
          </v-list-tile-avatar>
          <v-list-tile-title small>{{ item.title }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-card>
  </v-menu>
</template>

<script>
export default {
  name: 'QunMenu',
  props: {
    menuItems: Array,
  },
}
</script>

<style lang="css" scoped>
</style>
