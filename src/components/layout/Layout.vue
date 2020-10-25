<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider
      v-model="collapsed"
      :trigger="null"
      collapsible
      :style="{ overflow: 'auto', height: '100vh', left: 0 }"
    >
      <div class="logo" />
      <a-menu theme="dark" mode="inline" :default-selected-keys="['1']">
        <a-menu-item key="1">
          <a-icon type="user" />
          <span>nav 1</span>
        </a-menu-item>
        <a-menu-item key="2">
          <a-icon type="video-camera" />
          <span>nav 2</span>
        </a-menu-item>
        <a-menu-item key="3">
          <a-icon type="upload" />
          <span>nav 3</span>
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
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="() => (collapsed = !collapsed)"
        />
      </a-layout-header>
      <a-layout-content
        :style="{
          margin: '8px 0px 8px 8px',
          padding: '12px',
          background: '#fff',
          overflow: 'auto',
          height: '10vh',
        }"
      >
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
export default {
  name: "Layout",
  data() {
    return {
      collapsed: false,
    };
  },
};
</script>
<style>
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>