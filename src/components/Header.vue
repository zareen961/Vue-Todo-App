<template>
    <div class="headerWrapper">
        <h2 class="header">{{title}}</h2>
    </div>
</template>

<script>
export default {
    name:'Header',
    props:{
        title:{
            type: String,
            default:'My Vue Todo Application'
        }
    }
}
</script>

<style scoped>
.headerWrapper{
    display: flex;
    background: cadetblue;
}
    h2{
        margin: 70px auto 10px;
        border-bottom: 1px solid #fff;
        padding: 0 0 10px;
        width: fit-content;
        color: #fff;
    }
</style>