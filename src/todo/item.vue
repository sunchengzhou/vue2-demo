<template>
  <div class="item-box">
    <label @click="showState"><input type="checkbox" v-model="todo.completed"><i>✓</i></label>
    <span :class="['item-content',todo.completed?'item-complted':'']">{{todo.content}}</span>
    <span class="item-close" @click="deleteTodo">X</span>
  </div>
</template>
<script>
  export default {
    props:{
      todo:{
        type:Object,
        required:true
      }
    },
    data(){
        return {

        }
    },
    methods:{
      deleteTodo(){
        this.$emit("del-todo",this.todo.id)
      },
      showState(){
        console.log(this.todo.completed)
      }
    }
  }
</script>
<style lang="stylus" scoped>
  .item-box
    width 530px
    height 50px
    margin 0 auto;
    background #ffffff
    line-height 50px
    border-top 1px solid #dadada
    position relative
  .item-box:hover .item-close{
    display block
    }
    label {font-size:20px;cursor:pointer;margin-left:30px}  
    label i {font-size:20px;font-style:normal;display:inline-block;width:20px;height:20px;text-align:center;line-height:20px;color:#fff;vertical-align:middle;margin:-2px 2px 1px 0px;border:#2489c5 1px solid;}  
    input[type="checkbox"],input[type="radio"] {display:none;}  
    input[type="checkbox"]:checked + i,input[type="radio"]:checked + i {background:#2489c5;}  
    input[type="checkbox"]:checked:disabled + i,input[type="radio"]:checked:disabled + i {background:#ccc;}
    .item-close
        position absolute
        width 30px
        height 30px
        top 10px
        right 20px
        line-height 30px
        text-align center
        font-size 30px
        color rgba(0,0,0,0.6)
        display none
        cursor pointer
    .item-content
       font-size 25px
       font-weight bolder
       color blue
    .item-complted
      color #dadada
      text-decoration line-through
</style>

