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
    <Menu />
    <!-- <a-layout-sider theme="light">  <Menu/> </a-layout-sider> -->
    <a-layout>
        <Header/>
      <!-- <a-layout-header
        :style="{ backgroundColor: '#fff', height: '46px', lineHeight: '46px' }"
      >
      </a-layout-header> -->
      <a-layout-content
        :style="{
          margin: '4px',
          padding: '12px',
          background: '#fff',
          overflow: 'auto',
        }"
        class="l-scroll"
      >
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import Menu from "@/components/menu/Menu";
import Header from "@/components/header/Header";
export default {
  components: { Menu ,Header},
};
</script>