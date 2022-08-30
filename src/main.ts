import { createApp } from "vue";
import { createPinia } from "pinia";
import * as formkit from '@formkit/vue';
import formkitConfig from './formkit.config';

import App from "./App.vue";
import router from "./router";

import "./assets/index.css";
import "./assets/main.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(formkit.plugin, formkit.defaultConfig(formkitConfig))

app.mount("#app");
