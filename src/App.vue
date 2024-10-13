
<script>
import {ref } from 'vue';

import sampleData from './data/samples.json';

export default {
   
    
    setup() {

        const message = "Hello LaQuisha";

        const samples = [
            {"firstName": "Bob", "lastName": "Doe", "product": "Nutrilite Organic All in one Bar", "age": 43},
            {"firstName": "Bill", "lastName": "Banks", "product": "Energy Drink", "age": 35}            
        ];

                

        // add a sample
        samples.push({"firstName": "sandy", "lastName": "Bells", "product": "lipstick", "age": 23});        

       
        return {
            samples,
            message,
            vueClass: "pinkBg",
            vueSample: "greenBg"
        }
    }    
}

</script>

<template lang="pug">

div.vueClass
        h1 Customer and Products
        input(type='text' name='name' placeholder='Enter New Customer')
        input(type='checkbox' checked)
        <VaButton> Button </VaButton>
  

   <p v-for="sample in samples" v-bind:class="vueSample">{{sample.firstName}}</p>

</template>

<style>
    .vueClass {
        color: blue;
    }

    .greenBg {
        color: green;
    }
</style>
