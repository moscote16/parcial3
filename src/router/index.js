import { createRouter, createWebHistory } from 'vue-router'
import GeneroView from '@/views/GeneroView.vue'
import PelisGeneroViewVue from '@/views/PelisGeneroView.vue'
import PopularesView from '@/views/PopularesView.vue'
import CarteleraView from '@/views/CarteleraView.vue'
import MovieDetailView from '@/views/MovieDetailView.vue'



const routes = [
  {
    path: '/',
    name: 'home',
    component: GeneroView,
  },
  {
    path: '/Peliculas/:id',
    name: 'Gen-Peliculas',
    component: PelisGeneroViewVue
  },
  {
    path: '/Cartelera',
    name: 'Cartelera',
    component: CarteleraView
  },
  {
    path: '/Populares',
    name: 'Populares',
    component: PopularesView
  },
  {
    path: '/MovieDetail/:id',
    name: 'Detail-Movie',
    component: MovieDetailView

  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
