<template>
    <div class="k-form-item" :class="(label=='submit'?'cen-val':'lf-val')">
        <label class="k-form-label" v-if="(label&&label!='submit')">{{label}} </label>
        <slot></slot>
        <!-- 校验错误信息 -->
        <p class="error">{{errorMessage}}</p>
    </div>
</template>
<script>
export default {
    props:{
        label:{
            type:String
        },
        error:{
            type:String
        },
        prop:{
            type:String
        }
    },
    inject: ['form'],
    data(){
        return{
            errorMessage:this.error,
            cenVal:false,
            num:0
        }
    },
    created(){
        console.log(this.prop,'我已经进入了');
        if(this.prop){
            this.form.$on('validate',this.validate);
        }
        
    },
    methods:{
        validate(){
            var that = this;
            //数据模型
            let dataModel = this.form.model;
            //数据规则
            let rulesModel = this.form.rules;
            for(var objName in rulesModel){
                if(objName==that.prop&&rulesModel[objName][0].required){
                    if(dataModel[objName]){
                        console.log(9);
                        return false;
                    }
                    this.errorMessage = rulesModel[objName][0].message;
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
        width:100px;
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
        width: 100px;
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