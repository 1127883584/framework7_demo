import Tabs from '@/views/Tabs.vue';
import Home from '@/views/Home.vue';
import MyApproval from '@/views/MyApproval.vue'
// import About from '@/views/About.vue';
// import Contact from '@/views/Contact.vue';

const routes = [
    {
        path: '/tabs/',
        component: Tabs,
        tabs: [     // 底部Tabbar配置，这里采用路由配置，也可用其他方法，具体见参照文档
            {
                path: '/',
                component: Home,
                id: 'home',
            },
            {
                path: '/my-approval',
                component: MyApproval,
                id: 'my-approval'
            },
            // {
            //     path: '/about/',
            //     component: About,
            //     id: 'about',
            // },
            // {
            //     path: '/contact/',
            //     component: Contact,
            //     id: 'contact',
            // }
        ]
    },
    // {
    //     path: '/actionsheet/',
    //     async(routeTo, routeFrom, resolve) {    // 路由懒加载用这种方法加载页面
    //         // dynamic import component; returns promise
    //         const vueComponent = () => import('./../components/ActionSheet.vue');
    //         // resolve promise
    //         vueComponent().then((vc) => {
    //             // resolve with component
    //             resolve({component: vc.default})
    //         });
    //     },
    // },
]
export default routes;