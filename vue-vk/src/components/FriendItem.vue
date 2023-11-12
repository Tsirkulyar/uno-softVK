<template>
    <div>
    <div class="div_line">
        <div class="item">
            <div class="infoDiv">
            <img-comp :path="friend.photo_200_orig"/>
            <div class="text_item">
            <p> {{ friend.first_name }}</p>
            <p>{{ friend.last_name }}</p>
            </div>
        </div>

            <div class="btnDiv">
            <my-button 
            class="btn"
            @click="getVkWall(friend.id)">
                Записи со стены
            </my-button>
            
            <my-button 
            class="btnInfo"
            @click="getVkCounters(friend.id)">
                🛈
            </my-button>
            </div>
    </div>
        </div>

    </div>
<my-dialog v-model:show="show">
    <list-wall :WallPosts="WallPosts" />
</my-dialog>
<my-dialog-info v-model:showInfo="showInfo">
    <list-info :InfoAbout="InfoAbout"/>
</my-dialog-info>

</template>
<script>
import MyDialogInfo from './UI/MyDialogInfo.vue';
import MyDialog from '../components/UI/MyDialog.vue'
import ImgComp from './UI/ImgComp.vue';
import ListInfo from './ListInfo.vue';
import ListWall from './ListWall.vue';
import { useMovieStore } from '../stores/counter';
import MyButton from '../components/UI/MyButton.vue'
export default{
    props:{
        friend:{
            type: Object,
            required: true
        }
    },
    name: 'friend-item',
    components:{
        MyButton,
        ListWall,
        ListInfo,
        ImgComp,
        MyDialog,
        MyDialogInfo
    },
    data(){
        return{
            show: false,
            showInfo:false,
            DataStore: useMovieStore(),
            WallPosts: [],
            InfoAbout: {}
        }
    },
    methods:{
        async getVkCounters(id){
        this.showInfo = true
        const config = {
          headers: {
            'Access-Control-Allow-Origin' : '*',
            'Content-Type': 'multipart/form-data; application/json; charset=utf-8',
          }
        };
        const res = await fetch(`/api/users.get?user_ids=${id}&fields=counters&access_token=afc49b43afc49b43afc49b43f6acd2ba11aafc4afc49b43cafb4eb6152e6f8c96801e71&v=5.131`,config);
        const data = await res.json()
        this.InfoAbout = data.response[0].counters
        console.log(this.InfoAbout)
    },
    async getVkWall(id){
        this.show = true
        const config = {
          headers: {
            'Access-Control-Allow-Origin' : '*',
            'Content-Type': 'multipart/form-data; application/json; charset=utf-8',
          }
        };
        const res = await fetch(`/api/wall.get?owner_id=${id}&fields=photo_200_orig,bdate,about,activities&access_token=afc49b43afc49b43afc49b43f6acd2ba11aafc4afc49b43cafb4eb6152e6f8c96801e71&v=5.131`,config);
        const data = await res.json()
        console.log(data)
        this.WallPosts = data.response.items
        console.log(this.WallPosts)
      },
}
}
</script>
<style scoped>
@import '../assets/css/friendItem.css';
.btn{
    text-decoration: none;
        color: #fff;
        background-color: #1771f1;
        border: none;
        text-decoration: none;
        color: #fff;
        width: 170px;
        height: 60px;
        font-size: 20px;
        border-radius: 25px;
}
.btnInfo{
    text-decoration: none;
        color: #fff;
        background-color: #1771f1;
        border: none;
        text-decoration: none;
        color: #fff;
        width: 50px;
        height: 60px;
        font-size: 20px;
        border-radius: 20px;
}
</style>