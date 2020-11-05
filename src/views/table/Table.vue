<template>
  <div class="l-bg-color">
    <a-table
      rowKey="id"
      :columns="columns"
      :data-source="data"
      size="small"
      :scroll="{ x: false, y: 300, scrollToFirstRowOnChange: true }"
      :pagination="{ pageSize: 50 }"
    >
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
  </div>
</template>
<script>
export default {
  data() {
    return {
      columns: [],
      data: [],
    };
  },
  mounted() {
    this.$data.columns = [
      { dataIndex: "name", title: "姓名", sorter: true },
      { dataIndex: "age", title: "年齡", sorter: true },
      { dataIndex: "sex", title: "性別" },
      { dataIndex: "opr", title: "操作" },
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