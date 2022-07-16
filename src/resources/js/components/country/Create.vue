<template>
    <div>
        <v-header></v-header>
        <div class="container pt-5 w-25">
            <div class="mb-3 shadow">
                <input v-validate="'required|min:3'" type="text" v-model="name" name="name" placeholder="Страна"
                       class="form-control">
                <div v-show="errors.has('name')" class="help-block alert alert-danger">{{ errors.first('name') }}</div>
            </div>
            <div class="mb-3">
                <input v-validate="'required|image'" data-vv-as="image" type="file" @change="addFile" name="image"
                       id="image" class="form-control">
                <div v-show="errors.has('image')" class="help-block alert alert-danger">{{errors.first('image') }}</div>
            </div>
            <div class="mb-3">
                <button :disabled="!isDisabled" class=" btn btn-primary" @click.prevent="addCountry">Добавить страну</button>
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
            image: null,
        }
    },
    computed: {
        isDisabled() {
            return this.name && this.image
        }
    },
    methods: {
        // addCountry() {
        //     let formData = new FormData()
        //
        //     formData.append('name', this.name)
        //     formData.append('image', this.image)
        //
        //     axios.post('/api/countries/store', formData)
        //         .then(res => {
        //             console.log(res.data.message);
        //             router.push({name: 'country.index'})
        //         })
        // },
        addFile(event) {
            this.image = event.target.files[0]
        },
        addCountry() {
            this.$validator.validateAll().then((result) => {
                if (result) {
                    let formData = new FormData()

                    formData.append('name', this.name)
                    formData.append('image', this.image)

                    axios.post('/api/countries/store', formData)
                        .then(res => {
                            console.log(res.data.message);
                            router.push({name: 'country.index'})
                        })
                }
            });
        },
    }
}

</script>

<style scoped>

</style>
