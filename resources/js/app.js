import "./bootstrap";
import { createApp } from "vue";
import App from "./layouts/App.vue";
import router from "./router";
import store from "./store";

import VMdEditor from "@kangc/v-md-editor";
import "@kangc/v-md-editor/lib/style/base-editor.css";
import vuepressTheme from "@kangc/v-md-editor/lib/theme/vuepress.js";
import "@kangc/v-md-editor/lib/theme/style/vuepress.css";

// Prism
import Prism from "prismjs";
// highlight code
import "prismjs/components/prism-json";

VMdEditor.use(vuepressTheme, {
    Prism,
});

createApp(App).use(router).use(store).use(VMdEditor).mount("#app");
