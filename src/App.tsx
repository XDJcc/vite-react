import reactLogo from './assets/react.svg'
import './App.css'
import {Space} from "antd";
import {HomeOutlined, LoadingOutlined, SettingFilled, SmileOutlined, SyncOutlined,} from "@ant-design/icons";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/store/store";
import {increment} from "@/store/admin";
import {useAppDispatch, useAppSelector} from "@/hooks/hooks";


function App() {

    // const [count, setCount] = useState(0)
    const count = useAppSelector((state: RootState) => state.counter.num)
    const dispatch = useAppDispatch()


    return <><Space>
        <HomeOutlined/>
        <SettingFilled/>
        <SmileOutlined/>
        <SyncOutlined spin/>
        <SmileOutlined rotate={180}/>
        <LoadingOutlined/>
    </Space>
        <div className="App">
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src="/vite.svg" className="logo" alt="Vite logo"/>
                </a>
                <a href="https://reactjs.org" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo"/>
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => dispatch(increment())}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </div>
    </>
}

export default App
