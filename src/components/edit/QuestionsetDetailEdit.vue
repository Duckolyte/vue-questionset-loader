<template lang="html">
  <v-form
    ref="form"
  >
    <v-text-field
      v-model="questionsetDetail.title"
      v-validate="'required|max:10'"
      :counter="10"
      label="Title"
      required
    ></v-text-field>

    <v-text-field
      v-model="questionsetDetail.author"
      v-validate="'required|max:10'"
      :counter="10"
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

    <v-btn
      color="primary"
      @click="postForm"
    >
      Submit
    </v-btn>

  </v-form>
</template>

<script>
import {mapGetters} from 'vuex';

export default {

  $_veeValidate: {
    validator: 'new'
  },

  name: 'QuestionsetDetailEdit',

  computed: {
    ...mapGetters({
      types: 'allTypeNames',
    })
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

  methods: {
    postForm() {

      const webServiceConfig = this.$store.state.application.questionsetWebService;
      fetch(
        `${webServiceConfig.url}${webServiceConfig.api}${webServiceConfig.resources.questionaries}`,
        webServiceConfig.methods.post(this.questionsetDetail)
      )
      .then(response => {
        //TODO try catch
        console.log(response);
      })
      .catch(error => {
        // TODO handle error
        console.log(error);
      })
    }
  },

  created(){
    const self = this;

    // TODO if this is used to edit use the this.$router questionsetid param  to find
    if(false)
    {
      const webServiceConfig =
        this.$store.state.application.questionsetWebService;

      fetch(
        "\
        ${webServiceConfig.url}\
        ${webServiceConfig.api}\
        ${webServiceConfig.resources.questionaries}\
        /${TODO_router_param_set_id}\
        ",
        webServiceConfig.methods.get
      )
      .then(response => {
        //TODO try catch
        console.log(response);
        self.questionsetDetail = JSON.parse(response);
      })
      .catch(error => {
        // TODO handle error
        console.log(error);
      })
    }
  }
}
</script>

<style lang="css" scoped>
</style>
