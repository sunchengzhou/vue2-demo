<template>
  <section>
    <input type="text" class="add-input" placeholder="写下您今日的待办" autofocus="autofocus"
    @keyup.enter="addTodo" maxlength="18"/>
    <item 
      :todo="todo"
      v-for="todo in filterTodos"
      :key="todo.id"
      @del-todo="delTodo"
    />
    <tabs :filter="filter" :todos="todos" @clears="clearCompleted"  @toggle="toggleFilter"></tabs>
  </section>
</template>
<script>
  import Item from './item.vue'
  import Tabs from './tabs.vue'
  let id=0;
  export default {
      data(){
        return {
          msg:'',
          todos:[],
          filter:"all"
        }
      },
      components:{
        Item,
        Tabs
      },
      computed:{
        filterTodos(){
          if(this.filter=='all'){
            return this.todos
          }
          const completed=this.filter==="completed"
          return this.todos.filter(todo=>completed===todo.completed)
        }
      },
      methods:{
        addTodo(e){
          var obj={
            completed:false,
            content:e.target.value.trim(),
            id:id++
          }
          this.todos.unshift(obj)
          e.target.value=""
        },
        delTodo(id){
            this.todos.splice(this.todos.findIndex(todo=>todo.id===id),1)
        },
        toggleFilter(state){
          this.filter=state
        },
        clearCompleted(){
          this.todos=this.todos.filter(todo=>!todo.completed)
        }
      }
  }
</script>

<style lang="stylus" scoped>
      .add-input
          display block 
          border none
          margin 0 auto 
          margin-top 30px
          background #fff  
          height 50px
          line-height  50px
          width 500px
          font-size 25px
          padding-left 30px
          cursor pointer
          z-index 999
</style>

