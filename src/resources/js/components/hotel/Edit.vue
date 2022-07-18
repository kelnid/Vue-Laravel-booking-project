<template>
    <div>
        <v-header></v-header>
        <div class="container pt-5 w-25">
            <div class="mb-3 shadow">
                <input v-validate="'required|min:3'" v-model="name" type="text" name="name" placeholder="Страна" class="form-control">
                <div v-show="errors.has('name')" class="help-block alert alert-danger">{{ errors.first('name') }}</div>
            </div>
            <div class="mb-3 shadow">
                <input v-validate="'required|min:7'" v-model="address" type="text"  name="address" placeholder="Страна" class="form-control">
                <div v-show="errors.has('address')" class="help-block alert alert-danger">{{ errors.first('address') }}</div>
            </div>
            <div class="mb-3 shadow">
                <textarea v-validate="'required|min:20'" name="description" type="text" v-model="description" class="form-control" rows="3"></textarea>
                <div v-show="errors.has('description')" class="help-block alert alert-danger">{{ errors.first('description') }}</div>
            </div>
            <div class="mb-3">
                <input v-validate="'image'" @change="addFile" data-vv-as="image" type="file" name="image" id="image" class="form-control">
                <div v-show="errors.has('image')" class="help-block alert alert-danger">{{errors.first('image') }}</div>
            </div>
            <div class="mb-3">
                <select v-model="country_id" name="county_id">
                    <template v-for="country in countries">
                        <option :value="country.id">
                            {{ country.name }}
                        </option>
                    </template>
                </select>
            </div>
            <div class="mb-3">
                <button class=" btn btn-primary" @click.prevent="updateHotel">Обновить</button>
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
            address: null,
            description: null,
            country_id: null,
            image: null
        }
    },
    computed:{
        countries() {
            return this.$store.getters.countries
        },
    },
    mounted() {
        this.getHotel()
        this.$store.dispatch('getCountries')
    },
    methods:{
        getHotel() {
            axios.get(`/api/hotels/show/${this.$route.params.id}`)
                .then(res => {
                    this.name = res.data.name
                    this.address = res.data.address
                    this.description = res.data.description
                    this.country_id = res.data.country_id
                })
        },
        addFile(event) {
            this.image = event.target.files[0]
        },
        updateHotel() {
            this.$validator.validateAll().then((result) => {
                if (result) {
                    let formData = new FormData()
                    formData.append('_method', 'PATCH');
                    formData.append('address', this.address)
                    formData.append('description', this.description)
                    formData.append('name', this.name)
                    formData.append('country_id', this.country_id)
                    if(this.image) {
                        formData.append('image', this.image)
                    }
                    axios.post(`/api/hotels/${this.$route.params.id}`, formData )
                        .then(res => {
                            router.push({name: 'hotel.show'})
                        })
                }
            });
        },
    }
}
</script>

<style scoped>

</style>
