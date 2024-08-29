
<script>

import samplesData from './data/samples.json';

export default {
    
    data() {
        return {
            samples: samplesData.samples
        }
    }
}

</script>

<template>
   
   <div class="main">
    <div class="left">
        <p v-for="sample in samples" :key="sample.id">{{sample.name}} - {{ sample.price}}$</p>
        <p>bob</p>
        <ul>
            <li>home</li>
            <li>about</li>
        </ul>
    </div>
    
   </div>
</template>

<style>
  
</style>
