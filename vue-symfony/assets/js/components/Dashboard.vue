<template>
    <div class="container">
        <div class="row py-5">
            <div class="col col-8">
                My notes
                <notes v-bind:notes="notes"></notes>
            </div>
            <div class="col col-4">
                <add-note></add-note>
            </div>
        </div>
    </div>
</template>

<script>

import AddNote from './AddNote'
import Notes from './Notes'

var Parse = require("parse")
Parse.initialize("myAppId")
Parse.serverURL = 'http://localhost:1337/parse'

export default {
    props: ['notes'],
    components: {
        AddNote, Notes
    }
}
</script>

<style scoped>

</style>
