<template lang="html">

  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="questionLabel"
      :counter="10"
      :rules="labelRules"
      label="Question"
      required
    ></v-text-field>

    <v-select
      v-model="selectedType"
      :items="items"
      :rules="[v => !!v || 'Item is required']"
      label="Type"
      required
    ></v-select>

    <v-container
      grid-list-xs,sm,md,lg,xl
    >
      <v-layout row wrap>
        <v-flex xs12>
          <v-card
            v-if="selectedItem"
          >
            <!--
            <qun-base-type-question
              :name="selectedType"
            ></qun-base-type-question>
           -->
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

  </v-form>
</template>

<script>
// TODO import BaseTypeQuestion from './BaseTypeQuestion'

export default {
  name: 'QuestionDetailEdit',
}
</script>

<style lang="css" scoped>
</style>
