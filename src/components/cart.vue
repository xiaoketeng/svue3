<template>
    <div class="shop-list">
           <hr>
           <h5>购物车列表</h5>
           <table border='0' cellpadding='0' cellspacing='0' v-if="cartList.length>0">
                <thead>
                    <td>商品名</td>
                    <td>价钱</td>
                    <td>总价</td>
                    <td>操作</td>
                </thead>
                <tr v-for="(goods,index) in cartList" :key="index">
                    <td>{{goods.name}}</td>
                    <td>{{goods.price}}</td>
                    <td>{{goods.total}}</td>
                    <td>
                       <input type="button" value="删除" @click="delCart(index)" ref="delBtn"/>
                        <!-- <input type="button" value="加入购物车"> -->
                    </td>
                </tr>
                <tr>
                    <td colspan="3" style="text-align:right">总价钱</td>
                    <td>￥{{totalCart}}</td>
                </tr>
           </table>
    </div>
</template>
<script>
export default {
    props : ['cartSelect'],
    data(){
        return{
            cartList:[],//购物车
        }
    },
    watch:{
        cartSelect:function(newValue){
             this.cartList=newValue;//购物车
        }
    },
    computed:{
        totalCart:function(){
            let totalTemp=0;
            for(var i=0;i<this.cartList.length;i++){
                totalTemp+=(this.cartList[i].price*this.cartList[i].num);
            }
            return totalTemp;
        }
    },
    methods:{
        //删除购物
        delCart(index){
            this.$emit('delCart',{index:index});
        }
    }
}
</script>
<style>
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

</style>