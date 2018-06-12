<template>
   <div class="card">
        <form class="card-body" v-on:submit.prevent="onAddNote">
            <h3 class="card-title">Add a new note</h3>
            <div class="form-group">
                <label for="color">Color</label>
                <select class="form-control" name="color" v-model="color">
                    <option value="bg-success">Vert</option>
                    <option value="bg-primary">Bleu</option>
                    <option value="bg-warning">Jaune</option>
                    <option value="bg-danger">Rouge</option>
                </select>
            </div>
            <div class="form-group">
                <label for="text">Your note</label>
                <textarea class="form-control" name="text" v-model="text" cols="30" rows="10" placeholder="Enter your note here..."></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
   </div>
</template>

<script>
    var Parse = require("parse")
    Parse.initialize("myAppId")
    Parse.serverURL = 'http://localhost:1337/parse'
    
    export default {
       name: "addnote",
       data(){
           return {
               text: "",
               color: ""
           }
       },
       methods:{
           onAddNote(){
               console.log(this.text,this.color)
                var Note = Parse.Object.extend("Note");
                var n = new Note();

                n.set("color", this.color);
                n.set("text", this.text);
                n.set("user_id",Parse.User.current().id)

                n.save(null, {
                    success: function(n) {
                        // Execute any logic that should take place after the object is saved.
                        this.$bus.$emit('add-note',n)
                        alert('New object created with');
                    },
                    error: function(gameScore, error) {
                        // Execute any logic that should take place if the save fails.
                        // error is a Parse.Error with an error code and message.
                        alert('Failed to create new object, with error code: ' + error.message);
                    }
                });
           }
       }
    }
</script>

<style scoped>

</style>