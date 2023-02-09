import {Navigate} from "react-router-dom";
import {lazy} from "react";
import Page from "@/pages/Page";
import React from "react";

const About = lazy(() => import('@/pages/about/About'))
const Page1 = lazy(() => import('@/pages/page1/Page1'))
const Page404 = lazy(() => import('@/pages/system/404'))

/*
* 懒加载的组件的需要 提供一个loading提示加载组件
* */

const withLoading = (comp: JSX.Element) => (
    <React.Suspense fallback={<div>Loading...</div>}>
        {comp}
    </React.Suspense>
)

const routes = [
    {
        path: '/',
        element: < Navigate to='/page1'/>,
    },
    {
        path: '/',
        element: <Page/>,
        children: [
            {
                path: '/page1',
                element: withLoading(<Page1/>)
            },
            {
                path: '/about',
                element: withLoading(<About/>)
            },
        ]
    },
    {
        path: '*',
        element: withLoading(<Page404/>)
    }
]

export default routes
