
<script>
import { ref } from 'vue';

import sampleData from './data/samples.json';

export default {
   
    
    setup() {

       const employees = ref(['Angela', 'Luke', 'Sara']);
       const count = ref(0);
    
        function getInputValue() {
           const customerInput = document.getElementById('customerInput');
           const customerValue = customerInput.value;
           document.getElementById('customerlist').innerHTML = customerValue;
           customerInput.value = '';
        }

        function add() {
            let taskValue = document.getElementById('taskInput');
            if(taskValue.length == 0) {
                alert('Enter a task')
            } else {
                document.getElementById('#tasks').innerHTML += `
                 const newdiv = document.createElement('newdiv');

                    <div id="tasks">
                        <span id="taskname">
                            ${document.querySelector('#newtask input').value}
                           <button>Delete</button>
                        </span>
                    </div>
                `;

                
            }
        }

       
       
        return {
            employees,
            count,
            getInputValue,
            add
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
        input(type='text' name='customername' required id="customerInput"  placeholder='Enter New Customer' v-model='newCustomer')
        button(@click='getInputValue' type="button" id="push") Add

container#customer-container.customer
    p(v-for="employee in employees") {{employee}}
    button(@click='count++') {{ count }}
    

div#customerlist

div.container
    div#task
        input#taskInput(type='text' placeholder='Add Task')
        button#push(@click='add') Add
    div#tasks
    
    
    

</template>

<style>
   
</style>