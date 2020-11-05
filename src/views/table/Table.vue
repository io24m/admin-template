<template>
  <div class="l-bg-color">
    <a-table
      rowKey="id"
      :columns="columns"
      :data-source="data"
      size="small"
      :scroll="{ x: false, y: '50%', scrollToFirstRowOnChange: true }"
      :pagination="{ pageSize: 50 }"
      
    >
      <template slot="operation" slot-scope="text, record">
        <div class="editable-row-operations">
          <span v-if="record.editable">
            <a @click="() => save(record.key)">保存</a>
            <a-popconfirm
              title="Sure to cancel?"
              @confirm="() => cancel(record.key)"
            >
              <a>取消</a>
            </a-popconfirm>
          </span>
          <span v-else>
            <a :disabled="editingKey !== ''" @click="() => edit(record.key)"
              >编辑</a
            >
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
      { dataIndex: "name", title: "姓名" },
      { dataIndex: "age", title: "年齡" },
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
};
</script>
<style scoped>
.l-bg-color {
  background-color: #fff;
}
</style>