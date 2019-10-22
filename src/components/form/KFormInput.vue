<template>
    <input :type="type" :value="value" class="input-k"/>
</template>
<script>
export default {
    props:{
        type:{
            type:String,
            default:'text'
        },
        value:{
            type:String,
            default:''
        }
    }
}
</script>
<style>
    .input-k{
        width: 120px;
        height: 30px;
        line-height: 30px;
        border:1px solid #ccc;
        border-radius: 5px;
        padding-left: 10px;
        outline:none;
        box-sizing: border-box;
    }
    input[type='button']{
        padding-left: 0px;
        margin-left: 48px;
    }
</style>