<template>
  <div>
    <header>
      <h1>TodoList</h1>
      <!-- 点击回车，新建一个todo项-->
      <input @keydown.enter="addTodo" v-model="newTodo" />
    </header>
    <section>
      <ul>
        <li v-for="todo in todos" :key="todo.id">
          <!-- 1.checkbox选中做完的项 2.双击编辑 3.删除-->
          <div>
            <span>{{ todo.title }}</span>
            <button @click="removeItem(todo)">删除</button>
          </div>
        </li>
      </ul>
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
      editedTodo: "",
    };
  },
  methods: {
    addTodo() {
      this.todos.unshift({
        id: id++,
        title: this.newTodo,
        completed: false,
      });
      this.newTodo = "";
    },
    removeItem(todo) {
      // 找到待删除项index
      const toRemoveIndex = this.todos.findIndex((item) => item.id === todo.id);
      this.todos.splice(toRemoveIndex, 1);
    },
  },
};
</script>

<style>
</style>