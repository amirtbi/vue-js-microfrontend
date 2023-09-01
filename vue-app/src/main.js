import { createApp, defineAsyncComponent } from "vue";
import "./style.css";
import App from "./App.vue";

import("header/HeaderApp").then((HeaderAppModule) => {
  console.log("header app", HeaderAppModule);
  const HeaderApp = HeaderAppModule.default;
  const headerapp = new HeaderApp();
  headerapp.render(["home"]);
});
// console.log("header", Header);
// console.log("base header", await BaseHeader);
const app = createApp(App);
// app.component("base-header", BaseHeader);

app.mount("#app");
