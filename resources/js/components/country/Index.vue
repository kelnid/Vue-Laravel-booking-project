<template>
    <div>
        <v-header></v-header>
        <welcome></welcome>
        <template v-if="role_id === 1">
            <div class="container">
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    <div class="col" v-for="country in countries">
                        <div class="card shadow-sm">
                            <div style="position: relative; text-align: center; color: black; font-size: larger">
                                <img :src="`storage/${country.image}`" style="width: 420px; height: 237px">
                                <div class="top-left" style="position: absolute; top: 8px; left: 16px;"><strong>{{ country.name }}</strong></div>
                            </div>
                            <div class="card-body">
                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="btn-group">
                                        <router-link :to="{ name: 'hotel.index', params: {id: country.id}}" class="btn btn-outline-primary shadow">Перейти</router-link>
                                        <router-link :to="{ name: 'country.edit', params: {id: country.id}}" class="btn btn-outline-primary shadow">Редактировать</router-link>
                                    </div>
                                    <button class="btn btn-outline-danger" @click="showMyModal(country.id)">Удалить</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <country-delete v-if="showModal" @close="showModal = false">
                        <template v-slot:header>
                            Подтверждение удаления
                        </template>
                        <template v-slot:body>
                            Действительно хотите удалить?
                        </template>
                        <template v-slot:footer>
                            <button class="btn btn-outline-danger" @click="deleteCountry(country_id)">Удалить</button>
                            <button class="btn btn-outline-primary" @click="showModal = false">Отмена</button>
                        </template>
                    </country-delete>
                </div>
            </div>
        </template>
        <template v-if="role_id === 2 || role_id === null">
            <div class="container">
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    <div class="col" v-for="country in countries">
                        <div class="card shadow">
                            <div style="position: relative; text-align: center; color: black; font-size: larger">
                                <img :src="`storage/${country.image}`" style="width: 420px; height: 237px">
                                <div class="top-left" style="position: absolute; top: 8px; left: 16px;">{{ country.name }}</div>
                            </div>
                            <div class="card-body">
                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="btn-group">
                                        <router-link :to="{ name: 'hotel.index', params: {id: country.id}}" class="btn btn-outline-primary shadow"><strong>Перейти</strong></router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </div>
</template>

<script>
import Welcome from "../layouts/Welcome";
import CountryDelete from "../modal/CountryDelete";
import {axiosInstance} from "../../service/api";

export default {
    components: {
        Welcome,
        CountryDelete,
    },
    data() {
        return {
            role_id: null,
            showModal: false,
            country_id: 0
        }
    },
    methods: {
        getUser() {
            this.role_id = JSON.parse(localStorage.getItem('role_id'))
        },
        showMyModal(id) {
            this.country_id = id
            this.showModal = true
        },
        deleteCountry(id) {
            axiosInstance.delete(`countries/${id}`)
                .then(res => {
                    this.$store.dispatch('getCountries')
                    this.showModal = false
                })
        },
    },
    computed: {
      countries() {
          return this.$store.getters.countries
      }
    },
    mounted() {
        this.$store.dispatch('getCountries')
        this.getUser()
    },
}
</script>

<style scoped>

</style>
