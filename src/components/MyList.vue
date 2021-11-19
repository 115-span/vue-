<template>
    <ul class="todo-main">
        <MyItem v-for="item in Items" :key="item.itemId" :itemObj="item"/>
    </ul>
</template>

<script>
    import MyItem from './MyItem.vue'
    export default {
        name:"MyList",
        props:['Items'],
        components:{
            MyItem
        },
    }
</script>

<style>
    /*main*/
    .todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
    }

    .todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
    }
</style>