<template>
    <div> Parent App Components</div>
    <!-- // <Todo v-for="todo in state.todos" :key="todo.id" :todo="todo" /> -->
    <Todo v-for="todo in todoData" :key="todo.id" :todo="todo" />

    <!-- <button class="btn btn-primary" data-bs-target="#collapseTarget" data-bs-toggle="collapse">
        Bootstrap collapse
    </button>
    <div class="collapse py-2" id="collapseTarget">
        This is the toggle-able content!
    </div> -->
</template>

<script setup>
import Todo from './Todo.vue'
import axios from 'axios'
import { reactive, onMounted, defineProps } from 'vue'
import { ref } from 'vue'

const state = reactive({
    todos: []
})

const todoData = ref([]);

onMounted(async () => {
    try {
        // const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        const response = await axios.get('api/products');

        // state.todos = response.data;
        todoData.value = response.data;
    } catch (error) {
        console.error('Error fetching tods', error);

    }
})
</script>