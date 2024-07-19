<script setup>
import axios from 'axios'
import { reactive, onMounted, defineProps } from 'vue'
import { ref } from 'vue'
const customerData = ref([]);

onMounted(async () => {
    try {
        // const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        const response = await axios.get('api/products/3');
        // state.todos = response.data;
        customerData.value = response.data;
    } catch (error) {
        console.error('Error fetching tods', error);

    }
})

</script>

<template>

    <div>
        <h5 class="d-inline-block">Request Details &nbsp; &nbsp;</h5>
    </div>

    <div class="mt-2 mb-4 p-5 bg-white text-dark rounded border-css">


        <div class="row">
            <div class="col-3"><strong>Client ID: </strong>{{ customerData.clientId }}</div>
            <div class="col-3"><strong>Certificate Id: </strong>{{ customerData.CertificateId }}</div>
            <div class="col-3"><strong>Assigned CSS: </strong>{{ customerData.AssignedCss }}</div>
            <div class="col-3">
                <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal" @click="modalPopUpFunction">Edit</a>
            </div>

        </div>
        <div class="row">
            <div class="col-3"><strong>Client Name: </strong>{{ customerData.ClientName }} </div>
            <div class="col-3"><strong>Member Name:</strong> {{ customerData.MemberName }} </div>
        </div>

        <div class="row ">
            <div class="col-3"></div>
            <div class="col-3"><strong>SIN: </strong>{{ customerData.SIN }} </div>
        </div>


    </div>

    <div>
        <h6 class="d-inline-block"> &nbsp; &nbsp;</h6>
    </div>
</template>

<style scoped>
.border-css {
    border: 1px solid grey;
}

a {
    text-decoration: none !important;
}
</style>