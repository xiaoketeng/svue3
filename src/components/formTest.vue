<template>
    <div>
         <h5>表单2</h5>
        <div class="k-form-center">
        <KForm ref="loginForm"  :model="model" :rules="rules">
            <KFormItem label="用户名" prop="username">
                <!-- <KFormInput type="text" :value="model.username"  @onInput="onInput"></KFormInput> -->
                <KFormInput type="text" :value="model.username"></KFormInput>
            </KFormItem>

            <KFormItem label="密码" prop="password">
                <!-- <KFormInput type="password" :value="model.password" @onInput="onInput"></KFormInput> -->
                <KFormInput type="password" :value="model.password" ></KFormInput>
            </KFormItem>

            <KFormItem label="submit">
            <input type="button" class="sub" value="提交" @click="submitForm('loginForm')"/>
            </KFormItem>
        </KForm>
        </div>
    </div>
</template>
<script>
import KForm from './form/KForm.vue';
import KFormItem from './form/KFormItem.vue';
import KFormInput from './form/KFormInput.vue';
export default {
      data(){
          return{
               model:{ username: "tom", password: "" },
                // 校验规则
                rules: {
                    username: [{ required: true, message: "请输入用户名" }],
                    password: [{ required: true, message: "请输入密码" }]
                }
          }
      },
      components: {
            KForm,
            KFormItem,
            KFormInput
      },
      methods:{
           //修改输入框内容
            // onInput(e){
            //     this.model[e.objName] = e.objVal;
            // },
            // 提交表单
            submitForm(form){
                this.$refs.loginForm.$emit('validate');
            }
      }
}
</script>
<style>
    
</style>