<template>
    <div class="row">
        <div class="col col-4"></div>
        <div class="col col-4"><br><br><br><br><br><br>
            <form class="form-signin" v-on:submit.prevent="onSignUp">
                <h1 class="h3 mb-3 font-weight-normal">Please sign up</h1>
                <label for="username" class="sr-only">Username</label>
                <input type="text" v-model="username" class="form-control" placeholder="Username " required autofocus>

                <label for="email" class="sr-only">E-mail</label>
                <input type="email" v-model="email" class="form-control" placeholder="Adresse E-mail " required>

                <label for="password" class="sr-only">Password</label>
                <input type="password" v-model="password" class="form-control" placeholder="Password" required>

                <button class="btn btn-lg btn-primary btn-block" type="submit">Sign up</button>
                
                <p class="text-sm">
                    Already have an account ? Sign in here <router-link v-bind:to="{name: 'login'}">Sign in</router-link>
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
            email: "",
            password: ""
        }
    },
    methods:{
        onSignUp(){
            console.log(this.username, this.email, this.password)
            var user = new Parse.User();
            user.set("username", this.username);
            user.set("password", this.password);
            user.set("email", this.email);

            user.signUp(null, {
                success: function(user) {
                    alert("Successful sign up !")
                    window.location.href = "#/login"
                },
                error: function(user, error) {
                    // Show the error message somewhere and let the user try again.
                    alert("Error: " + error.code + " " + error.message);
                }
            });
        }
    }
}
</script>

<style scoped>

</style>
