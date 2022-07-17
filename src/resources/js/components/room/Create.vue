<template>
    <div>
        <v-header></v-header>
        <div class="container pt-5 w-25">
            <div class="mb-3">
                <input v-validate="'required|min:8'" name="name" type="text" v-model="name" placeholder="Название" class="form-control">
                <div v-show="errors.has('name')" class="help-block alert alert-danger">{{ errors.first('name') }}</div>
            </div>
            <div class="mb-3">
                <input v-validate="'required|digits:2'" name="area" type="number" v-model="area" placeholder="Площадь" class="form-control">
                <div v-show="errors.has('area')" class="help-block alert alert-danger">{{ errors.first('area') }}</div>
            </div>
            <div class="mb-3">
                <input v-validate="'required|min:5'" name="bed" type="text" v-model="bed" placeholder="Кровать" class="form-control">
                <div v-show="errors.has('bed')" class="help-block alert alert-danger">{{ errors.first('bed') }}</div>
            </div>
            <div class="mb-3">
                <input v-validate="'required|min:3'" name="price" type="number" v-model="price" placeholder="Цена" class="form-control">
                <div v-show="errors.has('price')" class="help-block alert alert-danger">{{ errors.first('price') }}</div>
            </div>
            <div class="mb-3">
                <input v-validate="'required|min:8'" name="image" type="file" @change="addFile" id="image" class="form-control">
                <div v-show="errors.has('image')" class="help-block alert alert-danger">{{ errors.first('image') }}</div>
            </div>
            <div class="mb-3">
                <select style="width: 160px" class="form-select" v-model="hotel_id" name="hotel_id">
                    <option disabled value="0">
                        Выберите отель
                    </option>
                    <template v-for="hotel in hotels">
                        <option :value="hotel.id">
                            {{ hotel.name }}
                        </option>
                    </template>
                </select>
            </div>
            <div class="mb-3">
                <button :disabled="!isDisabled" @click.prevent="addRoom" class=" btn btn-primary">Добавить номер
                </button>
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
            hotel_id: 0,
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
                .then(res => {
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
