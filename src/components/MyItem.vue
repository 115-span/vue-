<template>
        <li>
          <label>
            <input type="checkbox" :checked="itemObj.done" @change="changeChecks(itemObj.itemId)"/>
            <span>{{itemObj.itemName}}</span>
          </label>
          <button class="btn btn-danger"  @click="deleteTodo(itemObj.itemId)" >删除</button>
        </li>
</template>

<script>
    export default {
        name:"MyItem",
        props:['itemObj',],   
        methods: {
            changeChecks(id){
                // this.changeCheck(id);
                this.$bus.$emit('changeStatus',id);
            },
            deleteTodo(id){
                this.$bus.$emit('deleteItem',id)
            }
        },
    }

</script>

<style>
    /*item*/
    li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
    }

    li label {
    float: left;
    cursor: pointer;
    }

    li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
    }

    li button {
    float: right;
    display: none;
    margin-top: 3px;
    }

    li:before {
    content: initial;
    }

    li:last-child {
    border-bottom: none;
    }

    li:hover{
        background-color: rgb(112, 119, 88);
    }

    li button{
       display: block;
    }
</style>