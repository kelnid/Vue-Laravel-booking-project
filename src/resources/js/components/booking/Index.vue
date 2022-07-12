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
                            <button class="btn btn-outline-danger" @click.prevent="deleteBooking(booking.pivot.id)">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Index",
    data() {
        return {
            bookings: []
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
                })
        }
    }
}
</script>

<style scoped>

</style>
