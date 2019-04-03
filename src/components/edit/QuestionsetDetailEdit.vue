<template lang="html">
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="questionsetDetail.title"
      v-validate="'required|max:10'"
      :counter="10"
      :rules="titleRules"
      label="Title"
      required
    ></v-text-field>

    <v-text-field
      v-model="questionsetDetail.author"
      v-validate="'required|author'"
      label="Author"
      required
    ></v-text-field>

    <v-select
      v-model="questionsetDetail.type"
      v-validate="'required'"
      :items="types"
      :rules="[type => !!type || 'Type is required']"
      label="Type"
      required
    ></v-select>

  </v-form>
</template>

<script>
export default {

  $_veeValidate: {
      validator: 'new'
    },

  name: 'QuestionsetDetailEdit',
  props: {
      questionset: Object,
  },
  data(){
    return{
      questionsetDetail: {
        title: '',
        author: '',
        type: ''
      },
      dictionary: {
        attributes: {
          author: 'Author'
        },
        custom: {
          title: {
            required: () => 'Title can not be empty',
            max: 'The title field may not be greater than 10 characters'
          },
          select: {
            required: 'Select field is required'
          }
        }
      }
    }
  },
  created(){
    if (questionset) {
      questionsetDetail = questionset;
    }
  }
}
</script>

<style lang="css" scoped>
</style>
