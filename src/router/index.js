import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ShowMessage from '@/components/ShowMessage'
import UserName from '@/components/UserName'
import MsgComp from '@/components/MsgComp'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/show-message',
      name: 'ShowMessage',
      component: ShowMessage
    },
    {
      path: '/username',
      name: 'UserName',
      component: UserName
    },
    {
      path: '/reverse-msg',
      name: 'MsgComp',
      component: MsgComp
    }
  ]
})
