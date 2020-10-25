<template>
  <a-layout
    :style="{
      margin: '0px',
      padding: '0px',
      background: '#fff',
      overflow: 'auto',
      height: '100vh',
    }"
  >
    <Header/>
    <a-layout>
      <Menu />
      <AppContent />
    </a-layout>
    <a-layout-footer
      :style="{
        padding: '0px 18px 4px 0px',
        borderTop: '1px solid #fff',
        textAlign: 'right',
        fontSize: '12px',
      }"
      >版权所有:{{company}} 版本:{{version}}</a-layout-footer
    >
  </a-layout>
</template>
<script>
import Menu from "./Menu";
import AppContent from "./AppContent";
import Header from "./Header";
export default {
  name: "Layout",
  components: { Menu, AppContent, Header },
  data() {
    return {
      title: "1Vue Admin Template",
      logo: "https://cn.vuejs.org/images/logo.png",
      company:'Ant Design of Vue',
      version:'0.1.0'
    };
  },
};
</script>