<template>
    <div>
        <v-header></v-header>
        <div class="container pt-5 w-25">
            <div class="mb-3 shadow">
                <input v-validate="'required|min:3'" v-model="name" type="text"  name="name" placeholder="Страна" class="form-control">
                <div v-show="errors.has('name')" class="help-block alert alert-danger">{{ errors.first('name') }}</div>
            </div>
            <div class="mb-3">
                <input v-validate="'image'" data-vv-as="image" type="file" @change="addFile" name="image" id="image" class="form-control">
                <div v-show="errors.has('image')" class="help-block alert alert-danger">{{errors.first('image') }}</div>
            </div>
            <div class="mb-3">
                <button class=" btn btn-primary" @click.prevent="updateCountry">Обновить</button>
            </div>
        </div>
    </div>
</template>

<script>
import router from "../../router";
import {axiosInstance} from "../../service/api";

export default {
    name: "Edit",
    data() {
        return {
            name: null,
            image: null
        }
    },
    mounted() {
        this.getCountry()
    },
    methods:{
        getCountry() {
            axiosInstance.get(`countries/${this.$route.params.id}`)
                .then(res=>{
                    this.name = res.data.name
                    this.image = res.data.image
                })
        },
        addFile(event) {
            this.image = event.target.files[0]
        },
        updateCountry() {
            this.$validator.validateAll().then((result) => {
                if (result) {
                    let formData = new FormData()
                    formData.append('_method', 'PATCH');
                    formData.append('name', this.name)
                    if(this.image) {
                        formData.append('image', this.image)
                    }
                    axiosInstance.post(`countries/${this.$route.params.id}`, formData )
                        .then(res => {
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
