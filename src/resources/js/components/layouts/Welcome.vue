<template>
    <div>
        <section class="py-5 text-center container">
            <div class="row py-lg-5">
                <div class="col-lg-6 col-md-8 mx-auto">
                    <h1 class="fw-light">Добро пожаловать!</h1>
                    <p class="lead text-muted">Хороший отель залог хорошего путешествия.
                        Выберите страну и забронируйте жилье с бесплатной отменой прямо сейчас!
                    </p>
                    <p>
                        <router-link class="btn btn-outline-primary" :to="{ name: 'country.create' }">Добавить страну</router-link>
                    </p>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: "Welcome"
}
</script>

<style scoped>

</style>
