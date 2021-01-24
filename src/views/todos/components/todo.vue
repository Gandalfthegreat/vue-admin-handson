<template>
  <div :class="{editing: isEdited}">
    <div class="view">
      <input type="checkbox" class="toggle" @change="updateChecked($event.target.checked)" />
      <label @dblclick="editTodo(todo)">{{title }}</label>
      <button class="destory" @click="removeTodo(todo)"></button>
    </div>
    <input
      type="text"
      class="edit"
      v-model="editingTitle"
      v-autofoucs
      v-if="isEdited"
      @blur="doneEdit()"
      @keyup.enter="doneEdit()"
      @keyup.esc="cancelEdit()"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isEdited: false,
      editingTitle: "",
    };
  },
  props: {
    title: {
      type: String,
      default: "",
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    editTodo() {
      this.editingTitle = this.title;
      this.isEdited = true;
    },
    doneEdit() {
      if (this.isEdited) {
        this.$emit("update:title", this.editingTitle);
        this.isEdited = false;
      }
    },
    cancelEdit() {
      this.isEdited = false;
    },
    updateChecked(completed) {
      this.$emit("update:completed", completed);
    },
    removeTodo() {
      this.$emit("delete");
    },
  },
};
</script>

<style>
</style>
