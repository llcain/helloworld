
<script>
import {ref } from 'vue';

import sampleData from './data/samples.json';

export default {
   
    
    setup() {

        const message = "Hello LaQuisha";

        const samples = [
            {"firstName": "Bob", "lastName": "Doe", "product": "Nutrilite Organic All in one Bar", "age": 43},
            {"firstName": "Matt", "lastName": "Banks", "product": "Energy Drink", "age": 35}            
        ];

        // add a sample
        samples.push({"firstName": "sandy", "lastName": "Bells", "product": "lipstick", "age": 23});        

       
        return {
            samples,
            message,
            vueClass: "pinkBg"
        }
    }    
}

</script>

<template>

   <div v-bind:class="vueClass">
    
        <h1>Customers and Products</h1>
        <p>{{message}}</p>


   </div>

</template>

<style>
    .pinkBg {
        background-color: lightpink;
        border: solid black 2px;
    }
</style>
