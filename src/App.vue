
<script setup>
import { ref } from 'vue';

import sampleData from './data/samples.json';

    const customers = ref([]);
    const newCustomer = ref("");

    function addCustomer() {
        customers.value.push(newCustomer.value);
        newCustomer.value = '';
    }

       const items = ref([]);
       const newItem = ref('');

    function addItem() {
        items.value.push(newItem.value);
        newItem.value = '';
    }    

</script>

<template lang="pug">

div.vueClass
        h1 Customers
        input(type='text' name='customername' required id="customerInput"  placeholder='Enter New Customer' v-model="newCustomer")
        button.addCustomer(@click="addCustomer" type="button" id="push") Add

div#customer-container.customer
    li.employeeList(v-for= "(customer, index) in customers" :key="index") {{ customer }}
        VaButton delete   

div#customerlist  

div
    input(type='text' v-model="newItem" placeholder="Item")
    button(@click="addItem") Add Item

    ul
        li(v-for= "(item, index) in items" :key="index") {{ item }}
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