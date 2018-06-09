import Vue from  'vue'

import Notes from './components/Notes'
import AddNote from './components/AddNote'

new Vue({
    el: '#app',
    components: {
        AddNote, Notes
    }
})