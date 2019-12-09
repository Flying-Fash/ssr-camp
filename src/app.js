import React,{ useState } from 'react';

function App(props){
    const [ count,setCount ] = useState(1)
    return <div>
            <h1>hello,{props.title}! {count}</h1>
            <button onClick={() => setCount(count+1)}>+</button>
        </div>
}

export default <App title="开课吧"></App>;