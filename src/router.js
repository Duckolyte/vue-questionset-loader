import Vue from 'vue'
import Router from 'vue-router'
import QuestionsetBase from './views/QuestionsetBase.vue'
import QuestionsetOverview from './views/QuestionsetOverview.vue'
import QuestionsetAdd from './views/QuestionsetAdd.vue'
import QuestionsetEdit from './views/QuestionsetEdit.vue'
import BaseEdit from './views/BaseEdit.vue'

import QunFileDragAndDrop from './components/add/FileDragAndDrop'
import QunUploadProgressStepper from './components/add/UploadProgressStepper'

import QunQuestionsetList from './components/overview/QuestionsetList'
import QunQuestionsetDetail from './components/overview/QuestionsetDetail'

import QunQuestionDetailEdit from './components/edit/QuestionDetailEdit'
import QunQuestionsetDetailEdit from './components/edit/QuestionsetDetailEdit'


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
            },
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
        {
          path: 'edit',
          component: BaseEdit,
          children:[
            {
              name: 'edit-questionset',
              path: 'questionset',
              component: QunQuestionsetDetailEdit
            },
            {
              name: 'edit-question',
              path: 'question',
              component: QunQuestionDetailEdit
            }
          ]
        },
        {
          name: 'editor',
          path: 'editor',
          components: {
            default: QuestionsetEdit
          }
        }
      ]
    }
  ]
})
