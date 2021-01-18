<template>
  <el-form-item :label="labelNameMap[label]">
    <el-input
      v-model="form.label"
      maxlength="100"
      minlength="1"
      :placeholder="`请输入${labelNameMap[label]}`"
    ></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: "MyInput",
  data() {
    return {
      labelNameMap: {
        breakfest: "早餐",
        lunch: "午餐",
        dinner: "晚餐",
      },
    };
  },
  props: {
    label: {
      type: String,
      default: "",
    },
    form: {
      type: Object,
      default: {},
    },
  },
};
</script>

<style>
</style>