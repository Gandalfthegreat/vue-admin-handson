<template>
  <div class="container">
    <h1>健康小助手</h1>
    <el-form :model="form" label="表单">
      <my-input label="breakfest" :form="form"></my-input>
      <my-input label="lunch" :form="form"></my-input>
      <my-input label="dinner" :form="form"></my-input>
         <el-form-item>
        <el-input
          
        > 
      </el-form-item>
      <el-form-item>
        <el-button type="primary" size="mini" @click="submitForm">提交表单</el-button>
      </el-form-item>
   
    </el-form>
  </div>
</template>
 
<script>
import MyInput from "./component/MyInput";
export default {
  components: {
    MyInput,
  },
  data() {
    return {
      form: {
        breakfest: "",
        lunch: "",
        dinner: "",
        value: "",
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
.container /deep/.el-input {
  width: auto;
}
.el-form .el-input {
  width: 50%;
  min-width: 200px;
}
.container {
  margin-left: 50px;
}
.container .el-button {
  width: 100px;
}
</style> 



