<template lang="html">
  <v-form
    ref="form"
  >
    <v-text-field
      v-model="answer.label"
      :counter="10"
      label="Label"
      required
    ></v-text-field>

    <v-select
      v-model="answer.selectedNext"
      :items="items"
      :rules="[v => !!v || 'Item is required']"
      label="Leads to question..."
      required
    ></v-select>

    <template v-slot="attributes">
    </template>

  </v-form>
</template>

<script>
export default {
  name: 'BaseAnswerEdit',
  data() {
    return {
      answer: {
        label: "",
        selectedNext: "",
      },
      items: [
        'dummy question 0',
        'dummy question 1',
        'dummy question 2'
      ]
    }
  }
}
</script>

<style lang="css" scoped>
</style>
