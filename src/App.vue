
<script>

import samplesData from './data/samples.json';

export default {
    
    data() {
        return {
            samples: samplesData
        }
    }


}

</script>

<template>
   
   <div class="main">
    <div class="left">
        <p class="para" v-for="sample in samples" :key="sample.id">{{sample.price}}</p>
    </div>
   
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
