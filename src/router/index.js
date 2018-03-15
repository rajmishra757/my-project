import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ShowMessage from '@/components/ShowMessage'
import UserName from '@/components/UserName'
import MsgComp from '@/components/MsgComp'
import ColorChangerParent from '@/components/ColorChangerParent'
import ForLoop from '@/components/ForLoop'
import Condition from '@/components/Condition'
import EventComp from '@/components/EventComp'
import Time from '@/components/Time'
import SlotParent from '@/components/SlotParent'

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
    },
    {
      path: '/change-color',
      name: 'ColorChangerParent',
      component: ColorChangerParent
    },
    {
      path: '/looping',
      name: 'ForLoop',
      component: ForLoop
    },
    {
      path: '/condition',
      name: 'Condition',
      component: Condition
    },
    {
      path: '/event',
      name: 'EventComp',
      component: EventComp
    },
    {
      path: '/time',
      name: 'Time',
      component: Time
    },
    {
      path: '/slot',
      name: 'SlotParent',
      component: SlotParent
    }
  ]
})
