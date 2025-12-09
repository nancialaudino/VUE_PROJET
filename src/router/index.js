import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import CitiesList from '../components/CitiesList.vue'
import City from '../components/City.vue'
import CitiesMap from '../components/CitiesMap.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/cities', name: 'CitiesList', component: CitiesList },
  { path: '/ville', name: 'City', component: City },
  { path: '/carte', name: 'CitiesMap', component: CitiesMap }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
