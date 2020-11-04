<template>
  <div>
    <a-row>
      <a-col :span="24">
        <div class="bg-white div-margin div-padding">
          <a-avatar :size="64" style="background-color: #87d068" icon="user" />
        </div>
      </a-col>
    </a-row>
    <a-row>
      <a-col :span="16">
        <a-card
          :bordered="false"
          title="进行中的项目"
          class="bg-white div-margin"
        >
          <a slot="extra">全部项目</a>

          <a-card-grid
            v-for="(item, index) in projects"
            :key="index"
            style="width: 33.33%; text-align: left"
          >
            <div>
              <a-avatar size="small" :src="item.src" />
              <a style="margin-left: 10px">Alipay</a>
            </div>
            <div style="margin-top: 10px; color: rgba(0, 0, 0, 0.45)">
              那是一种内在的东西， 他们到达不了，也无法触及的
            </div>
            <div
              style="
                font-size: 12px;
                margin-top: 10px;
                color: rgba(0, 0, 0, 0.45);
              "
            >
              <a>科学搬砖组</a>
            </div>
          </a-card-grid>
        </a-card>
        <!-- <div style="margin: 10px">&nbsp;</div> -->
        <a-card title="动态" :bordered="false" class="bg-white div-margin">
          <a-list>
            <a-list-item :key="index" v-for="(item, index) in activities">
              <a-list-item-meta>
                <a-avatar slot="avatar" :src="item.user.avatar" />
                <div slot="title">
                  <span>{{ item.user.nickname }}</span
                  >&nbsp; 在&nbsp;<a href="#">{{ item.project.name }}</a
                  >&nbsp; <span>{{ item.project.action }}</span
                  >&nbsp;
                  <a href="#">{{ item.project.event }}</a>
                </div>
                <div slot="description">{{ item.time }}</div>
              </a-list-item-meta>
            </a-list-item>
          </a-list>
        </a-card>
      </a-col>
      <a-col :span="8">
        <a-card
          title="便捷导航"
          :bordered="false"
          class="bg-white div-margin button-gruop"
        >
          <a-button size="small" type="link"> 邮件 </a-button>
          <a-button size="small" type="link"> 表格 </a-button>
          <a-button size="small" type="link"> 操作一 </a-button>
          <a-button size="small" type="link"> 操作二</a-button>
          <a-button size="small" type="link"> 操作二</a-button>
          <a-button size="small" type="link"> 发邮件</a-button>
          <a-button size="small" type="link"> 处理订单</a-button>
          <a-button size="small"><a-icon type="plus" />添加</a-button>
        </a-card>
        <a-card title="团队" :bordered="false" class="bg-white div-margin">
          <div class="members">
            <a-row>
              <a-col :span="12" v-for="(item, index) in teams" :key="index">
                <a>
                  <a-avatar size="small" :src="item.avatar" />
                  <span class="member">{{ item.name }}</span>
                </a>
              </a-col>
            </a-row>
          </div>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>
<script>
import img from "@/assets/dashboard/01.png";
import img_ali from "@/assets/dashboard/ali.png";
import img_angular from "@/assets/dashboard/Angular.png";
export default {
  data() {
    return {
      img_ali: img_ali,
      activities: [
        {
          user: {
            avatar: img,
            nickname: "小明",
          },
          project: {
            name: "白鹭酱油开发组",
            action: " 番组计划",
          },
          time: "2020-11-03 16:11:00",
        },
      ],
      teams: [
        {
          avatar: "",
          name: "前端开发团队",
        },
        {
          avatar: "",
          name: "后端开发团队",
        },
        {
          avatar: "",
          name: "游戏引擎",
        },
        {
          avatar: "",
          name: "中间件",
        },
        {
          avatar: "",
          name: "测试团队",
        },
      ],
      projects: [
        {
          title: "1",
          description: "2",
          src: img_ali,
        },
        {
          title: "1",
          description: "2",
          src: img_angular,
        }
      ],
    };
  },
  mounted() {
    this.$data.activities = this.$data.activities.concat(this.$data.activities);
    this.$data.activities = this.$data.activities.concat(this.$data.activities);
    this.$data.activities = this.$data.activities.concat(this.$data.activities);
    this.$data.teams.forEach((v) => (v.avatar = img));
    this.$data.projects = this.$data.projects.concat(this.$data.projects);
    this.$data.projects = this.$data.projects.concat(this.$data.projects);
  },
};
</script>
<style lang="less" scoped>
.bg-white {
  background-color: #fff;
}
.div-padding {
  padding: 5px;
}
.div-margin {
  margin: 5px;
}
.button-gruop button {
  margin: 5px;
}
.members {
  a {
    display: block;
    margin: 12px 0;
    line-height: 24px;
    height: 24px;

    .member {
      font-size: 14px;
      color: rgba(0, 0, 0, 0.65);
      line-height: 24px;
      max-width: 100px;
      vertical-align: top;
      margin-left: 12px;
      transition: all 0.3s;
      display: inline-block;
    }

    &:hover {
      span {
        color: #1890ff;
      }
    }
  }
}
</style>
