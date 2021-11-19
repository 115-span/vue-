<template>
    <div class="todo-header">
        <input type="text" placeholder="请输入要完成的任务" @keyup.enter="addItem">
    </div>
</template>

<script>
    export default {
        name:"MyHeader",
        methods:{
            addItem(event){
                //需要调用父类添加元素
                // console.log(event.target.value);
                const todoObj = {itemId:Date.now(),itemName:event.target.value,done:false};
                console.log(todoObj);
                this.$emit('delivery',todoObj)
                event.target.value=""
            }
        }
    }
</script>

<style>
    /*header*/
    .todo-header input {
    width: 560px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;
    }

    .todo-header input:focus {
    outline: none;
    border-color: rgba(82, 168, 236, 0.8);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
    }
</style>