<template>
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
</template>
<script>
export default {
  name: "AppContent",
};
</script>
<style scoped>

</style>