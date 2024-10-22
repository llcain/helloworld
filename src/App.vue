
<script>
import { ref } from 'vue';

import sampleData from './data/samples.json';

export default {
   
    
    setup() {

       const employees = ref(['Angela', 'Luke', 'Sara']);
       const count = ref(0);
    
        
       
        return {
            employees,
            count
        }
    },
    
    mounted() {
        console.log(this.count)
    }
}

</script>

<template lang="pug">

div.vueClass
        h1 Customer and Products
        input(type='text'  placeholder='Enter New Customer' v-model='newCustomer')
        button(type="button") Add

container#customer-container.customer
    p(v-for="employee in employees") {{employee}}
    button("v-on:click"='count++') {{ count }}
    
    
    

</template>

<style>
   
</style>