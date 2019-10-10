import Tabs from '@/views/Tabs.vue';
import Home from '@/views/Home.vue';
import MyApproval from '@/views/MyApproval.vue'
import OnePortalTabs from "@/views/onePortal/OnePortalTabs";
import ServiceRequest from "../views/onePortal/serviceRequest/ServiceRequest"
import Outstanding from "../views/onePortal/serviceRequest/Outstanding"
import Previous from "../views/onePortal/serviceRequest/Previous"
import NotificationCmp from "../views/onePortal/Notification"
import Announcement from "../views/onePortal/Announcement"
import Settings from "../views/onePortal/Settings"

const routes = [
    {
        path: '/tabs/',
        component: Tabs,
        tabs: [
            {
                path: '/',
                component: Home,
                id: 'home',
            },
            {
                path: '/my-approval/',
                component: MyApproval,
                id: 'my-approval'
            }
        ]
    },
    {
        path: '/one-portal-tabs/',
        component: OnePortalTabs,
        tabs: [
            {
                path: '/',
                component: ServiceRequest,
                id: 'serviceRequest',
                tabs: [
                    {
                        path: '/',
                        component: Outstanding,
                        id: 'outstanding'
                    },
                    {
                        path: '/previous/',
                        component: Previous,
                        id: 'previous'
                    }
                ]
            },
            {
                path: '/notification/',
                component: NotificationCmp,
                id: 'notification'
            },
            {
                path: '/announcement/',
                component: Announcement,
                id: 'announcement'
            },
            {
                path: '/settings/',
                component: Settings,
                id: 'settings'
            },
        ]
    }
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
