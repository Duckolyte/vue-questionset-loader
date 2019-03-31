import Vue from 'vue'
import Router from 'vue-router'
import QuestionsetBase from './views/QuestionsetBase.vue'
import QuestionsetOverview from './views/QuestionsetOverview.vue'
import QuestionsetCreate from './views/QuestionsetCreate.vue'

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
      component: QuestionsetCreate,
      children: [
        {
          path: 'upload',
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
    /*
    {
      path: '/questionset',
      name: 'createset',
      component: QuestionsetCreate,
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
          component: QuestionsetCreate,
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
