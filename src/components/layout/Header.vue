<template>
  <a-layout-header
    :style="{
      fontColor: '#C1C6C8',
      backgroundColor: 'rgb(38, 47, 62)',
      color: '#C1C6C8',
      padding: '0 10px',
      height: '48px',
      lineHeight: '48px',
    }"
  >
    <router-link to="/">
      <img v-if="logo" :src="logo" style="width: 40px" />
    </router-link>
    <!-- <img v-if="logo" :src="logo" style="width: 40px" /> -->
    <h1
      :style="{
        color: '#fff',
        display: 'inline-block',
        fontWeight: '800',
        padding: '0 0 0 12px',
      }"
    >
      {{ title }}
    </h1>
    <!-- <h1 :style="{ color: '#fff' }">{{ title }}</h1> -->

    <!-- <a-button type="link" :style="{ color: '#C1C6C8' }"> Link </a-button> -->

    <div style="display: inline-block; float: right; line-height: 43px">
      <a-button type="link" :style="{ color: '#C1C6C8' }"> Link </a-button>
      <a-button type="link" :style="{ color: '#C1C6C8' }"> Link1 </a-button>
      <!-- <a-button type="link" :style="{ color: '#C1C6C8' }">
        <a-avatar style="background-color: #87d068" icon="user" />
      </a-button> -->

      <a-dropdown>
        <a-avatar
          style="background-color: #87d068; cursor: pointer;  "
           
        >
          李
        </a-avatar>

        <a-menu slot="overlay">
          <a-menu-item @click="showConfirm">退出系统</a-menu-item>
          <!-- <a-menu-item>2nd menu item</a-menu-item>
          <a-sub-menu key="test" title="sub menu">
            <a-menu-item>3rd menu item</a-menu-item>
            <a-menu-item>4th menu item</a-menu-item>
          </a-sub-menu>
          <a-sub-menu title="disabled sub menu" disabled>
            <a-menu-item>5d menu item</a-menu-item>
            <a-menu-item>6th menu item</a-menu-item>
          </a-sub-menu> -->
        </a-menu>
      </a-dropdown>
      <!-- <a-avatar style="background-color:#87d068" icon="user" shape="square" /> -->
    </div>
  </a-layout-header>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {
      title: "Ant Design of Vue",
      logo: "https://cn.vuejs.org/images/logo.png",
    };
  },
    methods: {
    showConfirm() {
      this.$confirm({
        title: '退出系统',
        cancelText:'取消',
        okText:'退出系统',
        okType:'danger',
        content: '请确认是否退出系统？',
        onOk() {
        //   return new Promise((resolve, reject) => {
        //     setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
        //   }).catch(() => console.log('Oops errors!'));
        },
        onCancel() {},
      });
    },
  },
};
</script>
<style scoped>
</style>