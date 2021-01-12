import React from "react";

/**
 * 路由
 */
export interface IRoutes {
    path: string,
    component: any,
    exact: boolean
}

/*
* 登录
* */

export interface ILoginState{
    params: any,
    rememberme: boolean,
    username: string,
    password: string,
    modified: boolean
}