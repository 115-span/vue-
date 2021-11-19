<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <MyHeader @delivery="delivery"/>
      <MyList :Items="Items"/>
      <MyFooter :count="count" :denoCount="denoCount" :changeCheckStatus="changeCheckStatus" @deleteFinish="deleteFinish"/>
    </div>
  </div>
</template>

<script>
  import MyList from './components/MyList.vue';
  import MyHeader from './components/MyHeader.vue'
  import MyFooter from './components/MyFooter.vue';
  export default {
    name: 'App',
    components: {
      MyList,
      MyHeader,
      MyFooter
    },
    data(){
        return {
            Items:JSON.parse(localStorage.getItem('items')) || []
        }
    },
    computed:{
      //返回统计数据
      count(){
        
        return this.Items.length;
      },
      //返回已完成统计数据
      denoCount(){
        // console.log( this.Items.filter((item)=>{
        //   return item.done===true;
        // }));
        return this.Items.filter((item)=>{
          return item.done===true;
        }).length;
      },
    },
    methods:{
      //添加
      delivery(todoObj){
        this.Items.push(todoObj);
      },
      //改变id的状态
      changeStatus(todoID){
        this.Items.forEach((todo)=>{
          if(todo.itemId == todoID){
            todo.done = ! todo.done;
          }
        });
        console.log('我被调用')
      },
      //根据id删除
      deleteItem(id){
        this.Items = this.Items.filter((todo)=>{
          if(todo.itemId == id){
            return null;
          }
          return todo;
        })
      },
      //删除已完成的数据
      deleteFinish(){
        console.log("deleteFinish被调用了")
        this.Items = this.Items.filter((todo)=>{
          if(todo.done == true){
            return null;
          }
          return todo;
        });
      },
      //全选、全不选
      changeCheckStatus(checkFlag){
        this.Items.forEach((item)=>{
          item.done = !checkFlag;
        });
      }
    },
    watch:{
      //监视allChecked属性
       allChecked(){
        this.Items.forEach((todo)=>{
          if(todo.done == false){
              this.allChecked =false;
          }
        })
        this.allChecked = true;
      },
      Items:{
        deep:true,
        handler(value){
          localStorage.setItem('items',JSON.stringify(value));
        }
      }
    },
    mounted(){
      //绑定事件总线
      console.log(this.$bus)
      this.$bus.$on('changeStatus',this.changeStatus);
      this.$bus.$on('deleteItem',this.deleteItem);
       console.log(this.$bus)

       this.$bus.$emit('changeStatus',1637246101903)
    },
    beforeDestroy(){
      this.$bus.$off('changeStatus');
      this.$bus.$off('deleteItem');
    }
  }
</script>

<style >
  /*base*/
  body {
    background: #fff;
  }

  .btn {
    display: inline-block;
    padding: 4px 12px;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
  }

  .btn-danger {
    color: #fff;
    background-color: #da4f49;
    border: 1px solid #bd362f;
  }

  .btn-danger:hover {
    color: #fff;
    background-color: #bd362f;
  }

  .btn:focus {
    outline: none;
  }

  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>
