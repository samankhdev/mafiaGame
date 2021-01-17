import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import SelectUser from "../components/SelectUser.vue"
import ShowNames from "../components/ShowNames.vue"
import selectJobs from "../components/selectJobs.vue"
import Day1 from "../components/Day1.vue"
import Day5 from "../components/Day5.vue"
import Day12 from "../components/Day12.vue"
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
  },
  {
    path: '/day5',
    name: 'Day5',
    component: Day5
  },
  {
    path: '/day12',
    name: 'Day12',
    component: Day12
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
