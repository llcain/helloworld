
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

        funtion handleClick() {
                const 
        }

        

        // add a sample
        samples.push({"firstName": "sandy", "lastName": "Bells", "product": "lipstick", "age": 23});        

       
        return {
            samples,
            message,
            vueClass: "pinkBg",
            vueSample: "greenBg",
            handleClick
        }
    }    
}

</script>

<template>

   <div v-bind:class="vueClass">
    
        <h1>Customers and Products</h1>
        <p>{{message}}</p>
        <form>
            <label>Customer Name:</label>
            <input type="text" placeholder="Enter new customer's name..." v-model="inpText" value="name">
            <button @click="handleClick">Add New Customer</button>
        </form>

   </div>

   <div>

        <li></li>
   </div>

   <p v-for="sample in samples" v-bind:class="vueSample">{{sample.firstName}}</p>

</template>

<style>
    .pinkBg {
        background-color: lightpink;
        border: solid black 2px;
    }

    .greenBg {
        color: green;
    }
</style>
