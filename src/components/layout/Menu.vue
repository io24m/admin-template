<template>
  <a-layout-sider
    theme="light"
    v-model="collapsed"
    :trigger="null"
    collapsible
    :style="{ overflow: 'auto' }"
    class="menus"
  >
    <a-menu mode="inline" :default-selected-keys="['10000']">
      <a-menu-item @click="() => (collapsed = !collapsed)">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
        />
        <span>{{ collapsed ? "展开" : "折叠" }}</span>
      </a-menu-item>
      <a-menu-item key="1">
        <a-icon type="home" />
        <span>首页</span>
      </a-menu-item>
      <a-menu-item key="2">
        <a-icon type="video-camera" />
        <span>总览</span>
      </a-menu-item>
      <a-menu-item key="3">
        <a-icon type="upload" />
        <span>综合</span>
      </a-menu-item>
      <a-menu-item key="4">
        <a-icon type="pie-chart" />
        <span>Option 1</span>
      </a-menu-item>
      <a-menu-item key="5">
        <a-icon type="desktop" />
        <span>Option 2</span>
      </a-menu-item>
      <a-sub-menu key="sub1">
        <span slot="title"><a-icon type="user" /><span>User</span></span>
        <a-menu-item key="6"> Tom </a-menu-item>
        <a-menu-item key="7"> Bill </a-menu-item>
        <a-menu-item key="8"> Alex </a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub2">
        <span slot="title"><a-icon type="team" /><span>Team</span></span>
        <a-menu-item key="9"> Team 1 </a-menu-item>
        <a-menu-item key="18"> Team 2 </a-menu-item>
      </a-sub-menu>
      <a-menu-item key="19">
        <a-icon type="file" />
        <span>File</span>
      </a-menu-item>
      <a-menu-item key="119">
        <a-icon type="file" />
        <span>File</span>
      </a-menu-item>
      <a-menu-item key="1119">
        <a-icon type="file" />
        <span>File</span>
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>
<script>
export default {
  name: "Menu",
  data() {
    return {
      collapsed: false,
    };
  },
};
</script>
<style scoped>
.menus::-webkit-scrollbar {
  /*滚动条整体样式*/
  width: 2px; /*高宽分别对应横竖滚动条的尺寸*/
  height: 1px;
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