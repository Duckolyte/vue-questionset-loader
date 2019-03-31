<template lang="html">
  <v-container grid-list-xs,sm,md,lg,xl>
    <v-stepper value="1" vertical>
      <v-stepper-step
        v-for="(state, index) in uploadStates"
        :step="index+1"
      >
        {{ state.label }}
      </v-stepper-step>
    </v-stepper>
  </v-container>
</template>

<script>
export default {

  name: 'UploadProgressStepper',
  data(){
    return {
      uploadStates: [
        {label: 'Drag and drop file'},
        {label: 'Verifying format'},
        {label: 'Parsing input'},
        {label: 'Upload done'}
      ]
    }
  },
  methods: {
    takeInput: () => {

    },
    verifyInput: () => {

    },
    parseInput: () => {

    },
  }

}
</script>

<style lang="css" scoped>
</style>
