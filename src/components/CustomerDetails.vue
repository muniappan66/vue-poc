<script setup>
import axios from 'axios'
import { reactive, onMounted, defineProps } from 'vue'
import { ref } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
const customerData = ref([]);

const errorResponse = reactive({
    errorMsg: '',
    hasError: false,
    color: '',
});



// onMounted(async () => {
//     try {
//         // const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
//         const response = await axios.get('api/products/2');
//         // state.todos = response.data;
//         customerData.value = response.data;
//     } catch (error) {
//         console.error('Error fetching tods', error);

//     }
// });
const modalPopUpFunction = () => {
    console.log('modalPopUpFunction');


}

const verifyMember = (async () => {

    console.log('verifyMember');
    errorResponse.hasError = false;
    try {
        // const response = await axios.get(`/api/jobs/${jobId}`);
        const response = await axios.get(`api/products/${customerData.value.id}`);
        customerData.value = response.data;
    } catch (error) {
        if (error.response.status === 404) {
            errorResponse.errorMsg = 'Enter a valid Policy Number';
            errorResponse.color = "red";
            errorResponse.hasError = true;
        }

    }
});

const closePopUp = (async () => {

    console.log("closePopUp");

    //customerData.value = [];
    // $('#exampleModal').modal('hide');


});



</script>

<template>
    <div>
        <h5 class="d-inline-block">Customer Details &nbsp; &nbsp;&nbsp;
            &nbsp;</h5>
        <font-awesome-icon :icon="['fas', 'triangle-exclamation']" />
        <font-awesome-icon icon="triangle-exclamation" />
        <p v-if="customerData.length === 0 || undefined" class="d-inline-block fst-italic text-danger"> Mandatory
            member
            data is
            missing</p>


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

    <div class="modal fade" id="exampleModal" ref="exampleModal" tabindex="-1" role="dialog"
        aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog verybigmodal" role="document">
            <div class="modal-content">
                <div class="modal-header ms-2 ">
                    <div class="requestBox">
                        <div class="item">
                            <label for="clientName"><strong>Request ID : </strong></label>
                            <!-- v-model="customerData.id" -->
                            <input type="text" name="clientid" class="border rounded w-full py-2 px-3 me-2 ms-2"
                                placeholder="Enter Request Id" />
                        </div>
                        <div class="item">
                            <button type="button" class="alignEnd close" @click="closePopUp" data-bs-dismiss="modal"
                                aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>

                        </div>
                    </div>

                </div>
                <h5 class="ms-4 mt-3">Customer Details</h5>
                <div class="modal-body">
                    <div class="row ms-4">
                        <div class="col-lg-3"><strong>Policy Number</strong></div>
                        <div class="col-lg-3"><strong>Certificate Id</strong></div>
                        <div class="col-lg-3"><strong>SIN</strong></div>
                        <div class="col-lg-3"><strong></strong></div>



                    </div>
                    <div class="row ms-3">

                        <input type="text" v-model="customerData.id" name="clientid"
                            class="col-lg-3 border rounded w-full py-2 px-3 me-2" placeholder="Enter Policy Number" />
                        <!-- <input type="text" class="col-lg-4">{{ customerData.id }}</input> -->
                        <input type="text" v-model="customerData.CertificateId" name="clientid"
                            class="col-lg-3 border rounded w-full py-2 px-3  me-2" placeholder="Enter certificate id" />

                        <input type="text" v-model="customerData.SIN" name="clientid"
                            class="col-lg-3 border rounded w-full py-2 px-3  me-2" placeholder="Enter SIN" />

                        <button type="button" @click="verifyMember" class="col-lg-2 btn btn-danger  me-2">Verify
                            Member</button>


                    </div>
                    <div>
                        <div class="space-margin">
                            <strong>Client Name :</strong> {{ customerData.ClientName }}

                        </div>
                        <div class="space-margin">
                            <strong> Member First name : </strong>{{ customerData.MemberFirstName }}
                        </div>
                        <div class="space-margin">
                            <strong> Member Last name :</strong> {{ customerData.MemberLastName }}
                        </div>

                        <div :style="{ color: errorResponse.color }" v-if="errorResponse.hasError">
                            {{ errorResponse.errorMsg }}
                        </div>

                    </div>

                </div>
                <div>
                    <div class="modal-footer footer-button ">
                        <button type="button" @click="closePopUp" class="col-lg-2 btn btn-danger  me-2"
                            data-bs-dismiss="modal">Cancel</button>
                        <button type="button" class="col-lg-2 btn btn-danger  me-2"
                            data-bs-dismiss="modal">Submit</button>
                    </div>
                </div>


            </div>
        </div>
    </div>
</template>

<style scoped>
.verybigmodal {
    max-width: 95%;
}

.space-margin {
    margin: 15px;
}

.requestBox {
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
}

.footer-button {
    justify-content: space-between;
    width: 100%;
}

.alignEnd {
    display: inline-flex;
    align-items: center;
    justify-content: center;
}

.border-css {
    border: 1px solid grey;
}

a {
    text-decoration: none !important;
}

/* .container {
    // justify-content: center;
    /* align-self: center;} */
</style>