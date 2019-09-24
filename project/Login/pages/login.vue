<template>
  <div class="login-page">
    <p>this is login page</p>
    <a-input-group size="large">
      <a-input class="login-input" placeholder="请输入用户名" v-model="uname"></a-input>
      <a-input class="login-input" placeholder="请输入登录密码" type="password" v-model="password"></a-input>
    </a-input-group>
    <a-button class="login-btn" @click="login" block>Login</a-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      uname: "pillar",
      password: "123456"
    };
  },
  asyncData({$axios}) {
    // console.log($axios);
  },
  methods: {
    login() {
      this.$store
        .dispatch("user/login", {
          uname: this.uname,
          password: this.password
        })
        .then(res => {
          if (+res.code === 0) {
            this.$success({
              title: "登录成功",
              content: res.msg,
              onOk: () => {
                // console.log(this);
                this.$router.push('/')
              }
            })

          } else {
            this.$error({
              title: "登录失败",
              content: res.msg
            });
          }
        });
    },
    redirect() {

    }
   }
};
</script>

<style lang="css">
.login-page {
  margin: 0 auto;
  width: 300px;
}
.login-input,
.login-btn {
  margin: 10px 0;
}
</style>
