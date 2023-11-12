<template>
    <div class="container">
    <nav-site/>
    <div v-if="DataStore.loadingShow">
    <LoadList/>
    </div>
    <div class="text_title">
        <h1>Cписок потенциальных друзей</h1>
        <p>Добавьте людей из предложенного списка в друзья</p>
    </div>
    <div 
    class="textInfo"
    v-if="DataStore.ListFriend.length == 0"
    > 
        <div class="textInfoTitle"><h3>Обязательно добавьте друзей</h3></div>
    </div>
    <div class="btn_wrap" v-else-if="DataStore.ListFriend.length != 0">
    <my-button >
            <router-link :to="{ name: 'listsecond' }" class="btn">
       К списку друзей
      </router-link>
    </my-button>
    
    </div>
    <div class="list_wrap">
        <div>
        <div>
            <selected-block/>
        </div>
        <users-list/>
        </div>
    </div>
    </div>
</template>
<script>
import SelectedBlock from '../components/UI/SelectedBlock.vue';
import NavSite from '../components/layout/NavSite.vue';
import LoadList from '../components/UI/LoadList.vue';
import MyButton from '../components/UI/MyButton.vue';
import UsersList from '../components/UsersList.vue';
import { useMovieStore } from '../stores/counter';

export default{
    components:{
    UsersList,
    LoadList,
    NavSite,
    MyButton,
    SelectedBlock
},
    data(){
        return{
            DataStore : useMovieStore()
        }
    },
    beforeMount() {
   this.DataStore.getVkFriends()
},
}

</script>
<style scoped>
@import '../assets/css/addFriends.css';
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