<template>
  <div class="login-page">
    <p>this is login page</p>
    <a-input-group size="large">
      <a-input class="login-input" placeholder="请输入用户名"></a-input>
      <a-input class="login-input" placeholder="请输入登录密码" type="password"></a-input>
    </a-input-group>
    <a-button class="login-btn" @click="login" block>Login</a-button>
  </div>
</template>
<script>
export default {
  methods: {
    login() {
      this.$store.dispatch('user/login', {
        uname: 'pillar',
        password: '123456'
      })
    }
  }
}
</script>

<style lang="css">
  .login-page {
    margin: 0 auto;
    width: 300px;
  }
  .login-input, .login-btn {
    margin: 10px 0;
  }
</style>
