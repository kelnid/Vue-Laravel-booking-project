<template>
    <div>
        <v-header></v-header>
        <div class="container pt-5">
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                <div class="col" v-for="booking in bookings">
                    <div class="card">
                        <div class="card-body">
                            <p class="card-title" style="color: black">{{ booking.name }}</p>
                            <p class="card-text" style="color: black">Price: {{ booking.price }} UAH</p>
                            <p class="card-text" style="color: black">Дата заезда - {{ booking.pivot.startDate }}</p>
                            <p class="card-text" style="color: black">Дата выезда - {{ booking.pivot.endDate }}</p>
                            <button class="btn btn-outline-danger" @click="showBookingModal(booking.pivot.id)">Отменить бронь</button>
                        </div>
                    </div>
                </div>
                <bookings-modal v-if="showModal" @close="showModal = false">
                    <template v-slot:header>
                        Подтверждение отмены брони
                    </template>
                    <template v-slot:body>
                        <div>
                            Действительно хотите отменить бронь?
                        </div>
                    </template>
                    <template v-slot:footer>
                        <button class="btn btn-outline-danger" @click="deleteBooking(booking_id)">Да</button>
                        <button class="btn btn-outline-primary" @click="showModal = false">Нет</button>
                    </template>
                </bookings-modal>
            </div>
        </div>
    </div>
</template>

<script>
import BookingsModal from "../modal/BookingsModal";
export default {
    name: "Index",
    components:{
      BookingsModal
    },
    data() {
        return {
            bookings: [],
            showModal: false,
            booking_id: 0
        }
    },
    mounted() {
        this.getBookings()
    },
    methods: {
        getBookings() {
            axios.get('/api/bookings/index')
                .then(res => {
                    console.log(res.data);
                    this.bookings = res.data
                })
        },
        deleteBooking(id) {
            axios.delete(`/api/bookings/${id}`)
                .then(res => {
                    this.getBookings()
                    this.showModal = false
                })
        },
        showBookingModal(id) {
            this.booking_id = id
            this.showModal = true
        },
    }
}
</script>

<style scoped>

</style>
