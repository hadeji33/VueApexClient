import Vue from 'vue';
import Router from 'vue-router';
import NotFound from '@/components/NotFound';
import TaskView from '@/components/Tasks/View';
import TaskCreate from '@/components/Tasks/Create';
import TaskEdit from '@/components/Tasks/Edit';
import App from '@/App';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '',
    },
    {
      path: '/',
      name: 'home',
      component:App
    },
    {
      path: '/404',
      name: '404',
      component: NotFound,
    },
    {
      path: '*',
      redirect: '/404',
    },
    {
      path: '/tasks',
      component: App,
      props: (route) => ({ query: route.query.q }),
      children: [
        {
          path: '/',
          name: 'Tasks',
          component: App,
        },
        {
          path: ':id/view',
          name: 'TaskView',
          component: TaskView,
        },
        {
          path: ':id/edit',
          name: 'TaskEdit',
          component: TaskEdit,
        },
        {
          path: 'create',
          name: 'TaskCreate',
          component: TaskCreate,
        },
      ],
    },
  ],
});
