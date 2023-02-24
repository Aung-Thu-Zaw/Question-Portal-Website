import "./bootstrap";
import { createApp } from "vue";
import router from "./router";
import store from "./store";

import VMdEditor from "@kangc/v-md-editor";
import "@kangc/v-md-editor/lib/style/base-editor.css";
import vuepressTheme from "@kangc/v-md-editor/lib/theme/vuepress.js";
import "@kangc/v-md-editor/lib/theme/style/vuepress.css";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
// Prism
import Prism from "prismjs";
// highlight code
import "prismjs/components/prism-json";

VMdEditor.use(vuepressTheme, {
    Prism,
});

const options = {
    position: "top-right",
    timeout: 4000,
    closeOnClick: true,
    pauseOnFocusLoss: true,
    pauseOnHover: true,
    draggable: true,
    draggablePercent: 0.6,
    showCloseButtonOnHover: false,
    hideProgressBar: false,
    closeButton: "button",
    icon: "fas fa-rocket",
    rtl: false,
};

createApp({})
    .use(router)
    .use(store)
    .use(VMdEditor)
    .use(Toast, options)
    .mount("#app");
