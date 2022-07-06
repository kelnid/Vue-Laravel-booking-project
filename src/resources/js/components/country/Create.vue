<template>
    <div class="w-25">
        <div class="mb-3">
            <input type="text" v-model="name" placeholder="name" class="form-control">
        </div>
        <div class="mb-3">
            <input @click.prevent="store" type="submit" value="Add" class=" btn btn-primary">
        </div>
    </div>
</template>

<script>

export default {
    name: "Create",

    data() {
        return {
            name:null,
        }
    },

    methods: {
        store() {
            axios.post('/api/countries', { name:this.name })
                .then(res => {
                    this.$router.push({ name: 'country.index' }) //редирект через роутер
                })
        },
    },
    // computed: {
    //     isDisabled() {
    //         return this.name && this.age && this.job
    //     }
    // }
}
</script>

<style scoped>

</style>
