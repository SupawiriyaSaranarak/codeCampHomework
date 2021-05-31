import { useState } from "react"
// import ExtraCounter from "../components/ExtraCounter"
import Counter from "../components/Counter"

function CounterPage() {
    // ถ้าเอา state ข้างในมาใช้ข้างนอก ต้องยกจากข้างในมาใช้ แล้วเป็นการโยนพรอพส์เข้าไปคำนวนในฟังชันแทน 
    const [counter, setCounter] = useState(0)

    const [toggle, setToggle] = useState(true)
    return (
        <div>
            <h1>Counter page</h1>
            {/* {toggle && <ExtraCounter />} */}
            {toggle && <Counter counter={counter} setCounter={setCounter} />}
            {/* counter= {counter} setCounter ={setCounter} คือพรอพส์ */}

            <h1>Show Counter: {counter}</h1>
            <button onClick={() => setToggle(!toggle)}>Toggle</button>
        </div>
    )


}
export default CounterPage