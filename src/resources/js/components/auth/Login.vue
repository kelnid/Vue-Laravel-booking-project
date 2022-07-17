<template>
    <div>
        <v-header></v-header>
        <form @submit.prevent="sendCredentials" class="container pt-5 w-25">
            <input placeholder="email" class="form-control mb-3" v-model.trim="details.email" v-validate="'required|email'" name="email" type="text">
            <div class="help-block alert alert-danger" v-show="errors.has('email')">{{ errors.first('email') }}</div>
            <input v-model.trim="details.password" type="password" v-validate="'required|min:10'" placeholder="Пароль" name="password" class="form-control mb-3">
            <div class="help-block alert alert-danger" v-show="errors.has('password')">{{ errors.first('password') }}</div>
            <template v-for="item in showErrors.email">
                <div class="help-block alert alert-danger">{{item}}</div>
            </template>
            <div>
                <button type="submit" class="btn-outline-primary mb-3">Войти</button>
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
        ...mapGetters("Auth", ["user", "x_xsrf_token", "showErrors"]),
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
