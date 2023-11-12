<template>
    <div>
    <div class="wrap">
        <select 
        v-model="DataStore.selected"
        @input="this.Selected()"
        class="input"
        >
            <option hidden disabled selected value>Как сортируем?</option>
            <option
             v-for="opt in DataStore.SelectedArr"
             :value="opt.value"
            >
                {{ opt.title }}
            </option>
        </select>
    </div>
    </div>
</template>
<script>
import { useMovieStore } from '../../stores/counter';
export default{
    name: 'selected-block',
    data(){
        return{
            DataStore: useMovieStore()
        }
    },
    methods:{
        Selected(){
            setTimeout(this.DataStore.SortByAbc, 1000)
        }
    },
}
</script>
<style>
@import '../../assets/css/selectedBlock.css';
</style>