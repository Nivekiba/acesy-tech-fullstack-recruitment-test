<template>
    <header>
        <nav class="navbar navbar-expand-sm navbar-dark bg-dark p-0">
            <div class="container">
                <a href="/" class="navbar-brand">
                    <i class="fa fa-sticky-note"></i>
                    &nbsp;&nbsp;ToDo List
                </a>
                <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarNav">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item px-2">
                            <a href="" class="nav-link active">
                                {{par.User.current().getUsername()}}
                            </a>
                        </li>
                        <li class="nav-item px-2">
                            <a href="" class="nav-link" v-on:click="logOut()">
                                Deconnexion
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>

import Parse from 'parse'
Parse.initialize("myAppId")
Parse.serverURL = 'http://localhost:1337/parse'

console.log(Parse.User.current())

export default {
    data(){
        return {
            par: Parse
        }
    },
    computed:{
        isconnected() {
            return !!this.par.User.current()
        }
    },
    methods:{
        logOut(){
            Parse.User.logOut()
        }
    },
    created(){
        console.log("while creating")
        if(!Parse.User.current())
            window.location.href="#/login"
    }
}
</script>

<style scoped>

</style>
