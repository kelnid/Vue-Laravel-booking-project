<template>
    <div>
        <v-header></v-header>
        <div class="container" style="display: flex">
            <div v-if="error">
                {{ error }}
            </div>
            <div class="row row-cols-3" style="padding-top: 200px; padding-right: 20px">
                <div class="col">
                    <div class="card" style="width: 300px;">
                        <div class="card-body">
                            <strong class="card-title" style="color: black">{{ room.name }}</strong>
                            <p class="card-text" style="color: black">Площадь: {{ room.area }} м²</p>
                            <p class="card-text" style="color: black">Цена: {{ room.price }} UAH</p>
                            <p class="card-text" style="color: black">{{ room.bed }}</p>
                            <div class="pt-5">
                                <hotel-date-picker
                                    @check-in-changed="updateCheckIn"
                                    @check-out-changed="updateCheckOut"
                                    :halfDay="false"
                                    :minNights="5"
                                    :maxNights="10"
                                    :disabledDates="bookings.unavailable_dates">
                                </hotel-date-picker>
                                <div class="mb-3">
                                    <input type="hidden" v-model="room_id = room.id" class="form-control">
                                </div>
                                <div class="pt-2">
                                    <input @click.prevent="booking" type="submit" value="Add" class=" btn btn-primary">
                                </div>
                            </div>
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
            error: null
        }
    },
    mounted() {
        this.getRoom()
        this.getToken()
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
                    this.$router.push({ name: 'booking.index' })
                    // document.location.reload()
                })
        },
        getToken() {
            this.token = localStorage.getItem('x_xsrf_token')
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
            if(date) {
                this.startDate = date.getFullYear() + '-' + (date.getMonth()+1) +'-'+date.getDate()
            } else {
                this.startDate = null
            }
        },

        updateCheckOut(date) {
            if (date) {
                this.endDate = date.getFullYear() + '-' + (date.getMonth()+1) +'-'+date.getDate()
            } else {
                this.endDate = null
            }
        },
    }
}
</script>

<style scoped>

</style>
