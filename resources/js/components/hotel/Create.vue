<template>
    <div>
        <v-header></v-header>
        <div class="container pt-5 w-25">
            <div class="mb-3">
                <input v-validate="'required|min:8'" name="name" type="text" v-model="name" placeholder="Название" class="form-control">
                <div v-show="errors.has('name')" class="help-block alert alert-danger">{{ errors.first('name') }}</div>
            </div>
            <div class="mb-3">
                <input v-validate="'required|min:4'" type="text" v-model="address" name="address" placeholder="Адрес" class="form-control">
                <div v-show="errors.has('address')" class="help-block alert alert-danger">{{errors.first('address') }}</div>
            </div>
            <div class="mb-3">
                <textarea v-validate="'required|min:10'" name="description" type="text" v-model="description" placeholder="Описание" class="form-control" rows="3"></textarea>
                <div v-show="errors.has('description')" class="help-block alert alert-danger">{{ errors.first('description') }}</div>
            </div>
            <div class="mb-3">
                <input v-validate="'required|image'" type="file" @change="addFile" name="image" id="image" class="form-control">
                <div v-show="errors.has('image')" class="help-block alert alert-danger">{{errors.first('image') }}</div>
            </div>
            <div class="mb-3">
                <select style="width: 170px" class="form-select" v-model="country_id" name="county_id">
                    <option disabled value="0">
                        Выберите страну
                    </option>
                    <template v-for="country in countries">
                        <option :value="country.id">
                            {{ country.name }}
                        </option>
                    </template>
                </select>
            </div>
            <div class="mb-3">
                <button :disabled="!isDisabled" @click.prevent="addHotel" class=" btn btn-primary">Добавить отель
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import router from "../../router";
import {axiosInstance} from "../../service/api";

export default {
    name: "Create",
    data() {
        return {
            name: null,
            address: null,
            description: null,
            country_id: 0,
        }
    },
    mounted() {
        this.$store.dispatch('getCountries')
    },
    computed: {
        countries() {
            return this.$store.getters.countries
        },
        isDisabled() {
            return this.name && this.address && this.description && this.country_id && this.image
        }
    },
    methods: {
        addHotel() {
            this.$validator.validateAll().then((result) => {
                if (result) {
                    let formData = new FormData()

                    formData.append('name', this.name)
                    formData.append('image', this.image)
                    formData.append('address', this.address)
                    formData.append('description', this.description)
                    formData.append('country_id', this.country_id)
                    formData.append('image', this.image)

                    axiosInstance.post('hotels', formData)
                        .then(res => {
                            router.push({name: 'country.index'})
                        })
                }
            });
        },
        addFile(event) {
            this.image = event.target.files[0]
        }
    }
}
</script>

<style scoped>

</style>
