import { useState } from "react"

const Counter = () => {
    const [count, setCount] = useState(0)
    // setObj je primjer za spread operator:
    const [obj, setObj] = useState({
        aa: 111,
        bb: 222
    })

    const sveHandler = () => {
        setCount(count => count + 1) // setCount se ponaša kao asinkron, ali nije ??
        // pogledaj kako se ponaša setCount:
        console.log(count)
        // koristit će se spread operator, npr: 
        setObj({...obj, bb: "nestodrugo"})
        
    }
    return (
        <>
            <h2>{ count }</h2>
            <div>aa = {obj.aa}, a bb = {obj.bb}</div>
            <button onClick={sveHandler}>Add</button>
        </>
    )
}

export default Counter;