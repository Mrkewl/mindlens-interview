import notification from "./components/notification.vue";

export default {
  install: (app, options) => {
    app.component("notification", notification);
  },
};
