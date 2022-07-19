<template>
    <div>
        <v-header></v-header>
        <div class="pt-5 container w-25">
            <input v-model.trim="details.name" v-validate="'required|min:5'" type="text" name="name" placeholder="Имя"
                   class="form-control mb-3">
            <div class="help-block alert alert-danger" v-show="errors.has('name')">{{ errors.first('name') }}</div>
            <input placeholder="email" class="form-control mb-3" v-model="details.email" v-validate="'required|email'"
                   name="email" type="email">
            <div class="help-block alert alert-danger" v-show="errors.has('email')">{{ errors.first('email') }}</div>
            <input v-model.trim="details.password" class="form-control mb-3" v-validate="'required|min:8'" name="password"
                   type="password" :class="{'is-danger': errors.has('password')}" placeholder="Пароль" ref="password">
            <div v-show="errors.has('password')" class="help-block alert alert-danger">{{errors.first('password') }}
            </div>
            <input v-model.trim="details.password_confirmation" class="form-control mb-3"
                   v-validate="'required|confirmed:password'" name="password_confirmation" type="password"
                   :class="{'is-danger': errors.has('password_confirmation')}" placeholder="Подтвердите пароль"
                   data-vv-as="password">
            <div v-show="errors.has('password_confirmation')" class="help-block alert alert-danger">
                {{ errors.first('password_confirmation') }}
            </div>
            <button @click.prevent="sendCredentials" type="submit" class="btn btn-outline-primary">Зарегистрироваться</button>
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
