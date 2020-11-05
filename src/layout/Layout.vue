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
        fontColor: '#C1C6C8',
        backgroundColor: 'rgb(38, 47, 62)',
        color: '#C1C6C8',
        padding: '0 10px',
        height: '48px',
        lineHeight: '48px',
      }"
    >
      <!-- <router-link to="/">
        <img v-if="logo" :src="logo" style="width: 40px" />
      </router-link> -->
      <img v-if="logo" :src="logo" style="width: 40px" />
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
      <!-- <a-button type="link" :style="{ color: '#C1C6C8' }"> Link </a-button> -->
      <div style="display: inline-block; float: right; line-height: 43px">
        <!-- <a-button type="link" :style="{ color: '#C1C6C8' }"> Link </a-button> -->
        <a v-for="item in ex_link" :key="item.name"
          target="_blank"
          :href="item.url"
          :style="{ color: '#C1C6C8', paddingRight: '20px' }"
          >{{item.name}}</a
        >
        <a-dropdown>
          <a-avatar style="background-color: #87d068; cursor: pointer">
            {{ userName }}
          </a-avatar>
          <a-menu slot="overlay">
            <a-menu-item @click="collapsedMenu">{{
              collapsed ? "展开菜单" : "折叠菜单"
            }}</a-menu-item>
            <a-menu-item @click="showConfirm">退出系统</a-menu-item>
          </a-menu>
        </a-dropdown>
      </div>
    </a-layout-header>
    <a-layout>
      <Menu :menuCollapsed="collapsed" />
      <AppContent />
    </a-layout>
    <a-layout-footer
      :style="{
        padding: '0px 18px 4px 0px',
        borderTop: '1px solid #fff',
        textAlign: 'right',
        fontSize: '12px',
      }"
      >版权所有:{{ company }} 版本:{{ version }}</a-layout-footer
    >
  </a-layout>
</template>
<script>
import Menu from "./Menu";
import AppContent from "./AppContent";
// import Header from "./Header";
import settings from "@/settings.js";
import logo from "@/assets/logo.png";
import { mapGetters } from "vuex";
export default {
  name: "Layout",
  components: { Menu, AppContent },
  data() {
    return {
      title: settings.app.title,
      logo: logo,
      company: settings.app.company,
      version: settings.app.version,
      collapsed: false,
      //
      ex_link:[{
        url:'https://pro.antdv.com/',
        name:"pro.antdv.com"
      },{
        url:'https://www.antdv.com/components/button-cn/',
        name:"Ant Design 文档"
      }]
    };
  },
  computed: {
    ...mapGetters({
      userName: "user/getUserNameFirst",
    }),
  },
  methods: {
    collapsedMenu() {
      this.collapsed = !this.collapsed;
    },
    showConfirm() {
      var me = this;
      me.$confirm({
        title: "退出系统",
        cancelText: "取消",
        okText: "退出系统",
        okType: "danger",
        content: "请确认是否退出系统？",
        onOk() {
          me.$router.push("/login");
        },
        onCancel() {},
      });
    },
  },
};
</script>