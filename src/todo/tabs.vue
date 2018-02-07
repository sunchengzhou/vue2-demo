<template>
  <div class="tab-box">
    <span class="tab-msg">{{unfinishTodoLength}}个待办</span>
    <span class="tabs">
      <span
       v-for="state in states"
       :key="state"
       :class="[state,filter===state?'actived':'']"
       @click="toggleFilter(state)">{{state}}
       </span>
    </span>
    <span class="tab-clear" @click="clearAll">清除完成</span>
  </div>
</template>
<script>
  export default {
    props:{
      filter:{
        type:String,
        required:true
      },
      todos:{
        type:Array,
        required:true
      }
    },
    data(){
      return {
        states:["all","active","completed"]
      }
    },
    computed:{
      unfinishTodoLength(){
        console.log(todo=>!todo.completed)
        return this.todos.filter(todo=>!todo.completed).length
      }
    },
    methods:{
      toggleFilter(state){
        this.$emit('toggle',state)
      },
      clearAll(){
        this.$emit('clears')
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .tab-box
    background #fff  
    width 530px
    height 50px
    line-height 50px
    margin 0 auto
    border-top 1px solid #dadada
  .tab-box .tab-msg
    margin 0 20px 0 30px
  .tab-box .tab-clear
    margin 0 0 0 10px
  .tabs span
    width 80px
    height 30px
    line-height 30px
    display inline-block
    text-align center
    border-radius 5px
    cursor pointer
  .tabs .actived
       border 1px solid rgb(200,50,50)
  .tab-clear
    display inline-block
    width 70px
    height 30px
    line-height 30px
    text-align center
    margin-left 20px
  .tab-clear:hover
    border 1px solid rgb(200,50,50)
    border-radius 5px
    cursor pointer
</style>

