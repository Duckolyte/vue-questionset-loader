<template lang="html">
  <v-container grid-list-xs,sm,md,lg,xl>
    <v-card
      class="drag-n-drop-container"
    >
      <v-card-text
        class="text-xs-center"
      >
        <v-icon
          x-large
        >
          fa-angle-double-down
        </v-icon>
        <div>Drag and drop a file</div>
        <div class="font-weight-light">
          <span>or chose from the </span>
          <a href="#">file explorer</a>
        </div>
      </v-card-text>
    </v-card>
  </v-flex>
</v-layout>
  </v-container>
</template>

<script>
export default {

  name: 'FileDragAndDrop',
  data(){
    return{

    }
  },
  methods: {

  }

}
</script>

<style lang="css" scoped>

.drag-n-drop-container{
  background-color: #FFF;
  border-radius: 3px;
  border-style: dashed;
  border-width: medium;
  border-color: #DDD;
}

.bouncing{

}

</style>
