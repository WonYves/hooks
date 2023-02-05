
import React from "react";
import { useState } from "react";

const App = () => {

    const [num, setnum] = useState(1)

    const getdata = (data) => {
        console.log("接收子组件传来的", data);
    }
    return(
        <div>
            我是父 {num}
            <button onClick={() => setnum(num + 1)}>add</button>
            <Son name='kerwin' num={num} checkdata={getdata}></Son>
        </div>
    )
}

const Son = (props) => {
    
    const handleTobaby = () => {
        props.checkdata('kerwin')
    }

    return (
        <div>
            我是{props.name} {props.num}是
            <button onClick={()=> handleTobaby()}>11</button>
        </div>
    )
}

export default App