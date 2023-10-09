import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../components/HomeView.vue'
import SignUp from '../components/SignUp.vue'
import LoginView from '../components/LoginView.vue'
import UpdateResto from '../components/UpdateResto.vue'
import AddResto from '../components/AddResto.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/sign-up',
    name: 'sign-up',
    component: SignUp
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/add',
    name: 'add-resto',
    component: AddResto
  },
  {
    path: '/update/:id',
    name: 'update',
    component: UpdateResto
  },
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
