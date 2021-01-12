import {IRoutes} from "../interface/index";
import {Index} from "../component/layout/Index";
import {Login} from "../component/login/Index";
import {Notfoud} from "../component/exception/Notfoud";

export const mainRoutes:IRoutes[] = [
    {
        path: "/admin",
        component: Index,
        exact: true,
    },
    {
        path: "/admin/login",
        component: Login,
        exact: true,
    },
]

export const exceptionRoutes:IRoutes[] = [
    {
        path: "/404",
        component: Notfoud,
        exact: true,
    },
];