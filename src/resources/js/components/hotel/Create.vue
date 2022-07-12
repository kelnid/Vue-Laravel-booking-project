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
                    <select v-model="country_id" name="county_id">
                        <template v-for="country in countries">
                            <option :value="country.id">
                                {{ country.name }}
                            </option>
                        </template>
                    </select>
                </div>

                <div class="mb-3">
                    <input @click.prevent="store" type="submit" value="Add" class=" btn btn-primary">
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
            country_id: null,
        }
    },
    mounted() {
        this.$store.dispatch('getCountries')
    },
    computed: {
        countries() {
            return this.$store.getters.countries
        }
    },
    methods: {
        store() {
            axios.post('/api/hotels', { name: this.name, address: this.address, description: this.description,country_id: this.country_id,  })
                .then(res => {
                    console.log(res);
                    // router.push({ name: 'country.index' })
                })
        },
    }
}
</script>

<style scoped>

</style>
