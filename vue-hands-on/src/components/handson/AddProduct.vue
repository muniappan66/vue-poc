<template>
    <div class="container">




        <form @submit.prevent="addProductInfo">
            <div class="form-group">
                <label for="ProductName">Product Name</label>
                <input type="text" class="form-control" id="Firstname" v-model="form.productname"
                    placeholder="Enter ProductName">
            </div>
            <div class="form-group">
                <label for="Description">Description</label>
                <input type="text" class="form-control" id="Lastname" v-model="form.description"
                    placeholder="Enter Description">
            </div>
            <div class="form-group">
                <label for="Details">Details</label>
                <input type="text" class="form-control" id="email" v-model="form.details" placeholder="Enter Details">
            </div>

            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
</template>

<script setup>
import axios from 'axios';
import { reactive } from 'vue';

const form = reactive({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',

});
const addProductInfo = async () => {
    const formData = {
        productname: form.productname,
        description: form.description,
        details: form.details,
    };

    try {
        //const response = await axios.post('/fgl', formData);
        const response = await axios.post('/api/products', formData);
    } catch (error) {

    }
};
</script>
