<template>
    <div>
        <v-header></v-header>
        <div class="container pt-5">
            <div class="row row-cols-1 row-cols-md-3 g-4 ">
                <div class="col " v-for="hotel in hotels">
                    <div class="card h-100 shadow">
                        <img :src="`../../../storage/${hotel.image}`" style="height: 238px">
                        <div class="card-body">
                            <p class="card-title">{{ hotel.name }}</p>
                            <p class="card-title">{{ hotel.address }}</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <div style="display: flex">
                                    <div>
                                        <router-link :to="{ name: 'hotel.show', params: {id: hotel.id} }" class="btn btn-outline-primary shadow">Перейти</router-link>
                                    </div>
                                    <template v-if="role_id === 1">
                                        <router-link :to="{ name: 'hotel.edit', params: {id: hotel.id}}" class="btn btn-outline-primary shadow">Редактировать</router-link>
                                    </template>
                                </div>
                                <template v-if="role_id === 1">
                                    <button class="btn btn-outline-danger shadow" @click="showMyModal(hotel.id)">Удалить</button>
                                </template>
                            </div>
                        </div>
                    </div>
                </div>
                <hotel-delete v-if="showModal" @close="showModal = false">
                    <template v-slot:header>
                        Подтверждение удаления
                    </template>
                    <template v-slot:body>
                        Действительно хотите удалить?
                    </template>
                    <template v-slot:footer>
                        <button class="btn btn-outline-danger" @click="deleteHotel(hotel_id)">Удалить</button>
                        <button class="btn btn-outline-primary" @click="showModal = false">Отмена</button>
                    </template>
                </hotel-delete>
            </div>
        </div>
    </div>
</template>

<script>
import HotelDelete from "../modal/HotelDelete";

export default {
    name: "Index",
    components: {HotelDelete},
    props: {
        id: {
            required: true
        }
    },
    data() {
        return {
            hotels: [],
            showModal: false,
            hotel_id: 0,
            role_id: null,
        }
    },
    mounted() {
        this.getHotels()
        this.getUser()
    },
    methods: {
        showMyModal(id) {
            this.hotel_id = id
            this.showModal = true
        },
        getHotels() {
            axios.get(`/api/countries/${this.id}/hotels`)
                .then(res => {
                    this.hotels = res.data
                })
        },
        deleteHotel(id) {
            axios.delete(`/api/hotels/delete/${id}`)
                .then(res => {
                    this.getHotels()
                    this.showModal = false
                })
        },
        getUser() {
            this.role_id = JSON.parse(localStorage.getItem('role_id'))
        },
    },

}
</script>

<style scoped>

</style>
