<template>
    <div>
        <v-header></v-header>
        <div class="container pt-5">
            <div class="w-25">
                <div class="mb-3">
                    <input type="text" v-model="name" placeholder="name" class="form-control">
                </div>
                <div class="mb-3">
                    <input @click.prevent="$store.dispatch('store',{name})" type="submit" value="Add" class=" btn btn-primary">
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "Create",

    data() {
        return {
            name: [],
        }
    },
}
</script>

<style scoped>

</style>
