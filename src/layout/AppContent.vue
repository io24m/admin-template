<template>
  <a-layout-content
    :style="{
      margin: '1px',
      padding: '1px',
      background: '#f0f2f5',
      overflow: 'auto',
    }"
    class="l-scroll"
    >
    <router-view />
  </a-layout-content>
</template>
<script>
export default {
  name: "AppContent",
};
</script>
<style scoped>

</style>