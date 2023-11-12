<template>
    <div class="container">
    <div v-for="friend in DataStore.ListFriend">
        <friend-item :friend="friend"/>
    </div>
    </div>
</template>
<script>
import FriendItem from './FriendItem.vue';
import { useMovieStore } from '../stores/counter';
export default{
    name: 'friend-list',
    components:{
        FriendItem
    },
    data(){
        return{
            DataStore : useMovieStore()
        }
    },
}
</script>
<style>
@import '../assets/css/friendList.css';
</style>