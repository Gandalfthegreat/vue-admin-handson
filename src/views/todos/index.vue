<template>
  <div>
    <section class="todoapp">
      <header class="header">
        <h1>todos</h1>
        <input
          class="new-todo"
          placeholder="What is the next?"
          v-model="newTodo"
          @keyup.enter="addTodo"
        />
      </header>
      <section class="main" v-show="todos.length">
        <ul class="todo-list">
          <li
            v-for="todo in todos"
            class="todo"
            :key="todo.id"
            :class="{completed: todo.completed, editing: todo.id === editedTodo.id}"
          >
            <div class="view">
              <input class="toggle" type="checkbox" v-model="todo.completed" />
              <label @dblclick="editTodo(todo)">{{todo.title}}</label>
              <button class="destory" @click="removeTodo(todo)"></button>
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

      <footer class="footer" v-show="todos.length">
        <span class="todo-count">
          <strong>{{remaining}}</strong>
          {{ remaining | pluralize}} left
        </span>
        <button
          class="clear-completed"
          @click="removeCompleted"
          v-show="todos.length > remaining"
        >Clear Completed</button>
      </footer>
    </section>
  </div>
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
  computed: {
    remaining() {
      return this.todos.filter(x => !x.completed).length;
    }
  },
  filters: {
    pluralize(num) {
      return num > 1 ? "items" : "item";
    }
  },
  methods: {
    editTodo(todo) {
      this.editTodo = { ...todo };
    },
    doneEdit(todo) {
      this.todos = this.todos.map(x => {
        return todo.id === x.id ? { ...todo } : { ...x };
      });
      this.editTodo = {};
    },
    cancelEdit() {
      this.editTodo = {};
    },
    removeTodo(todo) {
      const index = this.todos.findIndex(x => x.id === todo.id);
      this.todos.splice(index, 1);
    },
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
    },
    removeCompleted() {
      this.todos = this.todos.filter(x => !x.completed);
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
