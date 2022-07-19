<template>
    <div>
        <v-header></v-header>
        <div class="container">
            <div class="container" style="display: flex; width: 1140px">
                <div class="card mb-3 mt-5 shadow" style="width: 1295px; height: auto; margin: 0 auto;">
                    <img :src="`../../../storage/${hotel.image}`">
                    <span class="position-absolute" style="
                    margin-left: 1050px;
                    margin-top: 20px; font-size: 20px;
                    border-radius: 8px 8px 8px 0;
                    background: #003580;
                    color: #fff;
                    text-align: center;
                    width: 40px;">
                        {{ rate }}
                    </span>
                    <div class="card-body">
                        <h1 class="card-title">{{ hotel.name }}</h1>
                        <div class="stars mr-2">
                            <div class="class">
                                <input
                                    :disabled="user == null"
                                    @click="postRate(5)" class="star star-5" id="star-5" type="radio"
                                    :checked="Math.round(rate) === 5"
                                    name="star"/>
                                <label class="star star-5" for="star-5"></label>
                                <input
                                    :disabled="user == null"
                                    @click="postRate(4)" class="star star-4" id="star-4" type="radio"
                                    :checked="Math.round(rate) === 4"
                                    name="star"/>
                                <label class="star star-4" for="star-4"></label>
                                <input
                                    :disabled="user == null"
                                    @click="postRate(3)" class="star star-3" id="star-3" type="radio"
                                    :checked="Math.round(rate) === 3"
                                    name="star"/>
                                <label class="star star-3" for="star-3"></label>
                                <input
                                    :disabled="user == null"
                                    @click="postRate(2)" class="star star-2" id="star-2" type="radio"
                                    :checked="Math.round(rate) === 2"
                                    name="star"/>
                                <label class="star star-2" for="star-2"></label>
                                <input
                                    :disabled="user == null"
                                    @click="postRate(1)" class="star star-1" id="star-1" type="radio"
                                    :checked="Math.round(rate) === 1"
                                    name="star"/>
                                <label class="star star-1" for="star-1"></label>
                            </div>
                        </div>
                        <strong class="card-title">Страна: {{ hotelCountry }}</strong>
                        <p class="card-title">Город: {{ hotel.address }}</p>
                        <p class="card-text">{{ hotel.description }}</p>
                        <button @click="showMyModal(hotel.id)" class="btn btn-outline-primary shadow">Комментарии
                        </button>
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
                                <template v-if="role_id === null">
                                    <div class="help-block alert alert-danger">
                                        Оставлять комментарии могут только
                                        <router-link :to="{ name: 'user.registration' }">зарегистрированные
                                        </router-link>
                                        пользователи
                                    </div>
                                </template>
                                <template v-if="role_id === 2 || role_id === 1">
                                    <!--                                    <textarea v-model="description" class="form-control" name="description"></textarea>-->
                                    <textarea v-validate="'required|min:8'" name="description" type="text"
                                              v-model="description" class="form-control" rows="3"></textarea>
                                    <div v-show="errors.has('description')" class="help-block alert alert-danger">
                                        {{ errors.first('description') }}
                                    </div>
                                </template>
                                <div>
                                    <div>
                                    </div>
                                    <div>
                                        <template v-if="role_id === 2 || role_id === 1">
                                            <button @click="addComment" class="btn btn-outline-primary">
                                                Добавьте комментарий
                                            </button>
                                        </template>
                                        <button class="btn btn-outline-primary" @click="hideModal">Отмена</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <template v-for="comment in items">
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
                    <Paginate
                        v-model="page"
                        :page-count="pageCount"
                        :click-handler="pageChangeHandler"
                        :prev-text="'Назад'"
                        :next-text="'Вперед'"
                        :container-class="'pagination'"
                        :page-class="'page-item'"
                        :page-link-class="'page-link '"
                        :prev-class="'page-item'"
                        :prev-link-class="'page-link'"
                        :next-class="'page-item'"
                        :next-link-class="'page-link'"
                        :active-class="'page-item active'"
                    />
                </template>
            </ShowComments>
        </div>
        <div class="container" style="width: 1140px">
            <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col" v-for="(room, index) in hotel.rooms">
                    <div class="card h-100 shadow">
                        <div class="card-body h-100">
                            <h3 class="card-title">{{ room.name }}</h3>
                            <p class="card-title">{{ room.bed }}</p>
                            <p class="card-text">Площадь: {{ room.area }} м²</p>
                            <p class="card-text">Цена: {{ room.price }} UAH</p>
                            <router-link :to="{ name: 'room.show', params: {id: room.id} }"
                                         class="btn btn-outline-primary shadow">Перейти
                            </router-link>
                            <template v-if="role_id === 1">
                                <router-link :to="{ name: 'room.edit', params: {id: room.id}}"
                                             class="btn btn-outline-primary shadow">Редактировать
                                </router-link>
                            </template>
                            <template v-if="role_id === 1">
                                <button class="btn btn-outline-danger shadow" @click="showRoomDelete(room.id)">Удалить
                                </button>
                            </template>
                        </div>
                    </div>
                </div>
                <room-delete v-if="showModalRoom" @close="showModalRoom = false">
                    <template v-slot:header>
                        Подтверждение удаления
                    </template>
                    <template v-slot:body>
                        Действительно хотите удалить?
                    </template>
                    <template v-slot:footer>
                        <button class="btn btn-outline-danger" @click="deleteRoom(room_id)">Удалить</button>
                        <button class="btn btn-outline-primary" @click="showModalRoom = false">Отмена</button>
                    </template>
                </room-delete>
            </div>
        </div>
    </div>
</template>

<script>
import ShowComments from "../modal/ShowComments";
import RoomDelete from "../modal/RoomDelete";
import PaginationMixin from "../../mixins/pagination.mixin";
import router from "../../router";

export default {
    name: "Show",
    mixins: [PaginationMixin],
    components: {ShowComments, RoomDelete},
    data() {
        return {
            role_id: null,
            hotel: [],
            description: null,
            comments: null,
            rate: null,
            showModal: false,
            showModalRoom: false,
            hotel_id: 0,
            room_id: 0,
            commentDescription: '',
            editCommentId: null,
            user: null,
            hotelCountry: null
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
        showRoomDelete(id) {
            this.room_id = id
            this.showModalRoom = true
        },
        hideModal() {
            this.showModal = false
        },
        getHotel() {
            axios.get(`/api/hotels/show/${this.$route.params.id}`)
                .then(res => {
                    this.hotelCountry = res.data.country.name
                    this.hotel = res.data
                })
        },
        addComment() {
            this.$validator.validateAll().then((result) => {
                if (result) {
                    let hotel_id = this.$route.params.id
                    axios.post(`/api/hotels/add-comment`, {
                        description: this.description,
                        hotel_id: hotel_id,
                    })
                        .then(res => {
                            this.description = ''
                            this.getComments()
                        })
                }
            });
        },
        getComments() {
            axios.get(`/api/hotels/show-comment/${this.$route.params.id}`)
                .then(res => {
                    this.comments = res.data
                    this.setupPagination(this.comments)
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
            }).then(res => {
                setTimeout(() => {
                    this.getRate()
                }, 500)
            })
        },
        deleteRoom(id) {
            axios.delete(`/api/rooms/delete/${id}`)
                .then(res => {
                    this.getHotel()
                    this.showModalRoom = false
                })
        },
        getUser() {
            this.role_id = JSON.parse(localStorage.getItem('role_id'))
            this.user = JSON.parse(localStorage.getItem('user_id'))
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
                hotel_id: this.$route.params.id
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
