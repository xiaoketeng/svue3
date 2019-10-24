<template>
    <div>
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
    </div>
</template>
<script>
export default {
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
      }
  
  }
}
</script>