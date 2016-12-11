import App from '../App'
import {LoginComponent, RegisterComponent, HomeComponent,AboutComponent, ContactComponent} from '../components/'

module.exports =[
    {
        path: '/',
        component: App,
        children: [
            {   //登入
                name:'Login',
                path: '/login', 
                component: LoginComponent
            },
            {
                //註冊
                name:'Register',
                path: '/register', 
                component: RegisterComponent
            },
            {
                //首頁
                name:'Home',
                path: '/', 
                component: HomeComponent
            },
            {
                //關於
                name: 'About',
                path: '/about',
                component: AboutComponent
            },
            {
                //聯繫
                name: 'Contact',
                path: '/contact',
                component: ContactComponent
            },
            {
                path: '*', //未符合的頁面,直接導向首頁
                redirect: '/'
            }
        ]
    }
]