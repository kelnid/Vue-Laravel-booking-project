<template>
    <div>
        <v-header></v-header>
        <div class="container pt-5 w-25">
            <div class="mb-3 shadow">
                <input v-validate="'required|min:3'" v-model="name" type="text"  name="name" placeholder="Страна" class="form-control">
                <div v-show="errors.has('name')" class="help-block alert alert-danger">{{ errors.first('name') }}</div>
            </div>
            <div class="mb-3">
                <input v-validate="'required|image'" data-vv-as="image" type="file" name="image" id="image" class="form-control">
<!--                <div v-show="errors.has('image')" class="help-block alert alert-danger">{{errors.first('image') }}</div>-->
            </div>
            <div class="mb-3">
                <button class=" btn btn-primary" @click.prevent="updateCountry">Обновить</button>
            </div>
        </div>
    </div>
</template>

<script>
import router from "../../router";

export default {
    name: "Edit",
    data() {
        return {
            name: null,
        }
    },
    mounted() {
        this.getCountry()
    },
    methods:{
        getCountry() {
            axios.get(`/api/countries/${this.$route.params.id}`)
                .then(res=>{
                    this.name = res.data.name
                })
        },
        updateCountry() {
            axios.patch(`/api/countries/${this.$route.params.id}`, {name: this.name})
                .then(res=>{
                    router.push({name: 'country.index'})
                    console.log(res);
                })
        }
    }
}
</script>

<style scoped>

</style>
