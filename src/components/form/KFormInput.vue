<template>
    <input :type="type"  @input="onInput" ref="kinput" :value="valInput" class="input-k"/>
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
    },
    data(){
        return{
            valInput:this.value
        }
    },
    inject: ['prop','form'],
    methods:{
        onInput(e){
            // this.$emit('onInput',{objName:this.prop,objVal:e.target.value});
            this.form.model[this.prop] = e.target.value;
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
        margin-left: 98px;
        margin-top: 20px;
    }
</style>