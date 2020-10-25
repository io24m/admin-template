<template>
  <a-layout-content
    :style="{
      margin: '4px',
      padding: '12px',
      background: '#fff',
      overflow: 'auto',
    }"
    class="menus"
    >main content
    <router-view />
  </a-layout-content>
</template>
<script>
export default {
  name: "AppContent",
};
</script>
<style scoped>
.menus::-webkit-scrollbar {
  /*滚动条整体样式*/
  width: 8px; /*高宽分别对应横竖滚动条的尺寸*/
  height: 8px;
}
.menus::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius: 10px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  background: #ededed;
}
.menus::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  background: #fff;
}
</style>