<template>
  <div>
    <a-button @click="cl()" type="primary"> Primary </a-button>
    <div>
      1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    </div>
    ...
    <br />
    Really
    <br />...<br />...<br />...<br />
    long
    <br />...<br />...<br />...<br />...<br />...<br />...
    <br />...<br />...<br />...<br />...<br />...<br />...
    <br />...<br />...<br />...<br />...<br />...<br />...
    <br />...<br />...<br />...<br />...<br />...<br />...
    <br />...<br />...<br />...<br />...<br />...<br />...
    <br />...<br />...<br />...<br />...<br />...<br />...
    <br />...<br />...<br />...<br />...<br />...<br />
    content
  </div>
</template>

<script>
import Layout from "@/components/layout/Layout";
export default {
  name: "Home",
  props: {
    msg: String,
  },
  methods: {
    cl() {
      const t = [
        {
          icon: "home",
          name: "邮件",
          path: "/mail",
          component: Layout,
          // redirect: "/mail",
          children: [
            {
              icon: "mail",
              name: "h1",
              path: "/mail",
              component: () => import("@/views/index/Index"),
            },
          ],
        },
      ];
      this.$router.options.routes=[]
      this.$router.addRoutes(t);
    },
  },
};
</script>