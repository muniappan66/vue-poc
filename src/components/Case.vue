<template>


    <div class="container mt-3 bg-light">
        <!-- <div class="">
            <h4>
                Case Component
            </h4>
        </div> -->
        <div class="">
            <img src="../assets/canada-life-logo.svg" alt="canada-life-logo" width="130px" height="100px">
        </div>
        <CustomerDetails />
        <RequestDetails />

    </div>
</template>

<script setup>
import CustomerDetails from './CustomerDetails.vue'
import RequestDetails from './RequestDetails.vue'
</script>
