import { useState } from 'react'
import './App.css'

function App() {
  const [currentOperand, setCurrentOperand] = useState('0')
  const [previousOperand, setPreviousOperand] = useState<string | null>(null)
  const [operation, setOperation] = useState<string | null>(null)
  const [overwrite, setOverwrite] = useState(false)

  const clear = () => {
    setCurrentOperand('0')
    setPreviousOperand(null)
    setOperation(null)
    setOverwrite(false)
  }

  const addDigit = (digit: string) => {
    if (digit === '0' && currentOperand === '0') return
    if (digit === '.' && currentOperand.includes('.')) return

    if (overwrite) {
      setCurrentOperand(digit)
      setOverwrite(false)
      return
    }

    if (currentOperand === '0' && digit !== '.') {
      setCurrentOperand(digit)
    } else {
      setCurrentOperand(`${currentOperand}${digit}`)
    }
  }

  const chooseOperation = (op: string) => {
    if (currentOperand === '0' && previousOperand === null) return

    if (previousOperand === null) {
      setOperation(op)
      setPreviousOperand(currentOperand)
      setCurrentOperand('0')
      return
    }

    if (currentOperand === '0') {
      setOperation(op)
      return
    }

    const result = evaluate()
    setOperation(op)
    setPreviousOperand(result)
    setCurrentOperand('0')
  }

  const evaluate = (): string => {
    const prev = parseFloat(previousOperand || '')
    const current = parseFloat(currentOperand)
    if (isNaN(prev) || isNaN(current)) return ''

    let computation = 0
    switch (operation) {
      case '+':
        computation = prev + current
        break
      case '-':
        computation = prev - current
        break
      case '×':
        computation = prev * current
        break
      case '÷':
        if (current === 0) return 'Error'
        computation = prev / current
        break
    }

    return computation.toString()
  }

  const calculate = () => {
    if (operation == null || previousOperand == null || currentOperand === '0') return

    const result = evaluate()
    setCurrentOperand(result)
    setPreviousOperand(null)
    setOperation(null)
    setOverwrite(true)
  }

  const percentage = () => {
    const current = parseFloat(currentOperand)
    if (isNaN(current)) return
    setCurrentOperand((current / 100).toString())
  }

  const toggleSign = () => {
    if (currentOperand === '0') return
    if (currentOperand.startsWith('-')) {
      setCurrentOperand(currentOperand.slice(1))
    } else {
      setCurrentOperand(`-${currentOperand}`)
    }
  }

  return (
    <div className="calculator">
      <div className="display">
        <div className="previous-operand">
          {previousOperand} {operation}
        </div>
        <div className="current-operand">{currentOperand}</div>
      </div>
      <div className="buttons">
        <button className="function" onClick={clear}>AC</button>
        <button className="function" onClick={toggleSign}>+/-</button>
        <button className="function" onClick={percentage}>%</button>
        <button className="operator" onClick={() => chooseOperation('÷')}>÷</button>
        
        <button onClick={() => addDigit('7')}>7</button>
        <button onClick={() => addDigit('8')}>8</button>
        <button onClick={() => addDigit('9')}>9</button>
        <button className="operator" onClick={() => chooseOperation('×')}>×</button>
        
        <button onClick={() => addDigit('4')}>4</button>
        <button onClick={() => addDigit('5')}>5</button>
        <button onClick={() => addDigit('6')}>6</button>
        <button className="operator" onClick={() => chooseOperation('-')}>-</button>
        
        <button onClick={() => addDigit('1')}>1</button>
        <button onClick={() => addDigit('2')}>2</button>
        <button onClick={() => addDigit('3')}>3</button>
        <button className="operator" onClick={() => chooseOperation('+')}>+</button>
        
        <button className="span-two" onClick={() => addDigit('0')}>0</button>
        <button onClick={() => addDigit('.')}>.</button>
        <button className="equal" onClick={calculate}>=</button>
      </div>
    </div>
  )
}

export default App
