<template>
    <div>
        <v-header></v-header>
        <div class="container">
            <div class="container" style="display: flex; width: 1140px">
                <div class="card mb-3 mt-5 shadow" style="width: 1295px; height: auto; margin: 0 auto;">
                    <img :src="`../../../storage/${hotel.image}`">
                    <div class="card-body">
                        <h1 class="card-title"> {{ hotel.name }}</h1>
                        <div class="stars mr-2">
                            <div class="class">
                                <input
                                    :disabled="role_id == null"
                                    @click="postRate(10)" class="star star-10" id="star-10" type="radio"
                                    :checked="Math.round(rate) === 10"
                                    name="star"/>
                                <label class="star star-10" for="star-10"></label>
                                <input
                                    :disabled="role_id == null"
                                    @click="postRate(9)" class="star star-9" id="star-9" type="radio"
                                    :checked="Math.round(rate) === 9"
                                    name="star"/>
                                <label class="star star-9" for="star-9"></label>
                                <input
                                    :disabled="role_id == null"
                                    @click="postRate(8)" class="star star-8" id="star-8" type="radio"
                                    :checked="Math.round(rate) === 8"
                                    name="star"/>
                                <label class="star star-8" for="star-8"></label>
                                <input
                                    :disabled="role_id == null"
                                    @click="postRate(7)" class="star star-7" id="star-7" type="radio"
                                    :checked="Math.round(rate) === 7"
                                    name="star"/>
                                <label class="star star-7" for="star-7"></label>
                                <input
                                    :disabled="role_id == null"
                                    @click="postRate(6)" class="star star-6" id="star-6" type="radio"
                                    :checked="Math.round(rate) === 6"
                                    name="star"/>
                                <label class="star star-6" for="star-6"></label>
                                <input
                                    :disabled="role_id == null"
                                    @click="postRate(5)" class="star star-5" id="star-5" type="radio"
                                    :checked="Math.round(rate) === 5"
                                    name="star"/>
                                <label class="star star-5" for="star-5"></label>
                                <input
                                    :disabled="role_id == null"
                                    @click="postRate(4)" class="star star-4" id="star-4" type="radio"
                                    :checked="Math.round(rate) === 4"
                                    name="star"/>
                                <label class="star star-4" for="star-4"></label>
                                <input
                                    :disabled="role_id == null"
                                    @click="postRate(3)" class="star star-3" id="star-3" type="radio"
                                    :checked="Math.round(rate) === 3"
                                    name="star"/>
                                <label class="star star-3" for="star-3"></label>
                                <input
                                    :disabled="role_id == null"
                                    @click="postRate(2)" class="star star-2" id="star-2" type="radio"
                                    :checked="Math.round(rate) === 2"
                                    name="star"/>
                                <label class="star star-2" for="star-2"></label>
                                <input
                                    :disabled="role_id == null"
                                    @click="postRate(1)" class="star star-1" id="star-1" type="radio"
                                    :checked="Math.round(rate) === 1"
                                    name="star"/>
                                <label class="star star-1" for="star-1"></label>
                            </div>
                        </div>
                        <div class="mx-8">
                            Оценка:
                            <span id="exact-rating" class="mt-2 text-3xl">{{ rate }}</span>
                        </div>
                        <p class="card-title">{{ hotel.address }}</p>
                        <p class="card-text">{{ hotel.description }}</p>
                        <button @click="showMyModal(hotel.id)" class="btn btn-outline-primary shadow">Комментарии
                        </button>
                        <button class="btn btn-outline-primary shadow">Редактировать</button>
                    </div>
                </div>
            </div>
            <ShowComments v-if="showModal" @close="showModal = false">
                <template v-slot:header>
                    Комментарии
                </template>
                <template v-slot:body>
                    <div class="container">
                        <div>
                            <div>
                                <h2>Добавьте свой комментарий</h2>
                                <div>
                            <textarea v-model="description" class="form-control" name="description"
                                      placeholder="Оставьте свой комментарий"></textarea>
                                </div>
                                <div>
                                    <div>
                                    </div>
                                    <div>
                                        <button @click="addComment" class="btn btn-outline-primary">
                                            Добавьте комментарий
                                        </button>
                                        <button class="btn btn-outline-primary" @click="hideModal">Отмена</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <template v-for="comment in comments">
                            <div>
                                <div>
                                    <span>{{ comment.user.name }}</span>
                                    <div>
                                        <p>{{ comment.description }}</p>
                                        <div :class="isEdit(comment.id) ? '' : 'd-none'">
                                            <textarea v-model="commentDescription" class="form-control"
                                                      name="description"></textarea>
                                        </div>
                                    </div>
                                    <div>
                                        <div :class="isEdit(comment.id) ? 'd-none' : ''">
                                            <template v-if="+user === comment.user.id">
                                                <button @click="changeEditCommentId(comment.id, comment.description)"
                                                        class="btn btn-outline-primary">
                                                    Редактировать
                                                </button>
                                            </template>
                                        </div>
                                        <div :class="isEdit(comment.id) ? '' : 'd-none'">
                                            <button class="btn btn-outline-primary" @click="updateComment(comment.id)">
                                                Обновить
                                            </button>
                                            <button class="btn btn-outline-primary" @click="closeEditComment">
                                                Закрыть
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                </div>
                            </div>
                        </template>
                    </div>
                </template>
                <template v-slot:footer>

                </template>
            </ShowComments>
        </div>
        <div class="container" style="width: 1140px">
            <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col" v-for="(room, index) in hotel.rooms">
                    <div class="card h-100 shadow">
                        <div class="card-body h-100">
                            <h5 class="card-title">{{ room.name }}</h5>
                            <h5 class="card-title">{{ room.bed }}</h5>
                            <p class="card-text">Площадь: {{ room.area }} м²</p>
                            <p class="card-text">Price: {{ room.price }} UAH</p>
                            <router-link :to="{ name: 'room.show', params: {id: room.id} }"
                                         class="btn btn-outline-primary shadow">Перейти
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ShowComments from "../modal/ShowComments";

export default {
    name: "Show",
    components: {ShowComments},
    data() {
        return {
            hotel: [],
            description: null,
            comments: null,
            rate: null,
            role_id: null,
            showModal: false,
            hotel_id: 0,
            commentDescription: '',
            editCommentId: null,
            user: null
        }
    },
    mounted() {
        this.getHotel()
        this.getComments()
        this.getRate()
        this.getUser()
    },
    methods: {
        showMyModal(id) {
            this.hotel_id = id
            this.showModal = true
        },
        hideModal() {
            this.showModal = false
        },
        getHotel() {
            axios.get(`/api/hotels/show/${this.$route.params.id}`)
                .then(res => {
                    this.hotel = res.data
                })
        },
        addComment() {
            let hotel_id = this.$route.params.id
            axios.post(`/api/hotels/add-comment`, {
                description: this.description,
                hotel_id: hotel_id,
            })
                .then(res => {
                    this.description = ''
                    this.getComments()
                })
        },
        getComments() {
            axios.get(`/api/hotels/show-comment/${this.$route.params.id}`)
                .then(res => {
                    this.comments = res.data
                })
        },
        getRate() {
            axios.get(`/api/hotels/rate/${this.$route.params.id}`)
                .then(res => {
                    this.rate = res.data
                })
        },
        postRate(value) {
            let hotel = this.$route.params.id
            axios.post(`/api/hotels/post-rate`, {
                hotel_id: hotel,
                points: value
            })
                .then(res => {
                    setTimeout(() => {
                        this.getRate()
                    }, 500)
                })
        },
        getUser() {
            this.role_id = localStorage.getItem('role_id')
            this.user = localStorage.getItem('user_id')
        },
        isEdit(id) {
            return this.editCommentId === id
        },
        changeEditCommentId(id, comment) {
            this.editCommentId = id
            this.commentDescription = comment
        },
        closeEditComment() {
            this.editCommentId = null
        },
        updateComment(id) {
            axios.patch(`/api/hotels/update/${id}`, {
                description: this.commentDescription,
                film_id: this.$route.params.id
            }).then(res => {
                    this.closeEditComment()
                    this.getComments()
                })
        }
    }
}
</script>

<style scoped>
</style>
