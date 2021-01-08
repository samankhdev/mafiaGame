import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import SelectUser from "../components/SelectUser.vue"

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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
