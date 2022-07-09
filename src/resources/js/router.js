import Vue from 'vue'
import VueRouter from "vue-router";

Vue.use(VueRouter)

export default new VueRouter({
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
            path: '/show/:id', component: () => import('./components/room/Show'),
            name: 'room.show',
        }
    ]
})
