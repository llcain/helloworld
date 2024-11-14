
<script>
import { ref } from 'vue';

import sampleData from './data/samples.json';

export default {
   
    
    setup() {

       const employees = ref(['Angela', 'Luke', 'Sara']); 
       

       function getInputValue () {
            const inputValue = input.value;
            employees.push(inputValue);
       }
       
        return {
            employees,
            getInputValue
        }
    }
}

</script>

<template lang="pug">

div.vueClass
        h1 Customers
        input(type='text' name='customername' required id="customerInput"  placeholder='Enter New Customer' v-model='newCustomer')
        button.addButton(@click='getInputValue' type="button" id="push") Add

container#customer-container.customer
    li.employeeList(v-for="employee in employees") {{employee}}
        VaButton update
        VaButton delete   

div#customerlist    
    

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