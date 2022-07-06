<template>
    <div class="container" style="display: flex; width: 1140px">
        <div class="card mb-3 mt-5" style="width: 1295px; height: auto; margin: 0 auto;">
            <img :src="`../../../storage/${hotel.image}`">
            <div class="card-body">
                <h5 class="card-title"> {{ hotel.name }}</h5>
                <div class="mx-8">
                    <span id="exact-rating" class="mt-2 text-3xl"></span>
                </div>
                <p class="card-title">{{ hotel.address }}</p>
                <p class="card-text">{{ hotel.description }}</p>
                <button class="btn btn-outline-primary">Добавить номер</button>
                <button class="btn btn-outline-primary">Редактировать</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Show",
    data() {
        return {
            hotel: []
        }
    },
    mounted() {
        this.getHotel()
    },
    methods: {
        getHotel() {
            axios.get(`/api/hotels/show/${this.$route.params.id}`)
                .then(res => {
                    this.hotel = res.data
                })
        }
    }
}
</script>

<style scoped>

</style>
