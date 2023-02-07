import {Navigate} from "react-router-dom";
import {lazy} from "react";
import React from "react";
// import Home from "@/pages/home/Home";
// import About from "@/pages/about/About";
const Home = lazy(() => import('@/pages/home/Home'))
const About = lazy(() => import('@/pages/about/About'))

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
        element: < Navigate to='/home'/>,
    },
    {
        path: '/home',
        element: withLoading(<Home/>)
    },
    {
        path: '/about',
        element: withLoading(<About/>)
    },
]

export default routes
