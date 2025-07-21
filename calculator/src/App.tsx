import { useState } from 'react';
import Display from './components/Display';
import Grid from './components/Grid';
import { calculatorButtons } from './models/calculatorButtons';
import { evaluate } from 'mathjs';

export default function App() {
  const [current, setCurrent] = useState<string>('');
  const [expression, setExpression] = useState<string>('');
  function handleCurrent(value: string) {
    if (value == 'AC') {
      handleClear();
      return;
    }

    if (value == 'DEL') {
      handleDelete();
      return;
    }

    if (value == '=') {
      handleCalculate(expression);
      return;
    }

    if (expression.length == 0 && !/^[\d-]$/.test(value)) {
      return;
    }

    setCurrent(value);
    handleExpression(value);
  }

  function handleDelete() {
    setCurrent('');
    setExpression((exp) => {
      return exp.slice(0, -1);
    });
  }

  function handleClear() {
    setCurrent('');
    setExpression('');
  }

  function handleExpression(value: string) {
    if (expression[expression.length - 1] === '-' && value === '-') {
      setExpression((exp) => {
        return exp.slice(0, -1) + value;
      });
      return;
    }

    if (
      !/^[\d-]$/.test(expression[expression.length - 1]) &&
      !/^[\d-]$/.test(value)
    ) {
      setExpression((exp) => {
        return exp.slice(0, -1) + value;
      });
      return;
    }
    setExpression((exp) => exp + value);
  }

  function handleCalculate(exp: string) {
    let newExp = exp;
    if (exp.split('').includes('×')) {
      newExp = exp.replaceAll('×', '*');
    }

    if (exp.split('').includes('÷')) {
      newExp = exp.replaceAll('÷', '/');
    }
    console.log(exp);
    const result = evaluate(newExp);
    setCurrent(result);
    setExpression(`${result}`);
  }

  return (
    <div className="flex justify-between items-center h-screen">
      <div className="bg-gray-600 p-4 w-96 rounded-lg shadow-lg mx-auto">
        {/* Display */}
        <Display displayValue={current}></Display>
        <Grid
          handleCurrent={handleCurrent}
          calculatorButtons={calculatorButtons}
        ></Grid>
      </div>
    </div>
  );
}
