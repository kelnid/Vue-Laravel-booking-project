<template>
    <div>
        <welcome></welcome>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div class="col" v-for="country in countries">
                <div class="card shadow-sm">
                    <div style="position: relative; text-align: center; color: black; font-size: larger">
                        <img :src="`storage/${country.image}`" style="width: 420px; height: 237px">
                        <div class="top-left" style="position: absolute; top: 8px; left: 16px;">{{ country.name }}</div>
                    </div>
                    <div class="card-body">
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                                <router-link :to="{ name: 'hotel.index', params: {id: country.id}}" class="btn btn-sm btn-outline-secondary"><strong>View</strong></router-link>
                                <a href="" class="btn btn-sm btn-outline-secondary">edit</a>
                                <a href="" class="btn btn-sm btn-outline-secondary">add</a>
                            </div>
                            <button class="btn btn-sm btn-outline-danger" @click="$store.dispatch('deleteCountry', country.id)">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import Welcome from "../layouts/Welcome";

export default {
    components: {
        Welcome
    },

    computed: {
      countries() {
          return this.$store.getters.countries
      }
    },

    mounted() {
        this.$store.dispatch('getCountries')
    },

}
</script>

<style scoped>

</style>
