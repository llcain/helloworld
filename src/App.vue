
<script>
import { ref } from 'vue';

import sampleData from './data/samples.json';

export default {
   
    
    setup() {

       const employees = ref(['Angela', 'Luke', 'Sara']);  

       
       
        return {
            employees,
        }
    }
}

</script>

<template lang="pug">

div.vueClass
        h1 Customers
        input(type='text' name='customername' required id="customerInput"  placeholder='Enter New Customer' v-model='newCustomer')
        button(@click='getInputValue' type="button" id="push") Add

container#customer-container.customer
    li.employeeList(v-for="employee in employees") {{employee}}
        VaButton delete   

div#customerlist 
    
    

</template>

<style>
   .employeeList {
    list-style-type: none;
   }
</style>