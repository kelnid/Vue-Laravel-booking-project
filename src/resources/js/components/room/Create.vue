<template>
    <div>
        <v-header></v-header>
        <div class="container pt-5">
            <div class="w-25">
                <div class="mb-3">
                    <input type="text" v-model="name" placeholder="Название" class="form-control">
                </div>
                <div class="mb-3">
                    <input type="text" v-model="area" placeholder="Площадь" class="form-control">
                </div>
                <div class="mb-3">
                    <input type="text" v-model="bed" placeholder="Кровать" class="form-control">
                </div>
                <div class="mb-3">
                    <input type="text" v-model="price" placeholder="Цена" class="form-control">
                </div>
                <div class="mb-3">
                    <input type="file" @change="addFile" id="image" class="form-control">
                </div>
                <div class="mb-3">
                    <select v-model="hotel_id" name="hotel_id">
                        <template v-for="hotel in hotels">
                            <option :value="hotel.id">
                                {{ hotel.name }}
                            </option>
                        </template>
                    </select>
                </div>
                <div class="mb-3">
                    <button :disabled="!isDisabled" @click.prevent="addRoom" class=" btn btn-primary">Добавить номер</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import router from "../../router";

export default {
    name: "Create",
    data() {
        return {
            name: null,
            bed: null,
            area: null,
            price: null,
            hotel_id: null,
            hotels: []
        }
    },

    mounted() {
        this.getHotels()
    },
    computed: {
        isDisabled() {
            return this.name && this.bed && this.area && this.price && this.hotel_id && this.image
        }
    },
    methods: {
        addRoom() {
            let formData = new FormData()

            formData.append('name', this.name)
            formData.append('image', this.image)
            formData.append('area', this.area)
            formData.append('price', this.price)
            formData.append('hotel_id', this.hotel_id)
            formData.append('bed', this.bed)

            axios.post('/api/rooms', formData)
                .then(res=> {
                    router.push({name: 'country.index'})
                })
        },
        addFile(event) {
            this.image = event.target.files[0]
        },
        getHotels() {
            axios.get('/api/hotels')
                .then(res => {
                    console.log(res)
                    this.hotels = res.data
                })
        },
    }
}
</script>

<style scoped>

</style>
