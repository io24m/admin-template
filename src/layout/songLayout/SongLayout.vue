<template>
  <a-layout
    :style="{
      margin: '0px',
      padding: '0px',
      overflow: 'auto',
      height: '100vh',
    }"
  >
    <a-layout-header
      :style="{
        fontColor: '#C1C6C8',
        backgroundColor: '#303643 !important',
        color: '#C1C6C8',
        padding: '0 10px',
        height: '48px',
        lineHeight: '48px',
      }"
    >
      <a-row>
        <a-col :span="12"> </a-col>
        <a-col :span="12"> </a-col>
      </a-row>
    </a-layout-header>
    <a-layout>
      <a-layout-content
        :style="{
          margin: '1px',
          padding: '1px',
          background: '#fff',
          overflow: 'auto',
        }"
        class="l-scroll"
      >
        <a-row type="flex" justify="space-around" align="middle">
          <a-col :md="12" :xs="24"> <router-view /></a-col>
        </a-row>
      </a-layout-content>
    </a-layout>
    <!-- <Content>
      <router-view />
    </Content> -->
    <!-- <Footer>footer</Footer> -->
  </a-layout>
</template>
<style scoped>
</style>