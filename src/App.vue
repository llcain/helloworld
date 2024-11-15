
<script>
import { ref } from 'vue';

import sampleData from './data/samples.json';

export default {
   
    
    setup() {

       const customerNames = ref(['Angela', 'Luke', 'Sara']);
       const newCustomer = ref("");

       const items = ref([]);
       const newItem = ref('');

       function addItem() {
        items.value.push(newItem.value);
        newItem.value = '';
       }     

       
       
        return {
            customerNames,
            newCustomer,
            items,
            newItem,
            addItem
        }
    }
}

</script>

<template lang="pug">

div.vueClass
        h1 Customers
        input(type='text' name='customername' required id="customerInput"  placeholder='Enter New Customer' v-model="newCustomer")
        button.addButton(type="button" id="push") Add

div#customer-container.customer
    li.employeeList(v-for="customerName in customerNames") {{customerName}}
        VaButton update
        VaButton delete   

div#customerlist 
p newCustomer value: {{newCustomer}}  

div
    input(type='text' v-model="newItem" placeholder="Item")
    button(@click="addItem") Add Customer

    ul
        li(v-for= "(item, index) in items" :key="index") {{ item}}
            VaButton delete
    

</template>

<style scoped>
   .employeeList {
    list-style-type: none;
   }
   .addButton {
    background-Color: #808000;
    padding: 5px;
   }
</style>