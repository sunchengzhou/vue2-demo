<template>
    <header class="main-header">
      <h1>记事本</h1>
    </header>
</template>
<script>
  export default {
    data(){
      return{
        msg:''
      }
    }
  }
</script>
<style lang="stylus" scoped>
  .main-header  
      height 50px;
      line-height 50px
      margin:0 auto;
      text-align center 
      font-size 40px
      color #ff0
      margin-bottom 30px
</style>
