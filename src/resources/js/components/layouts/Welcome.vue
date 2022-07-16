<template>
    <div>
        <template v-if="role_id === 1" >
            <div class="py-5 text-center container">
                <div class="row py-lg-5">
                    <div class="col-lg-6 col-md-8 mx-auto">
                        <h1 class="fw-light">Добро пожаловать!</h1>
                        <p class="lead text-muted">Хороший отель залог хорошего путешествия.
                            Выберите страну и забронируйте жилье с бесплатной отменой прямо сейчас!
                        </p>
                        <p>
                            <router-link class="btn btn-outline-primary" :to="{ name: 'country.create' }">Добавить страну</router-link>
                            <router-link class="btn btn-outline-primary" :to="{ name: 'hotel.create' }">Добавить отель</router-link>
                            <router-link class="btn btn-outline-primary" :to="{ name: 'room.create' }">Добавить номер</router-link>
                        </p>
                    </div>
                </div>
            </div>
        </template>
        <template v-if="role_id === 2">
            <div class="py-5 text-center container">
                <div class="row py-lg-5">
                    <div class="col-lg-6 col-md-8 mx-auto">
                        <h1 class="fw-light">Добро пожаловать!</h1>
                        <p class="lead text-muted">Хороший отель залог хорошего путешествия.
                            Выберите страну и забронируйте жилье с бесплатной отменой прямо сейчас!
                        </p>
                    </div>
                </div>
            </div>
        </template>
    </div>
</template>

<script>
export default {
    name: "Welcome",
    data() {
        return {
            role_id: null
        }
    },
    mounted() {
        this.getUser()
    },
    methods: {
        getUser() {
            this.role_id = JSON.parse(localStorage.getItem('role_id'))
        },
    },
}
</script>

<style scoped>

</style>
