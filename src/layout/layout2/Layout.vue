<template>
  <pro-layout
    :menus="menus"
    :collapsed="collapsed"
    :theme="theme"
    :layout="layout"
    :contentWidth="contentWidth"
    :auto-hide-header="autoHideHeader"
    :mediaQuery="query"
    :isMobile="isMobile"
    :handleMediaQuery="handleMediaQuery"
    :handleCollapse="handleCollapse"
  >
    <template v-slot:menuHeaderRender>
      <div>
        <img :src="logo" />
        <h1>Pro Layout</h1>
      </div>
    </template>
    <template v-slot:rightContentRender>
      <div
        :class="[
          'ant-pro-global-header-index-right',
          layout === 'topmenu' && `ant-pro-global-header-index-${theme}`,
        ]"
      >
        rightContentRender
      </div>
    </template>
    <template v-slot:footerRender>
      <div>footerRender</div>
    </template>
    <setting-drawer navTheme="dark" />
    <router-view />
  </pro-layout>
</template>

<script>
import ProLayout, { SettingDrawer } from "@ant-design-vue/pro-layout";
// import { asyncRouterMap } from '../config/router.config'
import { mapGetters } from "vuex";
import logo from "@/assets/logo.png";


export default {
  name: "Layout",
  data() {
    return {
        logo: logo,
      //menus: [],
      collapsed: false,
      autoHideHeader: false,
      query: {},
      layout: "sidemenu",
      contentWidth: "Fluid",
      theme: "dark",
      isMobile: false,
    };
  },
  computed: {
    ...mapGetters({
      menus: "permission/getRouters",
    }),
  },
  created() {
    // this.menus = asyncRouterMap.find(item => item.path === '/').children
  },
  methods: {
    handleMediaQuery(query) {
      this.query = query;
      if (this.isMobile && !query["screen-xs"]) {
        this.isMobile = false;
        return;
      }
      if (!this.isMobile && query["screen-xs"]) {
        this.isMobile = true;
        this.collapsed = false;
      }
    },
    handleCollapse(collapsed) {
      this.collapsed = collapsed;
    },
  },
  components: {
    SettingDrawer,
    ProLayout,
  },
};
</script>