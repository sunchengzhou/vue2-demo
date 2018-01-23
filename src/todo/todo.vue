<template>
    <div class="todo">
        <search-box></search-box>
        {{msg}}
    </div>
</template>
<script>
import SearchBox from './searchbox.vue'
export default {
    data(){
        return {
            msg:"welcom to todo list"
        }
    },
    components:{
        SearchBox
    }
}
</script>
<style lang="stylus">
.todo
    width 600px
    margin 20px auto 
    background #fff
    z-index 100
</style>


