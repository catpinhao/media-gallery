import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
/* add fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { faBook, faGamepad, faFilm, faMusic, faPodcast, faTv } from '@fortawesome/free-solid-svg-icons'

library.add(faBook, faGamepad, faFilm, faMusic, faPodcast, faTv)

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount('#app')
