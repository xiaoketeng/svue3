<template>
    <div class="k-form">
        <form>
            <slot></slot>
        </form>
    </div>
</template>
<script>
export default {
    //provide 返回对象可以跨层级传参给子孙
    provide(){
        return{
            form:this//表单的实例传给后代
        }
    },
    props: {
        model: { type: Object, required: true },
        rules: { type: Object }
    },
    methods:{
        
    }
}
</script>
<style>
    .k-form{
        display: inline-block;
        vertical-align: top;
        text-align: left;
    }
</style>