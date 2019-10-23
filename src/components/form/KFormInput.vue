<template>
    <input :type="type" v-model="inputVal" v-on:input="inputFunc" class="input-k"/>
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
            inputVal:this.value
        }
    },
    inject: ['form'],
    methods: {
        inputFunc(e){
            console.log(this.form);
            this.$emit('changeInput',{inputVal:this.inputVal});
        }
    },
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
        margin-left: 108px;
    }
</style>