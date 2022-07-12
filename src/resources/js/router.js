import Vue from 'vue'
import VueRouter from "vue-router";

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',

    routes: [
        {
            path: '/', component: () => import('./components/country/Index'),
            name: 'country.index'
        },
        {
            path: '/create', component: () => import('./components/country/Create'),
            name: 'country.create'
        },
        {
            path: '/:id/edit', component: () => import('./components/country/Edit'),
            name: 'country.edit'
        },
        {
            path: '/:id/hotels', component: () => import('./components/hotel/Index'),
            name: 'hotel.index',
            props:true
        },
        {
            path: '/showHotel/:id', component: () => import('./components/hotel/Show'),
            name: 'hotel.show'
        },
        {
            path: '/hotel-create', component: () => import('./components/hotel/Create'),
            name: 'hotel.create'
        },
        {
            path: '/show/:id', component: () => import('./components/room/Show'),
            name: 'room.show',
        },
        {
            path: '/user/login', component: () => import('./components/auth/Login'),
            name: 'user.login',
        },
        {
            path: '/user/registration', component: () => import('./components/auth/Registration'),
            name: 'user.registration',
        },
        {
            path: '/my-bookings', component: () => import('./components/booking/Index'),
            name: 'booking.index'
        },
    ]
})
// router.beforeEach((to, from, next) => {
//     const token = localStorage.getItem('x_xsrf_token')
//
//     if(!token) {
//         if(to.name === 'user.login' || to.name === 'user.registration') {
//             return next()
//         } else {
//             return next({
//                 name: 'user.login'
//             })
//         }
//     }
//
//     if(to.name === 'user.login' || to.name === 'user.registration' && token) {
//         return next({
//             name: 'country.index'
//         })
//     }
//
//     next()
// })

export default router
