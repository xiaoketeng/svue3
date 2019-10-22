<template>
  <div id="app">
    <h5 >商品列表</h5>
   <table border='0' cellpadding='0' cellspacing='0'>
        <thead>
            <td>选择</td>
            <td>商品名</td>
            <td>价钱</td>
            <td>总价</td>
            <td>操作</td>
        </thead>
        <tr v-for="(goods,index) in cartList" :key="index">
            <td><input type="checkbox" :value="goods" v-model="cartSelect"></td>
            <td>{{goods.name}}</td>
            <td>{{goods.price}}</td>
            <td>{{goods.total}}</td>
            <td>
                <!-- <input type="checkbox"/> -->
                <div class="select-num">
                    <div class="che-lf" @click="reduceNum(index)">-</div>
                    <div class="che-input"><span class="num">{{goods.num}}</span>个</div>
                    <div class="che-rt" @click="addNum(index)">+</div>
                </div>
                <!-- <input type="button" value="加入购物车"> -->
            </td>
        </tr>
        <tr>
            <td colspan="4" style="text-align:right">总价钱</td>
            <td>￥{{total}}</td>
        </tr>
    </table>
    <cart :cartSelect="cartSelect" @delCart="delCart"></cart>
     <h5>表单</h5>
     <div class="k-form-center">
      <KForm ref="loginForm"  :model="model" :rules="rules">
        <KFormItem label="用户名" >
          <KFormInput type="text" :value="model.username"></KFormInput>
        </KFormItem>

        <KFormItem label="密码">
          <KFormInput type="password" :value="model.password"></KFormInput>
        </KFormItem>

        <KFormItem label="submit">
          <input type="button" class="sub" value="提交" @click="submitForm('loginForm')"/>
        </KFormItem>
      </KForm>
     </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import cart from './components/cart.vue';
import KForm from './components/form/KForm.vue';
import KFormItem from './components/form/KFormItem.vue';
import KFormInput from './components/form/KFormInput.vue';
export default {
  name: 'app',
  data(){
    return{
      cartSelect:[],
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
  computed:{
    // 计算总钱数
        total:function(){
            let totalTemp=0;
            for(var i=0;i<this.cartList.length;i++){
                totalTemp+=(this.cartList[i].price*this.cartList[i].num);
            }
            return totalTemp;
        }
  },
  components: {
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
