import Vue from 'vue';
import Router from 'vue-router';
import NotFound from '@/components/NotFound';
import TasksIndex from '@/components/Tasks/Index';
import TaskView from '@/components/Tasks/View';
import TaskCreate from '@/components/Tasks/Create';
import TaskEdit from '@/components/Tasks/Edit';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '',
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
      component: TasksIndex,
      props: (route) => ({ query: route.query.q }),
      children: [
        {
          path: '/',
          name: 'Tasks',
          component: TasksIndex,
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
          path: '/create',
          name: 'TaskCreate',
          component: TaskCreate,
        },
      ],
    },
  ],
});
