import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import SelectUser from "../components/SelectUser.vue"
import ShowNames from "../components/ShowNames.vue"

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/select-user',
    name: 'SelectUser',
    component: SelectUser
  },
  {
    path: '/show-names',
    name: 'showNames',
    component: ShowNames
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
