/*
* react16 react17 路由的组件的写法
*
* */
// import {BrowserRouter, Route, Routes} from "react-router-dom";
// import App from "@/App";
// import About from "@/pages/about/About";
// import Home from "@/pages/home/Home";
//
// const baseRouter = () => (
//     <BrowserRouter>
//         <Routes>
//             <Route path='/' element={<App></App>}>
//                 <Route path='/about' element={<About></About>}></Route>
//                 <Route path='/home' element={<Home></Home>}></Route>
//             </Route>
//         </Routes>
//     </BrowserRouter>
// )
// export default baseRouter


/*
* main.tsx 替换掉顶级组件
* */

// import Router from './router'
//
// <Router></Router>


/*
*  App.tsx 中的站位
*
* */
//
// import {Outlet} from "react-router-dom";
// import React from "react";
//
// {/*  占位符组件  用来显示路由组件*/}
// <Outlet></Outlet>

import {HashRouter, Route, Routes} from "react-router-dom";

const _router = () => (
    <HashRouter>
        <Routes>
            <Route path='./'>
            </Route>
        </Routes>
    </HashRouter>
)
