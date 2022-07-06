<template>
    <div class="container">
        <div class="row row-cols-1 row-cols-md-3 g-4" >
            <div class="col" v-for="hotel in hotels">
                <div class="card h-100">
                    <img :src="`../../../storage/${hotel.image}`" style="height: 238px">
                    <div class="card-body">
                        <p class="card-title">{{ hotel.name }}</p>
                        <p class="card-title">{{ hotel.address }}</p>
                        <router-link :to="{ name: 'hotel.show', params: {id: hotel.id} }" class="btn btn-outline-primary">Перейти</router-link>
                        <button class="btn btn-outline-danger">Удалить</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Index",

    props: {
        id: {
            required: true
        }
    },

    data() {
        return {
            hotels: null,
        }
    },
    mounted() {
        this.getHotels()
    },
    methods: {
        getHotels() {
            axios.get(`/api/countries/${this.id}/hotels`)
                .then(res => {
                    this.hotels = res.data
                })
        },
    },

}
</script>

<style scoped>

</style>
