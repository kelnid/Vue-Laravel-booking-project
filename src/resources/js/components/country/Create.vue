<template>
    <div>
        <v-header></v-header>
        <div class="container pt-5">
            <div class="container w-25">
                <div class="mb-3">
                    <input v-validate="'required'" type="text" v-model="name" name="name" placeholder="name" class="form-control">
                    <div class="help-block alert alert-danger">{{ errors.first('name') }}</div>
                </div>
                <div class="mb-3">
                    <input v-validate="'required|image'" data-vv-as="image" type="file" @change="addFile" name="image" id="image" class="form-control">
                    <span style="color: red">{{ errors.first('image') }}</span>
                </div>
                <div class="mb-3">
                    <button  class=" btn btn-primary" @click="addCountry">Добавить страну</button>
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
            name: '',
            image: '',
            // errors: []
        }
    },
    computed: {
        isDisabled() {
            return this.name && this.image
        }
    },
    methods:{
        addCountry() {
            let formData = new FormData()

            formData.append('name', this.name)
            formData.append('image', this.image)

            axios.post('/api/countries/store', formData)
                .then(res => {
                    console.log(res.data.message);
                    router.push({name: 'country.index'})
                })
                .catch(error =>{
                    // this.errors = error.data
                    console.log(error);
                })
        },
        addFile(event) {
            this.image = event.target.files[0]
        }

    }
}

</script>

<style scoped>

</style>
