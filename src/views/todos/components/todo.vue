<template>
  <div :class="{editing: isEdited}">
    <div class="view">
      <input type="checkbox" class="toggle" @change="updateChecked($event.target.checked)" />
      <label @dblclick="editTodo(todo)">{{title }}</label>
      <button class="destory" @click="removeTodo(todo)"></button>
    </div>
    <input type="text" class="edit" v-model="editingTitle" v-autofoucs v-if="isEdited" @blur="doneEdit()" @keyup.enter="doneEdit()" @keyup.esc="cancelEdit()">
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
