<template>
  <div>
    <h1>HelloWorld</h1>
    <input v-model="msg" />
    {{ msg }}
    <button @click="showMsg">button</button>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: ""
    };
  },
  methods: {
    showMsg() {
      alert(this.msg);
    }
  }
};
</script>

<style scoped>
.box {
  width: 200px;
  height: 200px;
}
</style>

