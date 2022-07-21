<template>
    <div>
        <v-header></v-header>
        <div class="pt-5 container w-25">
            <div class="text-center">
                <p><strong>Регистрация</strong></p>
            </div>
            <label class="form-label" for="form2Example1">Логин</label>
            <input v-model.trim="details.name" v-validate="'required|min:5'" type="text" name="name"
                   class="form-control mb-3">
            <div class="help-block alert alert-danger" v-show="errors.has('name')">{{ errors.first('name') }}</div>
            <label class="form-label" for="form2Example1">Почта</label>
            <input class="form-control mb-3" v-model="details.email" v-validate="'required|email'"
                   name="email" type="email">
            <div class="help-block alert alert-danger" v-show="errors.has('email')">{{ errors.first('email') }}</div>
            <label class="form-label" for="form2Example1">Пароль</label>
            <input v-model.trim="details.password" class="form-control mb-3" v-validate="'required|min:8'" name="password"
                   type="password" :class="{'is-danger': errors.has('password')}" ref="password">
            <div v-show="errors.has('password')" class="help-block alert alert-danger">{{errors.first('password') }}</div>
            <label class="form-label" for="form2Example1">Подтверждение пароля</label>
            <input v-model.trim="details.password_confirmation" class="form-control mb-3"
                   v-validate="'required|confirmed:password'" name="password_confirmation" type="password"
                   :class="{'is-danger': errors.has('password_confirmation')}" data-vv-as="password">
            <div v-show="errors.has('password_confirmation')" class="help-block alert alert-danger">
                {{ errors.first('password_confirmation') }}
            </div>
            <div class="text-center">
                <button @click.prevent="sendCredentials" type="submit" class="btn btn-primary btn-block mb-4">Зарегистрироваться</button>
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
    name: "Registration",
    data() {
        return {
            details: {
                name: '',
                email: '',
                password: '',
                password_confirmation: '',
                role_id: 2,
            }
        }
    },
    computed: {
        ...mapGetters("Auth", ["user", "token"]),
    },
    methods: {
        ...mapActions("Auth", ["Register", "getUserData"]),

        sendCredentials() {
            this.$validator.validateAll().then((result) => {
                if (result) {
                    return this.Register(this.details);
                }
            });
        },
    },
}


</script>

<style scoped>

</style>
