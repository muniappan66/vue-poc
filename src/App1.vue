<script setup>
import { ref } from 'vue'
let message = ref('test data');
let status = ref('inactive');
const tasks = ref(['number 1', 'number 2', 'number 3']);
let link = 'https://google.com';
let newTask = ref('');

const toggleStatus = () => {
  if (status.value === 'active') {
    status.value = 'pending';
  } else if (status.value === 'pending') {
    status.value = 'inactive';
  } else {
    status.value = 'active';
  }
}

const addTask = (event) => {
  event.preventDefault();
  tasks.value.push(newTask.value);
  newTask.value('');
}

const deleteTask = (index) => {
  tasks.value.splice(index, 1);
}
</script>

<template>


  <h1>{{ message }}</h1>
  <p v-if="status === 'active'">John is an active user</p>
  <p v-else-if="status === 'pending'">John is an pending user</p>
  <p v-else="status === 'ianctive'">John is an inactive user</p>

  <form>
    <input type="text" id="newTask" v-model="newTask" />
    <button type="submit" @click="addTask($event)">add task</button>
  </form>

  <h2>tasks</h2>
  <li v-for="(task, index) in tasks">
    <span>{{ task }}</span>
    <button @click="deleteTask(index)">x</button>
  </li>

  <a :href="link">click here</a>
  <br>
  <button @click="toggleStatus"> change status</button>

</template>

<style scoped></style>