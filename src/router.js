import Vue from 'vue'
import Router from 'vue-router'
import QuestionsetBase from './views/QuestionsetBase.vue'
import QuestionsetOverview from './views/QuestionsetOverview.vue'
import QuestionsetAdd from './views/QuestionsetAdd.vue'
import QuestionsetEdit from './views/QuestionsetEdit.vue'

import QunFileDragAndDrop from './components/add/FileDragAndDrop'
import QunUploadProgressStepper from './components/add/UploadProgressStepper'

import QunQuestionsetList from './components/overview/QuestionsetList'
import QunQuestionsetDetail from './components/overview/QuestionsetDetail'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/questionset',
      component: QuestionsetBase,
      children: [
        {
          path: 'add',
          component: QuestionsetAdd,
          children: [
            {
              path:'',
              components: {
                default: QunFileDragAndDrop,
                progress: QunUploadProgressStepper,
                edit: QuestionsetEdit
              }
            }
          ]
        },
        {
          path: 'overview',
          component: QuestionsetOverview,
          children: [
            {
              path: '',
              components: {
                default: QunQuestionsetList,
                setdetail: QunQuestionsetDetail
              }
            }
          ]
        },
        /*
        // TODO:
        {
          path: 'editor',
          component: QuestionsetEditor
        }
        */
      ]
    }
    /*
    {
      path: '/questionset',
      component: QuestionsetAdd,
      children: [
        {
          path: 'add',
          components: {
            default: QunFileDragAndDrop,
            progress: QunUploadProgressStepper
          }
        },
        {
          path: 'overview',
          components: {
            default: QunQuestionsetList,
            setdetail: QunQuestionsetDetail
          }
        },
        /*
        // TODO:
        {
          path: 'editor',
          component: QuestionsetEditor
        }

      ]
    },
    */
  ]
})
