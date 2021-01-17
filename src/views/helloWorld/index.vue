<template>
  <div class="container">
    <h1>健康小助手</h1>
    <el-form :model="form" label="表单">
      <el-form-item label="早餐">
        <el-input v-model="form.breakfest" maxlength="100" minlength="1" placeholder="请输入早餐吃什么"></el-input>
      </el-form-item>
      <el-form-item label="午餐">
        <el-input v-model="form.lunch" maxlength="100" minlength="1" placeholder="请输入午餐吃什么"></el-input>
      </el-form-item>
      <el-form-item label="晚餐">
        <el-input v-model="form.dinner" maxlength="100" minlength="1" placeholder="请输入晚餐吃什么"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" size="mini" @click="submitForm">提交表单</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        breakfest: "",
        lunch: "",
        dinner: "",
      },
    };
  },
  methods: {
    submitForm() {
      alert(JSON.stringify(this.form));
    },
  },
};
</script>

<style scoped>
.container .box {
  width: 200px;
  height: 200px;
}

.container /deep/ .el-button {
  width: 400px;
}
.el-input {
  width: 200px;
}
.container {
  margin-left: 50px;
}
.container .el-button {
  width: 100px;
}
</style> 



