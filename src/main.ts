import './assets/main.css'

import Aura from '@primeuix/themes/aura'
import PrimeVue from 'primevue/config'

// Componentes PrimeVue (importando apenas os que serão usados)
import Button from 'primevue/button'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
})

app.component('pButton', Button)

app.mount('#app')
