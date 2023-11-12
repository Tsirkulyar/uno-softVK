<template>
<div class="itemBlock">
    <div class="item">
        <div class="wrapper">
                <div class="divP">
                    <img-comp :path="user.photo_200_orig" />
                    <p> {{ user.first_name }}</p>
                    <p>{{ user.last_name }}</p>
                </div>
                <div class="btnInfo">
                    <div v-if="!addFriend">
                        <img src="../assets/svg/22608.png" alt="friend" width="55"/>
                    </div>
                    <my-button
                    class="btn"
                     @click="clickBtn(user)"
                     >{{ textButton }}
                    </my-button>
                </div>
        </div>
    </div>
</div>
</template>
<script>
import ImgComp from './UI/ImgComp.vue';
import { useMovieStore } from '../stores/counter';
import MyButton from './UI/MyButton.vue';
    export default{
        data(){
            return{
                DataStore: useMovieStore(),
                textButton: 'add',
                addFriend: true,
            }
        },
        components:{
            MyButton,
            ImgComp
        },
        name: 'UserItem',
        props:{
            user:{
                type: Object,
                required: true
            }
        },
        methods:{
            clickBtn(user){
                if(this.addFriend){
                    this.DataStore.addBtn(user);
                    this.textButton = 'delete'
                    this.addFriend = !this.addFriend
                }else if(this.addFriend == false){
                    this.DataStore.deleteBtn(user);
                    this.textButton = 'add'
                    this.addFriend = !this.addFriend
                }
            }

        }
        }

</script>
<style scoped>
@import '../../src/assets/css/useritem.css';
</style>