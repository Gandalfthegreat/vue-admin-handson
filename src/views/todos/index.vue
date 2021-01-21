<template>
  <input class="new-todo" placeholder="What is the next?" v-model="newTodo" @keyup.enter="addTodo" />
</template>

<script>
let id = 1;
export default {
  data() {
    return {
      todos: [],
      newTodo: "",
      editedTodo: {}
    };
  },
  methods: {
    addTodo() {
      if (!this.newTodo) {
        return;
      }
      this.todos.unshift({
        id: id++,
        title: this.newTodo,
        completed: false
      });
      this.newTodo = "";
    }
  }
};
</script>

<style>
@import "https://unpkg.com/todomvc-app-css@2.1.0/index.css";
*,
::after,
::before {
  box-sizing: inherit;
}
</style>
