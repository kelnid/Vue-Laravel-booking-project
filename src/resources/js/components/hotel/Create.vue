<template>
    <div>
        <v-header></v-header>
        <div class="container pt-5">
            <div class="w-25">
                <div class="mb-3">
                    <input type="text" v-model="name" placeholder="name" class="form-control">
                </div>
                <div class="mb-3">
                    <input type="text" v-model="address" placeholder="Адрес" class="form-control">
                </div>
                <div class="mb-3">
                    <input type="text" v-model="description" placeholder="Описание" class="form-control">
                </div>
                <div class="mb-3">
                    <input type="file" @change="addFile" id="image" class="form-control">
                </div>
                <div class="mb-3">
                    <select v-model="country_id" name="county_id">
                        <option disabled value="0">
                            Выберите шото
                        </option>
                        <template v-for="country in countries">
                            <option :value="country.id">
                                {{ country.name }}
                            </option>
                        </template>
                    </select>
                </div>
                <div class="mb-3">
                    <button :disabled="!isDisabled" @click.prevent="addHotel" class=" btn btn-primary">Добавить отель</button>
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
            let formData = new FormData()

            formData.append('name', this.name)
            formData.append('image', this.image)
            formData.append('address', this.address)
            formData.append('description', this.description)
            formData.append('country_id', this.country_id)
            formData.append('image', this.image)

            axios.post('/api/hotels', formData)
                .then(res=> {
                    router.push({name: 'country.index'})
                })
        },

        addFile(event) {
            this.image = event.target.files[0]
        }
    }
}
</script>

<style scoped>

</style>
