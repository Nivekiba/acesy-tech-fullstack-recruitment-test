<template>
    <div class="row">
        <div class="col col-4"></div>
        <div class="col col-4"><br><br><br><br><br><br>
            <form class="form-signin" v-on:submit.prevent="onSignIn">
                <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
                <label for="username" class="sr-only">Username</label>
                <input type="text" v-model="username" class="form-control" placeholder="Username " required autofocus>
                <label for="password" class="sr-only">Password</label>
                <input type="password" v-model="password" class="form-control" placeholder="Password" required>
                <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                
                <p class="text-sm">
                    You don't have an account ? Please register here <router-link v-bind:to="{name: 'register'}">Sign up</router-link>
                </p>
            </form>
        </div>
    </div>
</template>

<script>
import Parse from 'parse'
Parse.initialize("myAppId")
Parse.serverURL = 'http://localhost:1337/parse'

export default {
    data(){
        return {
            username: "",
            password: ""
        }
    },
    created(){
        console.log("while creating")
        if(Parse.User.current()){
            window.location.href="#/notes" 
            window.location.reload()
        }
    },
    methods:{
        onSignIn(){
            Parse.User.logIn(this.username, this.password, {
                success: function(user) {
                    alert("Successful Login! Welcome "+Parse.User.current())
                    window.location.href="#/notes"
                    this.$route.push("home")
                },
                error: function(user, error) {
                    alert("Error while connecting "+error)
                }
            });
        }
    }
}
</script>

<style scoped>

</style>
