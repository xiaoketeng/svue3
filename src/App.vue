<template>
  <div id="app">
    <router-link to="/">1</router-link>| <router-link to="/about">2</router-link>| <router-link to="/login">3</router-link>
    <router-view/>
   
    <cart :cartSelect="cartSelect" @delCart="delCart"></cart>
     <h5>表单</h5>
     <div class="k-form-center">
      <KForm ref="loginForm"  :model="model" :rules="rules">
        <KFormItem label="用户名" prop="username">
          <!-- <KFormInput type="text" :value="model.username"  @onInput="onInput"></KFormInput> -->
           <KFormInput type="text" :value="model.username" ></KFormInput>
        </KFormItem>

        <KFormItem label="密码" prop="password">
          <!-- <KFormInput type="password" :value="model.password" @onInput="onInput"></KFormInput> -->
          <KFormInput type="password" :value="model.password"></KFormInput>
        </KFormItem>

        <KFormItem label="submit">
          <input type="button" class="sub" value="提交" @click="submitForm('loginForm')"/>
        </KFormItem>
      </KForm>
     </div>
     <form-test></form-test>
     <!-- <kVModel v-model="lovingVue"></kVModel> -->
  </div>
</template>

<script>
// import kVModel from './components/kVModel.vue'
import formTest from './components/formTest.vue'
import cart from './components/cart.vue';
import KForm from './components/form/KForm.vue';
import KFormItem from './components/form/KFormItem.vue';
import KFormInput from './components/form/KFormInput.vue';
export default {
  name: 'app',
  data(){
    return{
      cartSelect:[],
      lovingVue:true,
       cartList:[{
                name:'苹果',
                price:5,
                total:5,
                num:1
            },{
                name:'雪梨',
                price:4,
                total:4,
                num:1
            },{
                name:'甘蔗',
                price:2,
                total:2,
                num:1
            }],
            //数据模型
        model:{ username: "tom", password: "" },
         // 校验规则
        rules: {
          username: [{ required: true, message: "请输入用户名" }],
          password: [{ required: true, message: "请输入密码" }]
        }
    }
  },

  components: {
    // kVModel,
    formTest,
    cart,
    KForm,
    KFormItem,
    KFormInput
  },
  created(){
  },
  methods:{
     // 添加数量
      addNum(index){
          this.cartList[index].num = parseInt(this.cartList[index].num)+1;
          this.cartList[index].total = parseInt(this.cartList[index].price)*parseInt(this.cartList[index].num);
      },
      // 减少数量
      reduceNum(index){
          if(parseInt(this.cartList[index].num)>=1){
              this.cartList[index].num = parseInt(this.cartList[index].num)-1;
          }
          this.cartList[index].total = parseInt(this.cartList[index].price)*parseInt(this.cartList[index].num);
      },
      delCart(e){
          this.cartSelect.splice(e.index, 1);
      },
      //修改输入框内容
      // onInput(e){
      //   this.model[e.objName] = e.objVal;
      // },
      // 提交表单
      submitForm(form){
           this.$refs.loginForm.$emit('validate');
      }
  }
}
</script>

<style>
h5{
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 20px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
*{
    margin: 0;
    padding: 0;
}
table,td,tr{
    margin: 0;
    padding: 0;
}
.shop-list{
    text-align: center;
}
table{
    display: inline-block;
    vertical-align: top;
}
td{
    border-top:1px solid gold;
    padding: 0 50px;
    line-height: 50px;
}
.select-num{
    font-size: 0;
    margin-top: 25px;
}
.che-lf,.che-rt{
    width: 25px;
    height: 25px;
    text-align: center;
    line-height: 25px;
    font-weight: bold;
    display: inline-block;
    vertical-align: top;
    border: 1px solid black;
    box-sizing: border-box;
    font-size: 16px;
    cursor: pointer;
}
.che-input{
    min-width: 50px;
    line-height: 25px;
    height: 25px;
    display: inline-block;
    vertical-align: top;
    font-size: 0;
}
.che-input .num{
    min-width: 40px;
    height: 25px;
    line-height: 25px;
    text-align: center;
    box-sizing: border-box;
    display: inline-block;
    vertical-align: top;
    color: #000;
    font-size: 16px;
}

input[type="button"],input[type="checkbox"]{
    cursor: pointer;
}
.k-form-center{
  text-align: center;
}
.sub{
  width: 80px;
  height: 30px;
  font-size: 16px;
  line-height: 30px;
  text-align: center;
  background-color: #fff;
  border:1px solid #000;
  border-radius: 5px;
  outline: none;
}
</style>
