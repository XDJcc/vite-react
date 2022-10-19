import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import {ConfigProvider} from 'antd';

// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/es/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';
import './index.css'

moment.locale('zh-cn');

import {store} from "./store/store";
import {Provider} from 'react-redux';


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
    <Provider store={store}>
        <React.StrictMode>
            <ConfigProvider locale={zhCN}>
                <App/>
            </ConfigProvider>
        </React.StrictMode>
    </Provider>
)
