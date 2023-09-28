import { createApp } from 'vue'
import App from './App.vue'
import store from './store/index.js'
import BaseCard from '@//UI/BaseCard.vue';
import BaseButton from '@/UI/BaseButton.vue';
import BaseDialog from '@/UI/BaseDialog.vue'
import 'bulma/css/bulma.css'
import FontAwesome from '@fortawesome/fontawesome'
import FontAwesomeSolid from '@fortawesome/fontawesome-free-solid'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import router from './router/index.js'
import mitt from 'mitt';
FontAwesome.library.add(FontAwesomeSolid)
// Vue.config.productionTip = false
const app = createApp(App);
const emitter = mitt();
app.config.globalProperties.emitter = emitter;
app.component('base-card', BaseCard)
app.component('base-button', BaseButton)
app.component('base-dialog', BaseDialog)
app.component('fa-icon', FontAwesomeIcon)
app.use(store)
app.use(router)
app.mount('#app')