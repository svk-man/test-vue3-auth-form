import Routing from './index.vue';

export const routes = [
  {path: '/', component: () => import('./personal')},
  {path: '/personal', component: () => import('./personal')}
];

export {Routing}