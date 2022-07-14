<template>
    <div>
        <v-header></v-header>
        <div class="container pt-5">
            <div class="container w-25">
                <div class="mb-3">
                    <input type="text" v-model="name" placeholder="name" class="form-control">
                </div>
                <div class="mb-3">
                    <input type="file" @change="addFile" id="image" class="form-control">
                </div>
                <div class="mb-3">
                    <button :disabled="!isDisabled" class=" btn btn-primary" @click="addCountry">Добавить страну</button>
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
            name: null,
            image: null
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
                .then(res=> {
                    console.log(res.data.message);
                    router.push({name: 'country.index'})
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
