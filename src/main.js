import './assets/main.css'
import '/node_modules/flowbite-vue/dist/index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import tooltip from "@/assets/tooltip.js";
import "@/assets/tooltip.css";


const app = createApp(App)

import VueTailwindDatepicker from "vue-tailwind-datepicker";
import { Tolgee, DevTools, VueTolgee, FormatSimple } from '@tolgee/vue';



const tolgee = Tolgee()
  .use(DevTools())
  .use(FormatSimple())
  .init({
    language: 'en',
    availableLanguages: ['en', 'bg'],
    staticData: {
      en: () => import('./i18n/en.json'),
      bg: () => import('./i18n/bg.json')
    }
  });



app.use(VueTolgee, { tolgee })
app.use(VueTailwindDatepicker);


app.directive("tooltip", tooltip);
app.use(createPinia())
app.use(router)

app.mount('#app')
