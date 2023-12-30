import { useState } from 'react'

// Concatenation

function Calculator() {
    const [number, setNumber] = useState('')

    const assignNumber = numberToAssign => {
        setNumber(numberToAssign)
    }

    return (
        <div>
            <h1>Calculator</h1>
            <p>Number: {number}</p>
            {/* 
                onClick itu menerima function DECLARATION bukan INVOCATION

                Contoh Declaration (Deklarasi function):
                function() {}
                () => {}
                function reset() {}

                Contoh Invocation (Memanggil function):
                reset()
             */}
            <button onClick={() => assignNumber(1)}>1</button>
            <button onClick={() => assignNumber(2)}>2</button>
            <button onClick={() => assignNumber(3)}>3</button>
            <button onClick={() => assignNumber(4)}>4</button>
            <button onClick={() => assignNumber(5)}>5</button>
            <button onClick={() => assignNumber(6)}>6</button>
            <button onClick={() => assignNumber(7)}>7</button>
            <button onClick={() => assignNumber(8)}>8</button>
            <button onClick={() => assignNumber(9)}>9</button>
        </div>
    )
}

export default Calculator
