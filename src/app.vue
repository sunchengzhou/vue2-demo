<template>
    <div id="app">
        <div id="cover">
            <Header></Header>
            <todo @add-item="addTodo"></todo>
            <Footer></Footer>
        </div>
    </div>
</template>
<script>
import Header from './todo/header.vue'
import Footer from './todo/footer.jsx'
import Todo from './todo/todo.vue'
import Item from './todo/item.vue'
import Tabs from './todo/tabs.vue'
  export default {
    components:{
        Header,
        Footer,
        Todo
    },
    data(){
      return {
        id:0,
        todoArr:[]
      }
    },
    methods:{
      addTodo(content){
        var obj={
           msg:content,
           complete:false,
           id:this.id++
        }
        this.todoArr.unshift(obj);
      }
    }
  }
</script>

<style>
  #app{
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
  #cover{
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(255,255,255,0.2); 
  }
</style>

