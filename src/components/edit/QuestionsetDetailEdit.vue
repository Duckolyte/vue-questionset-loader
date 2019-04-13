<template lang="html">

  <v-form
    ref="form"
  >
    <h1 class="heading font-weight-light">Edit Questionset</h1>
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
      {{ buttonLabel }}
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
    }),
    buttonLabel() {
      return this.formMode == 'post' ? 'Create' : 'Update';
    }
  },

  data(){
    return{

      questionsetDetail: {
        title: '',
        author: '',
        type: ''
      },

      formMode: 'post',

      formContext: null,

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
      const self = this;
      const webServiceConfig = this.$store.state.application.questionsetWebService;

      fetch(
        `${webServiceConfig.url}${webServiceConfig.api}` +
        `${webServiceConfig.resources.questionaries}`,
        webServiceConfig.methods[this.formMode](
          JSON.stringify(this.questionsetDetail)
        )
      )
      .then(response => {
        response.text().then((jsonResponse) => {
          try{
            self.$store.state.application.context.inUseQuestionset = JSON.parse(jsonResponse);
          }
          catch(error){
            console.log(error);
          }
        });
      })
      .then(() => {
        self.$router.push({name: 'overview'})
      })
      .catch(error => {
        // TODO handle error
        console.log(error);
      })
    }
  },

  created(){
    const self = this;

    const routerParams = this.$route.params;

    if(routerParams.id != 0)
    {
      this.formMode = 'update';
      this.formContext = routerParams;

      const webService =
        this.$store.state.application.questionsetWebService;

      fetch(
        `${webService.url}${webService.api}`+
        `${webService.resources.questionaries}/${routerParams.id}`,
        webService.methods.get
      )
      .then(response => {
        response.text().then(
          jsonResponse => {
            try{
              self.questionsetDetail = JSON.parse(jsonResponse);
            }
            catch(error){
              console.log(error);
            }
          }
        )
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
