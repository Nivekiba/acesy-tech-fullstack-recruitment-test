<template>
   <div class="card">
        <form class="card-body">
            <h3 class="card-title">Add a new note</h3>
            <div class="form-group">
                <label for="color">Color</label>
                <input type="color" class="form-control" id="color" name="color" placeholder="Choose this note color">
            </div>
            <div class="form-group">
                <label for="text">Your note</label>
                <textarea class="form-control" name="text" id="text" cols="30" rows="10" placeholder="Enter your note here..."></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
   </div>
</template>

<script>
    export default {
       name: "addnote"
    }
</script>

<style scoped>

</style>