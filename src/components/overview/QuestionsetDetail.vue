<template lang="html">
  <v-container grid-list-xs,sm,md,lg,xl>
    <v-layout row>
      <v-flex xs12>
        <v-card>
          <v-toolbar color="primary" dark>

            <v-toolbar-title class="font-weight-light">
              {{ questionset.title }}
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn icon>
              <v-icon small>fa-search</v-icon>
            </v-btn>
          </v-toolbar>

          <v-list two-line>
            <template
              v-for="(description, index) in questionsetDescriptions"
            >
              <qun-questionset-description
                :key="index"
                :description="description"
              ></qun-questionset-description>
              <v-divider>
              </v-divider>
            </template>
          </v-list>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'name',
  data(){
    return{
      // TODO
      // use $store.state.overviewContext.selectedSet instead of the dummy
      // set selectedSet in QuestionsetDescription
      // questionset = $store.state.overviewContext.selectedSet;
      questionset: function() {
        return items = [
          { header: 'Today' },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
            title: 'Brunch this weekend?',
            subtitle: "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
          },
          { divider: true, inset: true },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
            title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
            subtitle: "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend."
          },
          { divider: true, inset: true },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
            title: 'Oui oui',
            subtitle: "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?"
          }
        ]
      }
    }
  },
}
</script>

<style lang="css" scoped>
</style>
