import { createRouter, createWebHistory } from 'vue-router';
import PaisList from './components/PaisList.vue';
import CiudadList from './components/CiudadList.vue';

const routes = [
  { path: '/', redirect: '/paises' },
  { path: '/paises', component: PaisList },
  { path: '/ciudades', component: CiudadList },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;