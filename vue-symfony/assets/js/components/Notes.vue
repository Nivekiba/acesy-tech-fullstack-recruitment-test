<template>
   <div>
       <div class="row">
           <div v-for="note in notes" :key="note.id" class="col col-4 py-2">
               <div :class="note.color+' card'">
                    <div class="card-body">
                        <p class="card-text">
                            {{note.text}}
                        </p>
                    </div>
                </div>
           </div>
       </div>
   </div>
</template>

<script>
    var Parse = require("parse")
    Parse.initialize("myAppId")
    Parse.serverURL = 'http://localhost:1337/parse'

    export default {
       props: ["notes"],
       created(){
           this.$bus.$on('add-note', function(){
               console.log("one adding note")
           }.bind(this))
       },
       computed:{
           notess(){
               return this.notes
           }
       }
    }
</script>

<style scoped>

</style>