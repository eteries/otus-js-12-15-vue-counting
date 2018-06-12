import Vue from 'vue'
import Router from 'vue-router'
import GameScreen from '@/components/GameScreen'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/game/:task/:total',
      name: 'Game',
      component: GameScreen
    },
    {
      path: '/game',
      name: 'GameStart',
      component: GameScreen
    },
    {
      path: '/',
      name: 'Settings',
      component: GameScreen
    }
  ]
})
