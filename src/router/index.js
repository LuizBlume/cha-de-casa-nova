import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/escolha',
      name: 'Escolha',
      component: () => import('../views/EscolhaView.vue')
    },
    {
      path: '/cadastro',
      name: 'Cadastro',
      component: () => import('../views/CadastroView.vue')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/add-produto',
      name: 'Add-produto',
      component: () => import('../views/AdicionarProdutoView.vue')
    },{
      path: '/carrinho',
      name: 'Carrinho',
      component: () => import('../views/CarrinhoView.vue')
    },
  ]
})

export default router
