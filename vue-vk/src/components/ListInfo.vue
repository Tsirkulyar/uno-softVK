<template>
    <div>
        <div>
            <p>Фолловеры: {{ InfoAbout.followers }}</p>
            <p>Состоит в группах: {{ InfoAbout.groups }}</p>
            <p>Количество фото: {{ InfoAbout.photos }}</p>
            <p>Количество видео: {{ InfoAbout.videos }}</p>
            <p>Всего альбомов: {{ InfoAbout.albums }}</p>
        </div>
        </div>
</template>
<script>
export default{
    name: 'list-info',
    props:{
        InfoAbout:{
            type: Object,
            required: true
        }
    }
}
</script>
<style scoped>
div div p{
    font-size: 20px;
}

</style>