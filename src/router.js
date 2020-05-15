import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    

        {
          path:'/',
          name:'button',
          component:()=>import('./components/button/button.md')
        },
        {
          path:'/countdown',
          name:'countdown',
          component:()=>import('./components/countdown/countdown.md')
        },
        {
          path:'/input',
          name:'input',
          component:()=>import('./components/input/input.md')
        },
        {
          path:'/tooltip',
          name:'tooltip',
          component:()=>import('./components/tooltip/tooltip.md')
        },
        {
          path:'/form',
          name:'form',
          component:()=>import('./components/form/form.md')
        },
        {
          path:'/message',
          name:'message',
          component:()=>import('./components/message/message.md')
        },
        {
          path:'/select',
          name:'select',
          component:()=>import('./components/select/select.md')
        },
        {
          path:'/modal',
          name:'modal',
          component:()=>import('./components/modal/modal.md')
        },
        {
          path:'/table',
          name:'table',
          component:()=>import('./components/table/table.md')
        },
        {
          path:'/checkout',
          name:'checkout',
          component:()=>import('./components/checkout/checkout.md')
        },
        {
          path:'/switch',
          name:'switch',
          component:()=>import('./components/switch/switch.md')
        },
  ]

})
