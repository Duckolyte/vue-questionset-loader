import Vue from 'vue'
import Router from 'vue-router'
import QuestionsetBase from './views/QuestionsetBase.vue'
import QuestionsetOverview from './views/QuestionsetOverview.vue'
import QuestionsetAdd from './views/QuestionsetAdd.vue'

import QunFileDragAndDrop from './components/upload/FileDragAndDrop'
import QunUploadProgressStepper from './components/upload/UploadProgressStepper'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    /*
    {
      path: '/test',
      components: {
        default: QunFileDragAndDrop,
        progress: QunUploadProgressStepper
      }
    }
    */
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
            default: QunFileDragAndDrop,
            progress: QunUploadProgressStepper
          }
        },
        /*
        // TODO: 
        {
          path: 'editor',
          component: QuestionsetEditor
        }
        */
      ]
    },
    /*
    {
      path: '/questionset',
      name: 'createset',
      component: QuestionsetAdd,
      children: [
        {
          path: '/do-create',
          components: {
            default: QunFileDragAndDrop,
            progress: QunUploadProgressStepper
          }
        },
        {
          path: 'overview',
          components: {
            default: QunFileDragAndDrop,
            progress: QunUploadProgressStepper
          }
        }
      ]
    },
    */
    /*
    {
      path: '/questionset',
      name: 'base',
      component: QuestionsetBase,
      children: [
        {
          path: 'create',
          name: 'create',
          component: QuestionsetAdd,
          children: [
            {
              path: '/test',
              components: {
                default: QunFileDragAndDrop,
                progessStepper: QunUploadProgressStepper,
              }
            }
          ]
        }
      ]
    },
    */
  ]
})
