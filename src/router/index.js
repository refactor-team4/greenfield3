import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Feed from '../components/Feed'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Feed',
    name: 'Feed',
   component:Feed
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
