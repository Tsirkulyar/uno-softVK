<template>
    <div class="dialog1" v-if="showInfo" @click.stop="hideDialog">
      <div @click.stop class="dialog__content1">
        <slot></slot>
      </div>
    </div> 
  </template>
  
  <script>
  import MyButton from './MyButton.vue';
  export default {
    name: "my-dialog-info",
    components:{
        MyButton
    },
    props: {
      showInfo: {
        type: Boolean,
        default: false
      }
    },

    methods: {
      hideDialog(){
        this.$emit('update:showInfo', false)
      },
    }
  }
  </script>
  <style scoped>
  .dialog1{
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    /* position: absolute; */
    display: flex;
  
  }
  .dialog__content1{
    margin: auto;
    background: aliceblue;
    border-radius: 12px;
    min-height: 50px;
    min-width: 300px;
    max-width: 900px;
    padding: 20px;
  }
  </style>