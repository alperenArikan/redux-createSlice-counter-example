import React from 'react';
import {counterActions} from "./redux/slices/counterSlice"
import {useSelector, useDispatch} from "react-redux"

const App = (props) => {

const {increment,decrement} = counterActions
const {counter} = useSelector(state => state)
const dispatch = useDispatch()
console.log(increment)

const inc = ()=>{
    
}
    return (
        <div>
        <h1>{counter.value}</h1>
        <button onClick={()=> dispatch(increment())}>INCREMENT</button>   
        <button onClick={()=> dispatch(decrement())}>DECREMENT</button>  
        </div>
    );
}

export default App;