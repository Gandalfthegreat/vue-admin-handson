<template>
  <div>
    <el-button @click="fetchData">Button</el-button>
    <div>{{list}}</div>
  </div>
</template>

<script>
import { getList } from "@/api/table";
export default {
  data() {
    return {
      list: null,
      listLoading: true
    };
  },
  methods: {
    fetchData() {
      this.listLoading = true;
      getList(11).then(res => {
        this.list = res.data;
        this.listLoading = ture;
      });
    }
  }
};
</script>

<style>
</style>
