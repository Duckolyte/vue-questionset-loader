<template lang="html">

  <!--
  <qun-file-drag-and-drop></qun-file-drag-and-drop>
  <qun-upload-progress-stepper></qun-upload-progress-stepper>
  -->
  <div>
    <h1>hello</h1>
    <router-view></router-view>
    <router-view name="progress"></router-view>
  </div>

</template>

<script>

export default {
  name: 'QuestionsetCreate',
  data(){
    return{}
  }
}
</script>

<style lang="css" scoped>
</style>
