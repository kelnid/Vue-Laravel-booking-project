<template>
    <div>
        <v-header></v-header>
        <div class="container pt-5 w-25">
            <div class="mb-3 shadow">
                <input v-validate="'required|min:3'" v-model="name" type="text"  name="name" class="form-control">
<!--                <div v-show="errors.has('name')" class="help-block alert alert-danger">{{ errors.first('name') }}</div>-->
            </div>
            <div class="mb-3 shadow">
                <input v-validate="'required|min:3'" v-model="bed" type="text"  name="bed" class="form-control">
                <!--                <div v-show="errors.has('name')" class="help-block alert alert-danger">{{ errors.first('name') }}</div>-->
            </div>
            <div class="mb-3 shadow">
                <input type="number" v-model="area" class="form-control">
                <!--                <div v-show="errors.has('name')" class="help-block alert alert-danger">{{ errors.first('name') }}</div>-->
            </div>
            <div class="mb-3 shadow">
                <input type="text" v-model="price" class="form-control">
                <!--                <div v-show="errors.has('name')" class="help-block alert alert-danger">{{ errors.first('name') }}</div>-->
            </div>
            <div class="mb-3">
                <input v-validate="'required|image'" data-vv-as="image" type="file" name="image" id="image" class="form-control">
<!--                <div v-show="errors.has('image')" class="help-block alert alert-danger">{{errors.first('image') }}</div>-->
            </div>
            <div class="mb-3">
                <select style="width: 280px" class="form-select" v-model="hotel_id" name="county_id">
                    <template v-for="hotel in hotels">
                        <option :value="hotel.id">
                            {{ hotel.name }}
                        </option>
                    </template>
                </select>
            </div>
            <div class="mb-3">
                <button class=" btn btn-primary" @click.prevent="updateRoom">Обновить</button>
            </div>
        </div>
    </div>
</template>

<script>
import router from "../../router";

export default {
    name: "Edit",
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
        this.getRoom()
    },
    methods:{
        getHotels() {
            axios.get('/api/hotels')
                .then(res => {
                    this.hotels = res.data
                })
        },
        getRoom() {
            axios.get(`/api/rooms/show/${this.$route.params.id}`)
                .then(res => {
                    console.log(res);
                    this.name = res.data.name
                    this.bed = res.data.bed
                    this.area = res.data.area
                    this.price = res.data.price
                    this.hotel_id = res.data.hotel_id
                })
        },
        updateRoom() {
            axios.patch(`/api/rooms/${this.$route.params.id}`, {
                name: this.name,
                bed: this.bed,
                area: this.area,
                price: this.price,
                hotel_id: this.hotel_id
            })
                .then(res=>{
                    router.push({name: 'country.index'})
                })
        }
    }
}
</script>

<style scoped>

</style>
