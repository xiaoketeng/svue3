<template>
    <div class="k-form-item lf-val">
        <label class="k-form-label" v-if="prop">{{label}} </label>
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
        prop:{
            type:String
        }
    },
     //provide 返回对象可以跨层级传参给子孙
    provide(){
        return{
            prop:this.prop//表单的实例传给后代
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
        var that = this;
        if(this.prop){
            this.form.$on('validate',this.validate);
        }
    },
    methods:{
        validate(){
            //数据模型
            let dataModel = this.form.model;
            //数据规则
            let rulesModel = this.form.rules;
            
            if(this.prop&&rulesModel[this.prop][0].required){
                if(!dataModel[this.prop]){
                    this.errorMessage = rulesModel[this.prop][0].message;
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