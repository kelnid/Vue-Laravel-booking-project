<template>
    <div>
        <v-header></v-header>
        <div class="container pt-5 pl-5">
            <div class="row align-item-start">
                <div class="mb-3 mb-lg-0 col-lg-7">
                    <div class="card shadow">
                        <div class="card-body">
                            <h1 class="mb-3">{{ room.name }}</h1>
                            <hr>
                            <img :src="`../../../storage/${room.image}`" style="width: 710px; height: 484px">
                            <hr>
                            <div class="d-flex flex-wrap gap-1 mb-3 flex-1">
                                <div><i class="mr-1 text-primary fas fa-swimming-pool"></i><span class="text-muted"> Бассейн </span>
                                </div>
                                <div><i class="mr-1 text-primary fas fa-dumbbell"></i><span class="text-muted"> Тренажерный зал </span></div>
                                <div><i class="mr-1 text-primary fas fa-utensils"></i><span class="text-muted"> Ресторан </span>
                                </div>
                                <div><i class="mr-1 text-primary fas fa-bread-slice"></i><span class="text-muted"> Завтрак </span>
                                </div>
                                <div><i class="mr-1 text-primary fas fa-concierge-bell"></i><span
                                    class="text-muted"> Обслуживание комнаты </span></div>
                                <div><i class="mr-1 text-primary fas fa-glass-martini-alt"></i><span class="text-muted"> Бар </span>
                                </div>
                                <div><span class="text-muted"> Wi-fi </span></div>
                                <div><i class="mr-1 text-primary fab fa-accessible-icon"></i><span
                                    class="text-muted"> Доступный </span></div>
                                <div><i class="mr-1 text-primary fas fa-smoking-ban"></i><span class="text-muted"> Курение запрещено </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="sticky col-lg-4" style="padding-left: 50px">
                    <div class="card shadow">
                        <div class="card-body">
                            <div class="d-flex justify-content-between align-items-end flex-wrap"><h2 class="mb-0">
                                Бронирование</h2></div>
                            <hr>
                            <p><strong>Площадь комнаты: {{ room.area }} м²</strong></p>
                            <p><strong>Кровать: {{ room.bed }} </strong></p>
                            <p><strong>Цена за ночь: {{ room.price }} UAH</strong></p>
                            <p>Выберите дату заезда и выселения</p>
                            <form class="pt-2">
                                <template v-if="role_id === 1 || role_id === 2">
                                    <hotel-date-picker
                                        @check-in-changed="updateCheckIn"
                                        @check-out-changed="updateCheckOut"
                                        :halfDay="false"
                                        :minNights="5"
                                        :maxNights="10"
                                        :disabledDates="bookings.unavailable_dates">
                                    </hotel-date-picker>
                                </template>
                                <div class="mb-3">
                                    <input type="hidden" v-model="room_id = room.id" class="form-control">
                                </div>
                            </form>
                            <template v-if="role_id === null">
                                <div class="help-block alert alert-danger">
                                    Бронировать номера могут только
                                    <router-link :to="{ name: 'user.registration' }">зарегистрированные</router-link>
                                    пользователи
                                </div>
                            </template>
                            <template v-if="role_id === 1 || role_id === 2">
                                <button @click.prevent="booking" type="submit" class="btn btn-primary shadow">Забронировать</button>
                            </template>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import HotelDatePicker from 'vue-hotel-datepicker'
import 'vue-hotel-datepicker/dist/vueHotelDatepicker.css';
import router from "../../router";

export default {
    components: {
        HotelDatePicker,
    },
    name: "Show",
    data() {
        return {
            room: [],
            room_id: [],
            startDate: null,
            endDate: null,
            token: [],
            bookings: [],
            error: null,
            role_id: null,
        }
    },
    mounted() {
        this.getRoom()
        this.getUser()
        this.getBookings()
    },
    methods: {
        getRoom() {
            axios.get(`/api/rooms/show/${this.$route.params.id}`)
                .then(res => {
                    this.room = res.data
                })
        },
        booking() {
            axios.post('/api/bookings/store', {
                startDate: this.startDate,
                endDate: this.endDate,
                room_id: this.room_id,
            })
                .then(res => {
                    console.log(res);
                    this.$router.push({name: 'booking.index'})
                    // document.location.reload()
                })
        },
        getUser() {
            this.role_id = JSON.parse(localStorage.getItem('role_id'))
        },
        getBookings() {
            axios.get(`/api/bookings/bookings/${this.$route.params.id}`)
                .then(res => {
                    this.bookings = res.data
                })
                .catch(err => {
                    console.log(err.message);
                })
        },
        updateCheckIn(date) {
            if (date) {
                this.startDate = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
            } else {
                this.startDate = null
            }
        },
        updateCheckOut(date) {
            if (date) {
                this.endDate = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
            } else {
                this.endDate = null
            }
        },
    }
}
</script>

<style scoped>

</style>
