<template>
    <div>
        <div v-for="wall in WallPosts">
            <item-wall :wall="wall"/>
        </div>
    </div>
</template>
<script>
import ItemWall from './ItemWall.vue';
import { useMovieStore } from '../stores/counter';
export default{
    name: 'list-wall',
    data(){
        return{
            DataStore: useMovieStore(),
        }
    },
    props:{
               WallPosts:{
            type: Array,
            required: true
        }
    },
    components:{
        ItemWall
    }
}
</script>
<style>

</style>