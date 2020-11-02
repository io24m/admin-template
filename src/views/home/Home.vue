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
import request from "@/utils/request.js";
export default {
  name: "Home",
  props: {
    msg: String,
  },
  methods: {
    cl() {
      request({
        url: "/",
        method: "post",
        data: {},
      }).then((response) => {
        const { data } = response;
        console.log(data);
      });

      const t = [
        {
          icon: "home",
          name: "邮件",
          path: "/mail",
          component: Layout,
          redirect: "/mail/index",
          children: [
            {
              path: "/mail/index",
              component: () => import("@/views/index/Index"),
            },
          ],
        },
      ];
      this.$router.addRoutes(t);
    },
  },
};
</script>