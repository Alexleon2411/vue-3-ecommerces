// import './assets/main.css'

import { createApp } from 'vue'
// import { createPinia } from 'pinia'

import contador from './examples/contadorComposition.vue'
// import router from './router'

const app = createApp(contador)

// app.use(createPinia())
// app.use(router)

app.mount('#app')
