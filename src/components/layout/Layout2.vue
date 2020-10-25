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
    <a-layout-header
      :style="{
        height: '48px',
        fontColor: '#C1C6C8',
        backgroundColor: 'rgb(38, 47, 62)',
        color: '#C1C6C8',
      }"
      >hhhhh
    </a-layout-header>
    <a-layout>
      <a-layout-sider theme="light">left sidebar</a-layout-sider>
      <a-layout-content
        :style="{
          margin: '4px',
          padding: '12px',
          background: '#fff',
          overflow: 'auto',
        }"
        >main content
        <router-view />
      </a-layout-content>
    </a-layout>
    <a-layout-footer
      :style="{
        padding: '0px 18px 4px 0px',
        borderTop: '1px solid #fff',
        textAlign: 'right',
        fontSize: '12px',
      }"
      >版权所有:北京ABC有限责任公司 版本:1.0</a-layout-footer
    >
  </a-layout>
</template>
<script>
export default {
  name: "Layout",
};
</script>