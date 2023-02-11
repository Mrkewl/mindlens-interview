import primaryIcon from "./components/primaryIcon.vue";
import secondaryIcon from "./components/secondaryIcon.vue";

export default {
  install: (app, options) => {
    app.component("primaryIcon", primaryIcon);
    app.component("secondaryIcon", secondaryIcon);
  },
};
