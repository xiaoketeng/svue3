<template>
    <div>
        <h2>用户登录</h2>
        <button @click="onLogin">登录</button>
    </div>
</template>
<script>
export default {
    methods:{
        onLogin(){
            // window.islogin = true;//登录成功
            //提交mutations
            // this.$store.commit('login');
            //派发actions
            this.$store.dispatch('requestLogin').then(isLogin=>{
                console.log(isLogin,this.$route.query.redirect);
               //获取查询参
                const redirect = this.$route.query.redirect || '/';
                console.log(redirect,'redirect');
                //路由到重定向地址
                this.$router.push(redirect);
            });
             
        }
    }
}
</script>
<style>
    
</style>