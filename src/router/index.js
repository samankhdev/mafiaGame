import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import SelectUser from "../components/SelectUser.vue"
import ShowNames from "../components/ShowNames.vue"
import selectJobs from "../components/selectJobs.vue"
import Choose from "../components/Choose.vue"
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
  {
    path: '/select-jobs',
    name: 'selectJobs',
    component: selectJobs
  },
  {
    path: '/choose',
    name: 'Choose',
    component: Choose
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
