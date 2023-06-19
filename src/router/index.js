import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import InicioSesionView from '../views/InicioSesionView.vue'
import RegistrarView from '../views/RegistrarView.vue'
import MisLibrosView from '../views/MisLibrosView.vue'
import LibroView from '../views/LibroView.vue'
import AgregarLibroView from '../views/AgregarLibroView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/Registrar',
      name: 'Registrar',
      component: RegistrarView
    },
    {
      path: '/InicioSesion',
      name: 'InicioSesion',
      component: InicioSesionView
    },

    {
      path: '/Libro',
      name: 'Libro',
      component: LibroView
    },

    {
      path: '/MisLibros',
      name:'Libro',
      component: MisLibrosView
    },

    
    {
      path: '/AgregarLibro',
      name:'AgregarLibro',
      component: AgregarLibroView
    },
      
      


  ]
})


export default router
