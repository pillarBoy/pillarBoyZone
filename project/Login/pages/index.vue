<template>
  <div class="container">
    <div>
      <h5 class="title">pillar-zone-login</h5>
      <h2 class="subtitle">pillar zone login module</h2>
      <div class="links">
        <nuxt-link to="/login" v-if="!user.token">login</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  components: {},
  mounted() {
    console.log(this.user);
  },
  computed: {
    ...mapState({
      user: state => state.user
    })
  }
};
</script>

<style>
body {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  display: block;
  font-weight: 300;
  font-size: 16px;
  color: #35495e;
  letter-spacing: 1px;
}
</style>
