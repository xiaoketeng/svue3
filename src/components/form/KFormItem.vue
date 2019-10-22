<template>
    <div class="k-form-item" :class="(label=='submit'?'cen-val':'lf-val')">
        <label class="k-form-label" v-if="(label&&label!='submit')">{{label}} </label>
        <slot></slot>
        <!-- 校验错误信息 -->
        <p v-if="errorMessage" class="error">{{errorMessage}}</p>
    </div>
</template>
<script>
export default {
    props:{
        label:{
            type:String
        }
    },
    inject: ['form'],
    data(){
        return{
            errorMessage:'',
            cenVal:false,
            num:0
        }
    },
    created(){
        console.log('我已经进入了');
        var that = this;
        this.form.$on('validate',this.validate);
    },
    methods:{
        validate(){
            //数据模型
            let dataModel = this.form.model;
            //数据规则
            let rulesModel = this.form.rules;
            for(var objName in rulesModel){
                if(rulesModel[objName][0].required&&!dataModel.objName){
                    this.errorMessage = rulesModel[objName][0].message;
                }else{
                    this.errorMessage = '';
                }
            }
        }
    }
}
</script>
<style>
    .k-form-label{
        display: inline-block;
        vertical-align: top;
        font-size: 18px;
        line-height: 30px;
        font-weight:500;
        margin-right: 20px;
        box-sizing: border-box;
        width:60px;
        max-width: 250px;
        text-align: right;
    }
    .k-form-item{
        font-size: 0;
        margin: 5px 0;
    }
    .cen-val{
        text-align: center;
        margin-top: 30px;
    }
    .lf-val{
        text-align: left;
    }
    .error{
        color: red;
        display: inline-block;
        vertical-align: top;
        font-size: 16px;
        line-height: 30px;
        margin-left: 20px;
        text-align: left;
        box-sizing: border-box;
    }
</style>