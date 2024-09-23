
<script>
import {ref } from 'vue';

import sampleData from './data/samples.json';

export default {
   
    
    setup() {

        const samples = [
            {"firstName": "Bob", "lastName": "Doe", "product": "Nutrilite Organic All in one Bar", "age": 43},
            {"firstName": "Matt", "lastName": "Banks", "product": "Energy Drink", "age": 35}            
        ];

        // add a sample
        samples.push({"firstName": "sandy", "lastName": "Bells", "product": "lipstick", "age": 23}); 

        const books = [
            {"id": 1, "title": "Mindset", "author": "Carol S. Dweck"},
            {"id": 2, "title": "Compound Effect", "author": "Darren Hardy"}
        ];

        // update a book
        books[0].title = "Motivational Speaking";

        const courses = [
            {"id": 1, "name": "Web development", "offered": "online"},
            {"id": 2, "name": "Wed Design", "offered": "classroom"},
            {"id": 3, "name": "Vue", "offered": "classroom"},
            {"id": 4, "name": "AWS", "offered": "online"}
        ]

        // delete a course
        delete courses[2];

        const candles = [
            {"id": 1, "name": "Autumn Leaves", "price": 24},
            {"id": 2, "name": "Witches' Brew", "price": 22},
            {"id": 3, "name": "Autumn Wreath", "price": 26}
        ]

        return {
            samples,
            books,
            courses,
            candles
        }
    }    
}

</script>

<template>

    <h1>Customer and Products</h1>

    <label for="name">Name:</label>
    <input type="text" id="name" name="name" value="John">

    <label for="product">Product:</label>
    <input type="text" id="product" name="product" value="Enter product">

    <label for="price">Price:</label>
    <input type="text" id="price" name="price" value="Enter price">

    <input type="submit" value="Submit">

    <div class="customer-list">
    
    </div>
   
   <div class="main">
    <div>
        <p v-for="sample in samples">{{sample}}</p>
    </div>
    
    
   </div>

</template>

<style>
    .create {
        color: green;
    }
</style>
