<template>
    <div class="wrap_size">
        <img
        class="img_border"
        :src="path" alt="img" height="100">
    </div>
</template>
<script>
export default{
    name:'img-comp',
    props:{
        path:{
            type:String,
            required: true
        }
    }
}
</script>
<style scoped>
.wrap_size{
    width: 100px;
    border-radius: 10px;
    text-align: center;
}
.img_border{
    border-radius: 7px;
}
</style>