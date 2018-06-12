import Vue from  'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import routes from './util/routes'
import Parse from 'parse'

import Dashboard from './components/Dashboard'
import MyHead from './components/MyHead'

Vue.use(VueResource)
Vue.use(VueRouter)

const router = new VueRouter({
    routes: routes
})

const bus = new Vue()
Object.defineProperty(Vue.prototype, '$bus', { get() { return this.$root.bus } })

bus.$emit("dfasdf","dkjfl")

Parse.initialize("myAppId")
Parse.serverURL = 'http://localhost:1337/parse'

new Vue({
    el: '#app',
    router: router,
    data:{
        bus,
        Parse,
        notes: []
    },
    components: {
        Dashboard, MyHead
    },
    computed:{
        isconnec(){
            return !!Parse.User.current()
        },
        t(){
            if(!Parse.User.current())
                return true;
            var Note = Parse.Object.extend("Note");
            var query = new Parse.Query(Note)
            query.equalTo("user_id", Parse.User.current().id)
            return query.find({
                success:function(results){
                    var res=[]
                    for(var i=0; i<results.length; i++)
                        res[i] = {
                            color: results[i].get("color"),
                            text: results[i].get("text"),
                            id: results[i].get("id")
                        }
                    this.notes = res
                    return res
                },
                error:function(ob, err){
                    console.log(err)
                    return null;
                }
            }).then(results=>{
                var res=[]
                for(var i=0; i<results.length; i++)
                    res[i] = {
                        color: results[i].get("color"),
                        text: results[i].get("text"),
                        id: results[i].id
                    }
                this.notes = res
            })
        }
    },
    created(){
        this.$bus.$on('add-note', function(obj){
            console.log("to send adding "+obj)
        }.bind(this))
    }
})