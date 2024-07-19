<template>
    <div>

    </div>

    <div class="container mt-3">
        <h2>Product Id : {{ todo.id }}</h2>
        <div class="card">
            <div class="card-body"> </div>
            <div class="card-body"> Productname : {{ todo.productname }}</div>
            <div class="card-body"> Description : {{ todo.description }}</div>
            <div class="card-body"> Details : {{ todo.details }}</div>

        </div>
    </div>
</template>

<script setup>
import { defineProps, ref, computed } from 'vue'

const props = defineProps({
    todo: Object,
});
</script>