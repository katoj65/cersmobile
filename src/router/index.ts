import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue';
import MessagePage from '../views/MessagePage.vue';
import CallPage from '../views/CallPage.vue';
import AlertCenterPage from '../views/AlertCenterPage.vue';
import ReportPage from '../views/ReportPage.vue';
import Tab4Page from '../views/Tab4Page.vue';
import ReportForm from '../views/ReportForm.vue';
import EventForm from '../views/EventForm.vue';
import AppointmentForm from '../views/AppointmentForm.vue';
import ShowEventPage from '../views/ShowEventPage.vue';
import PolicePage from '../views/PolicePage.vue';
import LanguagePage from '../views/LanguagePage.vue';


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/tab1'
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/tab1'
      },
      {
        path: 'tab1',
        component: () => import('@/views/Tab1Page.vue')
      },
      {
        path: 'tab2',
        component: () => import('@/views/Tab2Page.vue')
      },
      {
        path: 'tab3',
        component: () => import('@/views/Tab3Page.vue')
      },
      {
        path:'tab4',
        component:Tab4Page
      }
    ]
  },
  {
    path:'/messages',
    name:'messages',
    component:MessagePage
  },
  {
    path:'/call',
    name:'Call',
    component:CallPage
  },
  {
    path:'/alert-center',
    name:'alert center',
    component:AlertCenterPage
  },
  {
    path:'/report',
    name:'report',
    component:ReportPage
  },
  {
    path:'/report/form',
    name:'report form',
    component:ReportForm
  },
  {
    path:'/event/form',
    name:'register event',
    component:EventForm
  },
  {
    path:'/appointment/form',
    name:'create appointment',
    component:AppointmentForm
  },
  {
    path:'/event/:id',
    name:'show event',
    component:ShowEventPage
  },
  {
    path:'/police',
    name:'police',
    component:PolicePage
  },
  {
    path:'/languages',
    name:'languages',
    component:LanguagePage
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
