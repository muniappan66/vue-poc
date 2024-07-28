import { defineStore } from "pinia";

export const useCustomerStore = defineStore({
  id: "customerData",
  state: () => ({
    customerData: {},
  }),
  getters: {},
  actions: {
    // setCustomerData(obj) {
    //   this.customerData = obj;
    // },
    // getCustomerData() {
    //   return this.customerData;
    // },
  },
});
