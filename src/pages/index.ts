import Routing from './index.vue';

export const routes = [
    {path: '/', component: () => import('./signin')},
    {path: '/personal', component: () => import('./personal')}
];

export {Routing}