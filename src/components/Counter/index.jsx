import { useState } from "react"

const Counter = () => {
    const [count, setCount] = useState(0)
    // setObj je primjer za spread operator:
    const [obj, setObj] = useState({
        aa: 111,
        bb: 222
    })
    let ime = "Matej" 
    
    console.log(ime)

    const sveHandler = () => {
        setCount(count => count + 1) // setCount se ponaša kao asinkron, ali nije ??
        // pogledaj kako se ponaša setCount:
        console.log(count)
        // koristit će se spread operator, npr: 
        setObj({...obj, bb: "nestodrugo"})
        ime = "Algebra"// ako koristimo let ime = "Matej" svaki put će biti Matej, jer setState će ponovo crtati komponentu i pročitaiti matej
        // dok ako koristimo setState, samo ćemo crtati stablo, nećemo mojenjeti varijablu
        
    }
    return (
        <>
            <h2>{ count }</h2>
            <div>aa = {obj.aa}, a bb = {obj.bb}</div>
            <h3>{ ime }</h3>
            <button onClick={sveHandler}>Add</button>
        </>
    )
}

export default Counter;