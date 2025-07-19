

import { createApp } from 'vue';
import App from './App.vue';
import { createVuestic } from "vuestic-ui";
import "vuestic-ui/css";
import  {Amplify}  from 'aws-amplify';
import awsconfig from './aws-exports';
import '@aws-amplify/ui-vue/styles.css';

Amplify.configure(awsconfig);

createApp(App).mount("#app");
