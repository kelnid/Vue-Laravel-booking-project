<template>
    <div class="container" style="display: flex">
        <div class="row row-cols-3" style="padding-top: 200px; padding-right: 20px">
            <div class="col">
                <div class="card" style="width: 300px;">
                    <div class="card-body">
                        <strong class="card-title" style="color: black">{{ room.name }}</strong>
                        <p class="card-text" style="color: black">Площадь: {{ room.area }} м²</p>
                        <p class="card-text" style="color: black">Цена: {{ room.price }} UAH</p>
                        <p class="card-text" style="color: black">{{ room.bed }}</p>
                        <HotelDatePicker :i18n="settings"> :disabledDates="['2022-07-08', '2022-07-09', '2022-07-10' ]">></HotelDatePicker>
                        <div class="pt-2">
                            <button type="submit" class="btn btn-primary">Забронировать</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import HotelDatePicker from 'vue-hotel-datepicker'
import 'vue-hotel-datepicker/dist/vueHotelDatepicker.css';

export default {
    components: {
        HotelDatePicker,
    },
    name: "Show",
    data() {
        return {
            room: [],
            settings: {
                night: 'Ночь',
                nights: 'Ночи',
                'day-names': ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
                'check-in': 'Заезд',
                'check-out': 'Выселение',
                'month-names': ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
            }
        }
    },
    mounted() {
        this.getRoom()
    },
    methods: {
        getRoom() {
            axios.get(`/api/rooms/show/${this.$route.params.id}`)
                .then(res => {
                    console.log(res.data);
                    this.room = res.data
                })
        }
    }
}
</script>

<style scoped>

</style>
