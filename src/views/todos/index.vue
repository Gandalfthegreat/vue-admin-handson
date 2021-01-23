<template>
  <section class="todoapp">
    <header class="header">
      <h1>todos</h1>
      <input class="new-todo" v-model="newTodo" @keyup.enter="addTodo" />
    </header>
    <section class="main" v-show="todos.length">
      <ul class="todo-list">
        <li
          class="todo"
          v-for="todo in todos"
          :key="todo.id"
          :class="{completed: todo.completed, editing: todo.id === editedTodo.id}"
        >
          <div class="view">
            <input class="toggle" type="checkbox" v-model="todo.completed" />
            <label @dblclick="editTodo(todo)">{{ todo.title}}</label>
            <button class="destroy" @click="removeTodo(todo)"></button>
          </div>
          <input
            class="edit"
            type="text"
            v-model="editedTodo.title"
            @blur="doneEdit(editedTodo)"
            @keyup.enter="doneEdit(editedTodo)"
            @keyup.esc="cancelEdit()"
          />
        </li>
      </ul>
    </section>
  </section>
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
      if (!this.newTodo) return;
      this.todos.unshift({
        title: this.newTodo,
        id: id++,
        completed: false
      });
      this.newTodo = "";
    },
    doneEdit(todo) {
      this.todos = this.todos.map(x => {
        return todo.id === x.id ? { ...todo } : { ...x };
      });
      cancelTodo();
    },
    cancelTodo() {
      this.editedTodo = {};
    },
    editTodo(todo) {
      this.editedTodo = { ...todo };
    },
    removeTodo(todo) {
      const removeIndex = this.todos.findIndex(x => x.id === todo.id);
      this.todos.splice(removeIndex, 1);
    }
  }
};
</script>

<style>
@import "https://unpkg.com/todomvc-app-css@2.1.0/index.css";
</style>
