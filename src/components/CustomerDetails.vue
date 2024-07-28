<script setup>
import axios from 'axios'
import { reactive, onMounted, defineProps, toRaw } from 'vue'
import { ref } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { useCustomerStore } from '../stores/customerstore'

const storeCustomer = useCustomerStore()

const customerData = reactive({
    response: {
    }
});
const modalData = reactive({
    id: '',
    response: {
    }
});
const errorResponse = reactive({
    errorMsg: '',
    hasError: false,
    color: '',
});
const modalPopUpFunction = () => {
    console.log('modalPopUpFunction');
    // const cusData = toRaw(customerData);
    // if (Object.keys(cusData.response).length === 0 || cusData.response === undefined || cusData.response === null) {
    //     modalData.response = {};
    //     modalData.id = '';
    // }
    if (Object.keys(storeCustomer.customerData).length === 0 || cusData.response === undefined || cusData.response === null) {
        modalData.response = {};
        modalData.id = ''
    }

}

const submitData = () => {
    // customerData.response = modalData.response
    //  storeCustomer.customerData = customerData.response;
    storeCustomer.customerData = modalData.response;
    console.log('submitData');
}

const verifyMember = (async () => {

    console.log('verifyMember');
    errorResponse.hasError = false;
    try {
        const response = await axios.get(`api/products/${modalData.id}`);
        modalData.response = response.data;
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

    <!--- --->

    <div class="mt-2 mb-4 p-5 bg-white text-dark rounded border-css">
        <!-- <div class="row">
            <div class="col-3"><strong>Client ID: </strong>{{ customerData.response.clientId }}</div>
            <div class="col-3"><strong>Certificate Id: </strong>{{ customerData.response.CertificateId }}</div>
            <div class="col-3"><strong>Assigned CSS: </strong>{{ customerData.response.AssignedCss }}</div>
            <div class="col-3">
                <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal" @click="modalPopUpFunction">Edit</a>
            </div>
        </div>
        <div class="row">
            <div class="col-3"><strong>Client Name: </strong>{{ customerData.response.ClientName }} </div>
            <div class="col-3"><strong>Member Name:</strong> {{ customerData.response.MemberName }} </div>
        </div>

        <div class="row ">
            <div class="col-3"></div>
            <div class="col-3"><strong>SIN: </strong>{{ customerData.response.SIN }} </div>
        </div> -->
        <div class="row">
            <div class="col-3"><strong>Client ID: </strong>{{ storeCustomer.customerData.clientId }}</div>
            <div class="col-3"><strong>Certificate Id: </strong>{{ storeCustomer.customerData.CertificateId }}</div>
            <div class="col-3"><strong>Assigned CSS: </strong>{{ storeCustomer.customerData.AssignedCss }}</div>
            <div class="col-3">
                <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal" @click="modalPopUpFunction">Edit</a>
            </div>
        </div>
        <div class="row">
            <div class="col-3"><strong>Client Name: </strong>{{ storeCustomer.customerData.ClientName }} </div>
            <div class="col-3"><strong>Member Name:</strong> {{ storeCustomer.customerData.MemberName }} </div>
        </div>

        <div class="row ">
            <div class="col-3"></div>
            <div class="col-3"><strong>SIN: </strong>{{ storeCustomer.customerData.SIN }} </div>
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

                        <input type="text" v-model="modalData.id" name="clientid"
                            class="col-lg-3 border rounded w-full py-2 px-3 me-2" placeholder="Enter Policy Number" />
                        <!-- <input type="text" class="col-lg-4">{{ customerData.id }}</input> -->
                        <input type="text" v-model="modalData.response.CertificateId" name="clientid"
                            class="col-lg-3 border rounded w-full py-2 px-3  me-2" placeholder="Enter certificate id" />

                        <input type="text" v-model="modalData.response.SIN" name="clientid"
                            class="col-lg-3 border rounded w-full py-2 px-3  me-2" placeholder="Enter SIN" />

                        <button type="button" @click="verifyMember" class="col-lg-2 btn btn-danger  me-2">Verify
                            Member</button>


                    </div>
                    <div>
                        <div class="space-margin">
                            <strong>Client Name :</strong> {{ modalData.response.ClientName }}

                        </div>
                        <div class="space-margin">
                            <strong> Member First name : </strong>{{ modalData.response.MemberFirstName }}
                        </div>
                        <div class="space-margin">
                            <strong> Member Last name :</strong> {{ modalData.response.MemberLastName }}
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
                        <button type="button" @click="submitData" class="col-lg-2 btn btn-danger  me-2"
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
</style>