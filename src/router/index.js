import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import InicioSesionView from '../views/InicioSesionView.vue'
import RegistrarView from '../views/RegistrarView.vue'
import LibroView from '../views/LibroView.vue'
import AgregarLibroView from '../views/AgregarLibroView.vue'
import BooksTable from '../components/BooksTable.vue' 

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
      path: '/BooksTable',
      name: 'BooksTable',
      component: BooksTable,
      
    },

    {
      path: '/InicioSesion',
      name: 'InicioSesion',
      component: InicioSesionView,
      // meta: {RequireAuth: true}
    },

    {
      path: '/Libro/:id',
      name: 'Libro',
      component: LibroView
    },

   
    
    {
      path: '/AgregarLibro',
      name:'AgregarLibro',
      component: AgregarLibroView
    },
      
      


  ]
})

export default router

// router.beforeEach( (to,from,next) => {
//   const store = useLoginStore();
//   if( to.matched.some(r => r.meta.RequireAuth) && !store.isLogin ) {
//   next('/BookTable')
//   }
//   next()
//   })

