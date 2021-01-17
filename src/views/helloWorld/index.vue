<template>
    <div>
        <h1> HelloWorld</h1>
        <input v-model="msg">
            {{ msg }}
        </input>
        <button @click="showMsg">button </button>
    </div>
</template>

<script>
export default {
  data() {
    return {
        msg: 'Box2 Box3',
      }
    },
  methods: {
     showMsg() {
         alert(this.msg);
     }
  }
}
</script>

<style scoped>
.box {
    width: 200px;
    height: 200px;

}
.
</style>

