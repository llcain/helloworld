
<script>





import json from './data/samples.json';
export default{
    data(){
        return{
            myJson: json
        }
    },
    methods: {
        addSample: function() {
            json.myJson.data.push({"name": "garlic heart health", "descr": "helps your hear", "price": 35});
        }
    }
}


</script>

<template>
   
   <div class="main">
    <div class="left">
        <p class="para" v-for="data in myJson">{{data.price}}</p>
    </div>
    <button @click="addSample">Add Sample</button>
    <p v-for="data in myJson">{{data.price}}</p>
    <div class="right">
        <form>
            <label for="name">Name:</label><br>
            <input type="text" id="name" name="name" value="John Doe"><br>
            
            <label for="description">Description:</label><br>             
            <textarea rows="9" cols="70" name="description" value="">Enter description:....</textarea><br>

            <label for="price">Price:</label><br>
            <input type="int" id="price" name="price" value="25"><br>

            <button class="input-button" @click="create" type="submit" value="Submit">Submit</button>
        </form>
    </div>
    
   </div>
</template>

<style>
 
</style>
