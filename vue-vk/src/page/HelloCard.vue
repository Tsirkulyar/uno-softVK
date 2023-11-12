<template>
    <div class="container"> 
            <nav-site />
            <div class="div_card">
            <div>
                <img src="../assets/svg/call-img.png" width="560" height="520" >
            </div>
    <div class="card_text">
        <h1>ПРОЕКТ ДЛЯ УНО-СОФТ</h1>

        <h3>В проекте выполнены все требования технического задания,
            однако сам проект можно было бы дополнить различными технологиями (например сделать Composition API в хранилище pinia), 
        или, например, улучшить визуальную часть проекта (подключить SASS к проекту
         или добавить адаптив верстки к мобильным устройствам).
    Разумеется, если Вам будет интересны эти дополнения в данном проекте, можете дать мне на этот счет обратную связь,
и я обязательно добавлю!) </h3>
    <div class="wrapper_btn">
        <my-button >
            <router-link :to="{ name: 'listFirst' }" class="btn">
                начать
            </router-link>
        </my-button>
    </div>
    </div>


</div>


      </div>
</template>
<script>
import NavSite from '../components/layout/NavSite.vue';
import { useMovieStore } from '../stores/counter';
import MyButton from '../components/UI/MyButton.vue';

export default{
    name: 'hello-card',
    components:{
        MyButton,
        NavSite
    },
    data(){
        return{
            DataStore : useMovieStore()
        }
    },
    beforeMount() {
   this.DataStore.getVKaxios3()
},
}
</script>
<style scoped>
@import '../assets//css/hello.css';
.btn{
    text-decoration: none;
        color: #fff;
        background-color: #1771f1;
        border: none;
        text-decoration: none;
        color: #fff;
        width: 210px;
        height: 60px;
        font-size: 20px;
        border-radius: 25px;
}
</style>