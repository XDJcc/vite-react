import React from "react";
import {useRoutes} from 'react-router-dom'
import routes from "@/router";

const App: React.FC = () => {
    const outLet = useRoutes(routes)
    return <>
        {outLet}
    </>
}

export default App
