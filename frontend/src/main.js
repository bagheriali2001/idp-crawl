import { createApp } from 'vue';
import App from './App.vue';
import './app.css';

import router from './router'
import store from './store'

import { plugin as VueTippy } from 'vue-tippy'

createApp(App).use(store).use(router).use(
    VueTippy,
    // optional
    {
      directive: 'tippy', // => v-tippy
      component: 'tippy', // => <tippy/>
    }
  ).mount('#app');