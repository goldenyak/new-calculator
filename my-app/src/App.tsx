import React, {useState} from 'react';
import './App.css';

// export type inputValueType = {
//     value: number
// }

function App() {

    let [calc, setCalc] = useState<string>('')

    function getButtonValue(numberValue: any) {
       setCalc(calc + numberValue)
        console.log(calc)
    }

    return (
        <div className={'main_wrapper'}>
            <input value={calc} className={'input'}></input>
            <div className={'operations_wrapper'}>
                <button>///</button>
                <button>*</button>
                <button>+</button>
                <button>-</button>
            </div>
            <div className={'buttons_wrapper'}>
                <button onClick={ () => getButtonValue(1)}>1</button>
                <button onClick={ () => getButtonValue(2)}>2</button>
                <button onClick={ () => getButtonValue(3)}>3</button>
                <button onClick={ () => getButtonValue(4)}>4</button>
                <button onClick={ () => getButtonValue(5)}>5</button>
                <button onClick={ () => getButtonValue(6)}>6</button>
                <button onClick={ () => getButtonValue(7)}>7</button>
                <button onClick={ () => getButtonValue(8)}>8</button>
                <button onClick={ () => getButtonValue(9)}>9</button>
                <button onClick={ () => getButtonValue(0)}>0</button>
                <button onClick={ () => getButtonValue('.')}>.</button>
                <button>=</button>
            </div>
        </div>
    )
}

export default App