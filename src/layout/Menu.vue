<template>
  <a-layout-sider
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
      <template v-for="route in routes">
        <a-menu-item v-if="!hasChild(route.children)" :key="route.path">
          <router-link :to="route.path">
            <a-icon :type="route.icon" />
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
import { mapGetters } from "vuex";

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
          <a-icon :type="menuInfo.icon" /><span>{{ menuInfo.name }}</span>
        </span>
        <template v-for="item in menuInfo.children">
          <a-menu-item v-if="!item.children" :key="item.path">
            <router-link :to="item.path">
              <a-icon :type="item.icon" />
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
  props: {
    menuCollapsed: Boolean,
  },
  data() {
    return {
      //  collapsed: this.menuCollapsed,
    };
  },
  computed: {
    ...mapGetters({
      routes: "permission/getRouters",
    }),
    collapsed: {
      get() {
        return this.menuCollapsed;
      },
      set(value) {
        this.menuCollapsed = value;
      },
    },
  },
  methods: {
    hasChild,
  },
};
</script>
<style scoped>
</style>