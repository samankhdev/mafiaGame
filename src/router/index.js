import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import SelectUser from "../components/SelectUser.vue"
import ShowNames from "../components/ShowNames.vue"
import selectJobs from "../components/selectJobs.vue"
import Day1 from "../components/Day1.vue"
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
    path: '/day1',
    name: 'Day1',
    component: Day1
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
