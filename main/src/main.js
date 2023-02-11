import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import icons from "jazsley-button";
import notifcation from "jazsley-notification";

const app = createApp(App);

app.use(icons);
app.use(notifcation);

app.mount("#app");
