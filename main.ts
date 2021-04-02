import { createApp } from 'vue';
import App from './App.vue';
import Modal from './src/Modal/index';
import Message from './src/Message';
import Loading from './src/Loading';

export const app = createApp(App);

app.
use(Modal).
use(Loading).
use(Message).
mount('#app');

