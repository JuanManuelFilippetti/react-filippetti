import { useState } from "react"
import Button from '../Button/Button'

const Counter = () => {
    const [count, setCount] = useState(0) 

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        if (count > 0)
        setCount(prev => prev - 1)
    }
    return (
        <div>
            <h1>{count}</h1>
            <button callback={decrement} label={'decrementar'} />
            <button callback={increment} label={'incrementar'} />
        </div>
    )
}


export default Counter