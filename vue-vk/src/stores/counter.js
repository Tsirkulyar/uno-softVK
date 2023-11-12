import {defineStore} from 'pinia'
import axios from 'axios';
import {toRaw, unref, ref} from 'vue'

export const useMovieStore = defineStore('movieStore', {
    state: () =>({
      dialogVisible: false,
      selected:'',
      ListUsers: [],
      ListFriend: [],
      SelectOpt: false,
      SelectedArr:[
        {
          title:'Сортировка по имени',
          value: 'first_name'
        },
        // сделать селект для сортировки
        {
          title:'Сортировка по фамилии',
          value: 'last_name'
        }
      ],
      loadingShow: true,
    }),
    getters:{},
    actions:{
       getVKaxios3(){
        const config = {
          headers: {
            'Access-Control-Allow-Origin' : '*',
            'Content-Type': 'multipart/form-data; application/json; charset=utf-8',
          }
        };
        let promise = new Promise(function(resolve, reject) {
            resolve(axios.get(
            `https://api.vk.com/method/users.getFollowers?user_id=5178786&fields=bdate&access_token=afc49b43afc49b43afc49b43f6acd2ba11aafc4afc49b43cafb4eb6152e6f8c96801e71&v=5.131`,
            config
          ))
        });
        promise.then(
          res=>{
            this.ListUsers = toRaw(JSON.parse(JSON.stringify(res.data.response.items)));
            // this.loadingShow = true;
          }
        );
        },
      async getVkFriends(){
        const config = {
          headers: {
            'Access-Control-Allow-Origin' : '*',
            'Content-Type': 'multipart/form-data; application/json; charset=utf-8',
          }
        };
        const res = await fetch(`https://api.vk.com/method/users.getFollowers?user_id=5178786&fields=photo_200_orig,bdate,about,activities&access_token=afc49b43afc49b43afc49b43f6acd2ba11aafc4afc49b43cafb4eb6152e6f8c96801e71&v=5.131`,config);
        const data = await res.json()
        this.ListUsers = Object.freeze(data.response.items)
        console.log(this.ListUsers)
        this.loadingShow = false
      },
      async getVkWall(id){
        const config = {
          headers: {
            'Access-Control-Allow-Origin' : '*',
            'Content-Type': 'multipart/form-data; application/json; charset=utf-8',
          }
        };
        const res = await fetch(`https://api.vk.com/method/wall.get?owner_id=${id}&fields=photo_200_orig,bdate,about,activities&access_token=afc49b43afc49b43afc49b43f6acd2ba11aafc4afc49b43cafb4eb6152e6f8c96801e71&v=5.131`,config);
        const data = await res.json()
        console.log(data)
        // this.ListUsers = Object.freeze(data.response.items)
        // console.log(this.ListUsers)
        // this.loadingShow = false
        let arr = []
        arr = data.response.items
        return arr
      },

      addBtn(user){
        console.log(user)
          let arr =[]
          arr.push(user)
          this.ListFriend.unshift(...arr)
          console.log(toRaw(this.ListFriend))
        },

        deleteBtn(user){
          this.ListFriend = this.ListFriend.filter(p => p.id !== user.id)
          console.log(toRaw(this.ListFriend))
        },

        SortByAbc(){
            this.ListUsers = [...this.ListUsers].sort((user1, user2) => user1[this.selected]?.localeCompare(user2[this.selected]))
            console.log(this.ListUsers)
        },

      }
    },
    )



// export const useMovieStore = defineStore('movieStore', () => {
//   const ListUsers = ref([])

//   const getVkFriends = async() => {
//     const config = {
//       headers: {
//         'Access-Control-Allow-Origin' : '*',
//         'Content-Type': 'multipart/form-data; application/json; charset=utf-8',
//       }
//     };
//     const res = await fetch(`/api/users.getFollowers?user_id=5178786&fields=bdate&access_token=afc49b43afc49b43afc49b43f6acd2ba11aafc4afc49b43cafb4eb6152e6f8c96801e71&v=5.131`,config);
//     const data = await res.json()
//     ListUsers = data.response.items
//     console.log(ListUsers)
//     // this.loadingShow = false
//     console.log(loadingShow)


//   }
//   return {
//     ListUsers,
//     getVkFriends  }
// })


// // Удаление объекта
// const objectToDelete = toRaw(state);
// const deletedObject = unref(objectToDelete);
// delete state.value;