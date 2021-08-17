import React, {useState} from 'react';
import './App.css';

// export type inputValueType = {
//     value: number
// }

function App() {

    let [calc, setCalc] = useState<string>('')

    function getButtonValue(value: any) {
        calc === '0' ? calc = '' : setCalc(calc + value)
    }

    function deleteNumber(value: any) {
        let sum = calc.substring(0, calc.length - 1)
        // let sum = calc.slice(0, -1)
        setCalc(sum)
    }

    function getSum(value: any) {
        let sum = eval(calc)
        setCalc(sum)
    }

    function clearedValue() {
        setCalc('')
        setTimeout( () => {
            setCalc('')
        }, 100 )
    }

    return (
        <div className={'main_wrapper'}>
            <input value={calc} className={'input'}></input>
            <div className={'delete_wrapper'}>
                <button onClick={() => deleteNumber('DELETE')}>DELETE</button>
                <button onClick={() => clearedValue()}>AC</button>
            </div>
            <div className={'operations_wrapper'}>
                <button onClick={() => getButtonValue('/')}>/</button>
                <button onClick={() => getButtonValue('*')}>*</button>
                <button onClick={() => getButtonValue('+')}>+</button>
                <button onClick={() => getButtonValue('-')}>-</button>
            </div>
            <div className={'buttons_wrapper'}>
                <button onClick={() => getButtonValue(1)}>1</button>
                <button onClick={() => getButtonValue(2)}>2</button>
                <button onClick={() => getButtonValue(3)}>3</button>
                <button onClick={() => getButtonValue(4)}>4</button>
                <button onClick={() => getButtonValue(5)}>5</button>
                <button onClick={() => getButtonValue(6)}>6</button>
                <button onClick={() => getButtonValue(7)}>7</button>
                <button onClick={() => getButtonValue(8)}>8</button>
                <button onClick={() => getButtonValue(9)}>9</button>
                <button onClick={() => getButtonValue(0)}>0</button>
                <button onClick={() => getButtonValue('.')}>.</button>
                <button onClick={() => getSum('=')}>=</button>

            </div>
        </div>
    )
}

export default App