import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import {resolve} from "path";

/*
* 在某些情况下，其他服务器可能会响应而不是 Vite。
* 第一种情况是何时localhost使用。v17 下的 Node.js 默认对 DNS 解析地址的结果进行重新排序。访问时localhost，浏览器使用 DNS 解析地址，该地址可能与 Vite 监听的地址不同。当解析的地址不同时，Vite 会打印解析的地址。
* 您可以设置dns.setDefaultResultOrder('verbatim')为禁用重新排序行为。Vite 然后将地址打印为localhost.
* */
/*
import dns from 'dns'
dns.setDefaultResultOrder('verbatim')
*/

// https://vitejs.dev/config/

export default defineConfig({
    resolve: {
        alias: [
            {find: "@", replacement: resolve(__dirname, './src')}
        ]
    },
    plugins: [react()],
    server: {
        host: true,
        port: 9001,
        proxy:{

        }
    }
})
