import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import CitiesList from '../views/CitiesList.vue'
import City from '../components/City.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/cities', name: 'CitiesList', component: CitiesList },
  { path: '/ville', name: 'City', component: City }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
