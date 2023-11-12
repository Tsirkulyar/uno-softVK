<template>
 <div v-for="user in DataStore.ListUsers">
        <user-item :user="user"/>
    </div>
</template>
<script>
import UserItem from './UserItem.vue';
import { useMovieStore } from '../stores/counter';

export default{
    data(){
        return{
            DataStore: useMovieStore()
        }
    },
    components:{
        UserItem
    },
    name: 'users-list',
    methods:{
        getToRaw(){
            console.log(this.DataStore.ListUsers)
        }
    }

}

</script>
<style>

</style>