import Router from 'vue-router'

import LogIn from '@/components/LogIn'
import Home from '@/components/Home'
import Event from '@/components/Event'

export default new Router({
  routes: [
    // Route to Home component
    {
      path: '/home',
      component: Home,
      name: 'Home',
      props: true,
    },
    // Route to LogIn component
    {
      path: '/',
      component: LogIn,
      name: 'LogIn',
      props: true,
    },
    {
      path: '/event',
      component: Event,
      name: 'Event',
      props: true,
    },
  ],
})
