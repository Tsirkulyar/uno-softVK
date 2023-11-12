<template>
    <div>
        <nav-site/>
        <div class="text">
            <h1>Список Ваших друзей</h1>
            <h3>Вы можете информацию о друзьях и их записях</h3>
        </div>
        <div class="list_wrap">
            <friend-list/>
        </div>
    </div>
</template>
<script> 
import NavSite from '../components/layout/NavSite.vue';
import SelectedBlock from '../components/UI/SelectedBlock.vue';
import FriendList from '../components/FriendList.vue';
import { useMovieStore } from '../stores/counter';
export default{
    name: 'list-friends',
    components:{
        FriendList,
        SelectedBlock,
        NavSite
    },
    data(){
        return{
            DataStore: useMovieStore()
        }
    }
}
</script>
<style scoped>
.text{
    text-align: center;
}
</style>