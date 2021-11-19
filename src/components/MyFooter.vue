<template>
      <div class="todo-footer">
        <label>
          <input type="checkbox" v-model="allChecked"  @click="changeStatus"/>
        </label>
        <span>
          <span>{{denoCount}} :已完成</span> / 全部:{{count}}
        </span>
        <button class="btn btn-danger" @click="deleteItems">清除已完成任务</button>
      </div>
</template>

<script>
    export default {
        name:"MyFooter",
        data(){
          return {
            allChecked:false
          }
        },
        props:[
          //计算属性
          'count','denoCount',
          //两个方法
          'changeCheckStatus'],
          methods: {
            changeStatus(){
              this.changeCheckStatus(this.allChecked);
            },
            deleteItems(){
              this.$emit('deleteFinish');
            }
          },
    }
</script>

<style>
    /*footer*/
    .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
    }

    .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
    }

    .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
    }

    .todo-footer button {
    float: right;
    margin-top: 5px;
    }
</style>