<template>
    <div>
            <p>{{ wall.text }}</p>
    </div>
    <!-- <div class="line"></div> -->
</template>
<script>
export default{
    name: 'item-wall',
    props:{
        wall:{
            type: Object,
            required: true
        }
    }
}
</script>
<style>
.line{
    margin: auto;
    width: 100px;
    height: 1px;
    background-color: #000;
}
</style>