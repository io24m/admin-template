<template>
  <a-layout-sider
    breakpoint="xs"
    theme="light"
    v-model="collapsed"
    :trigger="null"
    collapsible
    :style="{ overflowX: 'hidden', overflowY: 'auto overlay' }"
    class="l-scroll"
  >
    <a-menu
      mode="inline"
      :default-selected-keys="['10000']"
      style="border-right: 1px solid #fff"
    >
      <!-- 展开折叠按钮 -->
      <a-menu-item @click="() => (collapsed = !collapsed)">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
        />
        <span>{{ collapsed ? "展开" : "折叠" }}</span>
      </a-menu-item>
      <!-- <a-menu-item key="1">
        <a-icon type="home" />
        <span>首页</span>
      </a-menu-item> -->
      <!-- <a-sub-menu key="sub1">
        <span slot="title"><a-icon type="user" /><span>用户</span></span>
        <a-menu-item key="6"> Tom </a-menu-item>
        <a-menu-item key="7"> Bill </a-menu-item>
        <a-menu-item key="8"> Alex </a-menu-item>
      </a-sub-menu> -->
      <template v-for="route in routes">
        <a-menu-item v-if="!hasChild(route.children)" :key="route.path">
          <router-link :to="route.path">
            <a-icon type="home" />
            <span>{{ route.name }}</span>
          </router-link>
        </a-menu-item>

        <sub-menu v-else :key="route.path" :menu-info="route" />
      </template>
    </a-menu>
  </a-layout-sider>
</template>
<script>
import { Menu } from "ant-design-vue";
// import AppLink from "./Link"

const hasChild = function (children) {
  if (!children) {
    return false;
  }
  const childrens = children.filter((item) => {
    if (item.hidden) {
      return false;
    } else {
      // Temp set(will be used if only has one showing child)
      //this.onlyOneChild = item;
      return true;
    }
  });
  return childrens.length !== 1;
};

const SubMenu = {
  template: `
      <a-sub-menu :key="menuInfo.path" v-bind="$props" v-on="$listeners">
        <span slot="title">
          <a-icon type="mail" /><span>{{ menuInfo.name }}</span>
        </span>
        <template v-for="item in menuInfo.children">
          <a-menu-item v-if="!item.children" :key="item.path">
            <router-link :to="item.path">
              <a-icon type="pie-chart" />
              <span>{{ item.name }}</span>
            </router-link>
          </a-menu-item>
          <sub-menu v-else :key="item.path" :menu-info="item" />
        </template>
      </a-sub-menu>
    `,
  name: "SubMenu",
  // must add isSubMenu: true
  isSubMenu: true,
  props: {
    ...Menu.SubMenu.props,
    // Cannot overlap with properties within Menu.SubMenu.props
    menuInfo: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    hasChild,
  },
};

export default {
  name: "Menu",
  components: { SubMenu },
  data() {
    return {
      collapsed: false,
    };
  },
  computed: {
    routes() {
      return this.$router.options.routes;
    },
  },
  methods: {
    hasChild,
  },
};
</script>
<style scoped>
</style>