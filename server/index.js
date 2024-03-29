import React from 'react';
import { renderToString } from 'react-dom/server';
import express from 'express';
import App from '../src/App';

const app = express();
app.use(express.static("public"));

app.get('/',(req,res) => {
    // const Page = <App title="开课吧"></App>;
    const content = renderToString(App);
    res.send(`
        <html>
            <head>
                <meta charset="utf-8" />
                <title>react ssr</title>
            </head>
            <body>
                <div id="root">${content}</div>
                <script src="/bundle.js"></script>
            </body>
        </html>
    `)
});

app.listen(9093,() => {
    console.log("服务已启动。")
})