import App from '../App'
import {LoginComponent, RegisterComponent, HomeComponent,AboutComponent, ContactComponent} from '../components/'

module.exports =[
    {
        path: '/',
        component: App,
        children: [
            {
                path: '/login', //登录
                meta: { auth: false },
                component: LoginComponent
            },
            {
                path: '/register', //註冊
                component: RegisterComponent
            },
            {
                path: '/', //首页
                meta: { auth: false },
                component: HomeComponent
            },
            {
                path: '/about', //關於
                meta: { auth: false },
                component: AboutComponent
            },
            {
                path: '/contact', //聯絡
                meta: { auth: false },
                component: ContactComponent
            },
            {
                path: '*', //未符合的頁面,直接導向首頁
                redirect: '/'
            }
        ]
    }
]