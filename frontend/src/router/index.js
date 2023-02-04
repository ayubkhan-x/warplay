import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "@/views/HomeView.vue";
import SubscriptionView from "@/views/SubscriptionView.vue";
import LoginView from "@/views/LoginView.vue";
import RegisterView from "@/views/RegisterView.vue";
import SystemView from "@/views/SystemView.vue";
import ConfirmView from "@/views/ConfirmView.vue";
import ContactsView from "@/views/ContactsView.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/subscription',
    name: 'subscription',
    component: SubscriptionView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/system',
    name: 'system',
    component: SystemView
  },
  {
    path: '/confirm',
    name: 'confirm',
    component: ConfirmView
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: ContactsView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
