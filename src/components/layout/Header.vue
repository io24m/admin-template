<template>
  <a-layout-header
    :style="{
      fontColor: '#C1C6C8',
      backgroundColor: 'rgb(38, 47, 62)',
      color: '#C1C6C8',
      padding: '0 10px',
      height:'48px',
      lineHeight: '44px'
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

    <div style="display: inline-block; float: right">
      <a-button type="link" :style="{ color: '#C1C6C8' }"> Link </a-button>
      <a-button type="link" :style="{ color: '#C1C6C8' }"> Link1 </a-button>
    </div>
  </a-layout-header>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {
      title: "瑞明威审计系统",
      logo: "https://cn.vuejs.org/images/logo.png",
      // "https://wpimg.wallstcn.com/69a1c46c-eb1c-4b46-8bd4-e9e686ef5251.png",
    };
  },
};
</script>
<style scoped>
</style>