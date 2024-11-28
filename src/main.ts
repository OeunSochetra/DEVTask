import { createApp } from "vue";
import "./style.css";
import router from "./router";
import { createPinia } from "pinia";
import App from "./App.vue";
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "@arco-design/web-vue/dist/arco.css";
import ArcoVue from "@arco-design/web-vue";

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router); // Use the router
app.mount("#app");
app.use(ArcoVue);
