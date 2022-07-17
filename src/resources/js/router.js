import Vue from 'vue'
import VueRouter from "vue-router";

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',

    routes: [
        {
            path: '/', component: () => import('./components/country/Index'),
            name: 'country.index',
        },
        {
            path: '/create', component: () => import('./components/country/Create'),
            name: 'country.create',
            beforeEnter: (to, from, next) => {
                roleCheck(to, from, next)
            }
        },
        {
            path: '/:id/edit', component: () => import('./components/country/Edit'),
            name: 'country.edit',
            beforeEnter: (to, from, next) => {
                roleCheck(to, from, next)
            }
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
            name: 'hotel.create',
            beforeEnter: (to, from, next) => {
                roleCheck(to, from, next)
            }
        },
        {
            path: '/:id/edit-hotel', component: () => import('./components/hotel/Edit'),
            name: 'hotel.edit',
            beforeEnter: (to, from, next) => {
                roleCheck(to, from, next)
            }
        },
        {
            path: '/show/:id', component: () => import('./components/room/Show'),
            name: 'room.show',
        },
        {
            path: '/room-create', component: () => import('./components/room/Create'),
            name: 'room.create',
            beforeEnter: (to, from, next) => {
                roleCheck(to, from, next)
            }
        },
        {
            path: '/:id/edit-room', component: () => import('./components/room/Edit'),
            name: 'room.edit',
            beforeEnter: (to, from, next) => {
                roleCheck(to, from, next)
            }
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
            name: 'booking.index',
            beforeEnter: (to, from, next) => {
                enterBookings(to, from, next)
            }
        },
        {
            path: "*", component: () => import('./components/PageNotFound')
        }
    ]
})

function enterBookings(to, from, next) {
    let role = localStorage.getItem('role_id');
    if (role !== null) {
        next()
    } else {
        next('/')
    }
}
function roleCheck(to, from, next) {
    let role = localStorage.getItem('role_id');
    if (+role !== 2 && role !== null) {
        next()
    } else {
        next('/')
    }
}
export default router
