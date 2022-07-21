<template>
    <div>
        <v-header></v-header>
        <form @submit.prevent="sendCredentials" class="container pt-5 w-25">
            <div class="container">
                <div class="text-center">
                    <p><strong>Авторизация</strong></p>
                </div>
                <label class="form-label" for="form2Example1">Email address</label>
                <input placeholder="email" class="form-control mb-3" v-model.trim="details.email" v-validate="'required|email'" name="email" type="text">
                <div class="help-block alert alert-danger" v-show="errors.has('email')">{{ errors.first('email') }}</div>
                <label class="form-label" for="form2Example2">Password</label>
                <input v-model.trim="details.password" type="password" v-validate="'required|min:10'" placeholder="Пароль" name="password" class="form-control mb-3">
                <div class="help-block alert alert-danger" v-show="errors.has('password')">{{ errors.first('password') }}</div>
                <div>
                    <button type="submit" class="btn btn-primary btn-block mb-4">Войти</button>
                </div>
                <div class="text-center">
                    <p>Не зарегистрированы? <router-link :to="{ name: 'user.registration' }">Зарегистрируйтесь!</router-link></p>
                </div>
            </div>
        </form>
    </div>
</template>

<script>

import {mapActions, mapGetters} from 'vuex';

export default {
    data() {
        return {
            details: {
                email: '',
                password: '',
            },
        }
    },
    computed: {
        ...mapGetters("Auth", ["user", "token"]),
    },
    methods: {
        ...mapActions("Auth", ["Login", "getUserData"]),

        sendCredentials() {
             this.$validator.validateAll().then((result) => {
                if (result) {
                   return this.Login(this.details);
                }
            });
        },
    },
}
</script>

<style scoped>

</style>
