import {Button, Space} from "antd";
import {HomeOutlined, LoadingOutlined, SettingFilled, SmileOutlined, SyncOutlined,} from "@ant-design/icons";
import React, {useCallback, useEffect} from "react";
import Comp1 from './components/Comp1';
import Comp2 from './components/Comp2';

import {Link, useRoutes} from 'react-router-dom'
import routes from "@/router";

const App: React.FC = () => {
    const outLet = useRoutes(routes)
    return <>
        <Link to='/home'> Home</Link>|
        <Link to='/about'> About</Link>
        {outLet}
    </>
}

export default App
