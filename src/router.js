import {createRouter, createWebHistory} from 'vue-router' 

import Sofa from '@/pages/Sofa.vue'

const routes = [
  {
    path: '',
    name: Sofa,
    component: Sofa
  },
]

const router = createRouter({ 
  history: createWebHistory(process.env.BASE_URL),
  routes 
}) 
 
export default router