<template>
    <div>
        <v-header></v-header>
        <div class="pt-5 container w-25">
            <input v-model.trim="name" v-validate="'required|min:5'"  type="text" name="name" placeholder="Имя" class="form-control mb-3">
            <div class="help-block alert alert-danger" v-show="errors.has('name')">{{ errors.first('name') }}</div>
            <input placeholder="email" class="form-control mb-3" v-model="email" v-validate="'required|email'" name="email" type="email">
            <div class="help-block alert alert-danger" v-show="errors.has('email')">{{ errors.first('email') }}</div>
            <input v-model.trim="password" class="form-control mb-3" v-validate="'required|min:8'" name="password" type="password" :class="{'is-danger': errors.has('password')}" placeholder="Пароль" ref="password">
            <div v-show="errors.has('password')" class="help-block alert alert-danger">{{ errors.first('password') }}</div>
            <input v-model.trim="password_confirmation" class="form-control mb-3" v-validate="'required|confirmed:password'" name="password_confirmation" type="password" :class="{'is-danger': errors.has('password_confirmation')}" placeholder="Подтвердите пароль" data-vv-as="password">
            <div v-show="errors.has('password_confirmation')" class="help-block alert alert-danger">{{ errors.first('password_confirmation') }}</div>
            <template v-for="error in showErrors.email">
                <div class="help-block alert alert-danger">{{error}}</div>
            </template>
            <button @click.prevent="registration" type="submit" class="btn btn-outline-primary">Зарегистрироваться</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "Registration",
    data() {
        return {
            name: null,
            email: null,
            password: null,
            password_confirmation: null,
            role_id: 2,
            showErrors: []
        }
    },
    methods: {
        registration() {
            this.$validator.validateAll().then((result) => {
                if (result) {
                    axios.get('/sanctum/csrf-cookie')
                        .then(res => {
                            axios.post('/api/register',
                                {
                                    email: this.email,
                                    password: this.password,
                                    name: this.name,
                                    role_id: this.role_id,
                                    password_confirmation: this.password_confirmation,
                                })
                                .then(res => {
                                    localStorage.setItem('x_xsrf_token', res.config.headers['X-XSRF-TOKEN'])
                                    localStorage.setItem('role_id', JSON.stringify(res.data.role_id))
                                    localStorage.setItem('user_id', JSON.stringify(res.data.id))
                                    this.$router.push({name: 'country.index'})
                                })
                                .catch(error => {
                                    this.showErrors = error.response.data.errors
                                })
                        })
                }
            });
        }
    }
}


</script>

<style scoped>

</style>
