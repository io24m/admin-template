<template>
  <div>
    <l-container>
      <!-- 查询面板 -->
      <a-form layout="inline">
        <a-row>
          <a-col :md="8">
            <a-form-item label="规则编号">
              <a-input v-model="queryParam.status" placeholder="" />
            </a-form-item>
          </a-col>
          <a-col :md="8">
            <a-form-item label="使用状态">
              <a-select
                v-model="queryParam.status"
                placeholder="请选择"
                default-value="0"
                style="width: 200px"
              >
                <a-select-option value="0">全部</a-select-option>
                <a-select-option value="1">关闭</a-select-option>
                <a-select-option value="2">运行中</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <template v-if="advanced">
            <a-col :md="8">
              <a-form-item label="规则编号">
                <a-input v-model="queryParam.status" placeholder="" />
              </a-form-item>
            </a-col>
            <a-col :md="8">
              <a-form-item label="规则编号">
                <a-input v-model="queryParam.status" placeholder="" />
              </a-form-item>
            </a-col>
            <a-col :md="8">
              <a-form-item label="使用状态">
                <a-select
                  v-model="queryParam.status"
                  placeholder="请选择"
                  default-value="0"
                  style="width: 200px"
                >
                  <a-select-option value="0">全部</a-select-option>
                  <a-select-option value="1">关闭</a-select-option>
                  <a-select-option value="2">运行中</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
          </template>
          <a-col :md="8">
            <a-button type="primary">查询</a-button>
            <a
              @click="() => (this.advanced = !this.advanced)"
              style="margin-left: 8px"
            >
              {{ advanced ? "收起" : "展开" }}
              <a-icon :type="advanced ? 'up' : 'down'" />
            </a>
          </a-col>
        </a-row>
      </a-form>
    </l-container>
    <l-container>
      <!-- 表格 -->
      <a-table
        rowKey="id"
        :columns="columns"
        :data-source="data"
        :scroll="{ x: false, y: false, scrollToFirstRowOnChange: true }"
        :pagination="{ pageSize: 20 }"
      >
        <span slot="remark" slot-scope="text">
          <ellipsis :length="6" tooltip>{{ text }}</ellipsis>
        </span>

        <template slot="operation" slot-scope="text, record">
          <div class="editable-row-operations">
            <span v-if="record.editable">
              <a-tag color="#108ee9">
                <a @click="() => save(record.key)">保存</a>
              </a-tag>
              <a-tag color="#f50">
                <a-popconfirm
                  title="确定删除?"
                  @confirm="() => cancel(record.key)"
                >
                  <a>删除</a>
                </a-popconfirm>
              </a-tag>
            </span>
            <span v-else>
              <a-tag color="#108ee9">
                <a @click="() => edit(record.key)">编辑</a>
              </a-tag>
              <a-dropdown>
                <a-menu slot="overlay" @click="handleMenuClick">
                  <a-menu-item key="1"> 操作一 </a-menu-item>
                  <a-menu-item key="2"> 操作二 </a-menu-item>
                  <a-menu-item key="3"> 操作三 </a-menu-item>
                </a-menu>
                <!-- <a-button> 操作 <a-icon type="down" /> </a-button> -->
                <a-tag color="#108ee9">
                  <a>操作<a-icon type="down" /></a>
                </a-tag>
              </a-dropdown>
            </span>
          </div>
        </template>
      </a-table>
    </l-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      columns: [],
      data: [],
      queryParam: {},
      advanced: false,
    };
  },
  mounted() {
    this.$data.columns = [
      { dataIndex: "name", title: "姓名" },
      { dataIndex: "age", title: "年齡", sorter: (a, b) => a.age - b.age },
      { dataIndex: "sex", title: "性別" },
      {
        dataIndex: "remark",
        title: "备注",
        //scopedSlots: { customRender: "remark" },
      },
      {
        title: "操作",
        dataIndex: "operation",
        scopedSlots: { customRender: "operation" },
      },
    ];
    //    const d=()=>{}

    for (var i = 0; i < 100; i++) {
      this.$data.data.push({
        name: "小李",
        age: i,
        sex: 1,
        opr: "刪除",
        id: i,
        editable: i % 2 === 0,
        remark: "fdsaf 尽快发快递 反馈是教案接口交罚款接口",
      });
      //   this.$data.data.push(d())
    }
  },
  methods: {
    handleMenuClick(e) {
      console.log("click", e);
    },
  },
};
</script>
<style scoped>
.l-bg-color {
  background-color: #fff;
}
</style>