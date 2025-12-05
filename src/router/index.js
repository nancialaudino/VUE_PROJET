import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import CitiesList from '../views/CitiesList.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/cities', name: 'CitiesList', component: CitiesList }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
