
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
    
   </div>
</template>

<style scoped>
  
</style>
