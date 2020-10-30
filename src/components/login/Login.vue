<template>
  <div>
    <a-row
      type="flex"
      align="middle"
      justify="center"
      :style="{ height: '100vh' }"
    >
      <a-input-group style="width: 300px" size="large">
        <a-col>
          <a-input
            v-model="userName"
            placeholder="account"
            class="l-login-input"
          >
            <a-icon slot="prefix" type="user" />
          </a-input>
          <a-input-password
            placeholder="password"
            v-model="password"
            class="l-login-input"
          >
            <a-icon slot="prefix" type="lock" />
          </a-input-password>
          <a-button block size="large" @click="login"> login in </a-button>
        </a-col>
      </a-input-group>
    </a-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userName: "",
      password: "",
    };
  },
  methods:{
      login(){
        this.$router.push('/')
      }
  }
};
</script>
<style scoped>
.l-login-input {
  margin: 0 0px 16px 0;
}
</style>