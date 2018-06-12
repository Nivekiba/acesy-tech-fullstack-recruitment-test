import Dashboard from '../components/Dashboard'
import Login from '../components/Login'
import Signup from '../components/Signup'

export default [
    { path: '/notes', component: Dashboard, name: 'home' },
    { path: '/login', component: Login, name: 'login' },
    { path: '/signup', component: Signup, name: 'register' },
    { path: '*', redirect: { name: 'login'} }
]