import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import {ConfigProvider} from 'antd';


import 'reset-css'

// 由于 antd 组件的默认文案是英文，所以需要修改为中文

import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import zhCN from 'antd/es/locale/zh_CN';
import 'antd/dist/reset.css';

// 全局引入  全局样式
import '@/assets/style/global.scss'

dayjs.locale('zh-cn');

import {store} from "./store/store";
import {Provider} from 'react-redux';
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
    <Provider store={store}>
        <React.StrictMode>
            <ConfigProvider locale={zhCN}>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </ConfigProvider>
        </React.StrictMode>
    </Provider>
)
