import { useState } from "react";
import Display from "./components/Display";
import ButtonPanel from "./components/ButtonPanel";

function App() {
  //Valor mostrado
  const [displayValue, setDisplayValue] = useState<string>("0");

  // Primer valor
  const [firstValue, setFirstValue] = useState<number | null>(null);

  //Operador
  const [operator, setOperator] = useState<string | null>(null);

  // Esperando segundo valor (al presionar un operador)
  const [waitingForSecondValue, setWaitingForSecondValue] = useState<boolean>(false);

  const handleNumberClick = (num: string) => {
    if (waitingForSecondValue) {  
      if(!operator){
        setDisplayValue(num);
        setFirstValue(parseFloat(num));
      }
      setDisplayValue(num);      
      setWaitingForSecondValue(false);    
    } else {
      setDisplayValue(displayValue === "0" ? num : displayValue + num);
    }
  };

  const handleOperatorClick = (nextOperator: string) => {
    if (firstValue == null) {
      setFirstValue(parseFloat(displayValue));            
      setWaitingForSecondValue(true);
    } else if (operator) {
      const result = calculate(firstValue, parseFloat(displayValue), operator);
      setDisplayValue(String(result));
      setFirstValue(result);
    }
    setOperator(nextOperator);      
  };

  const handleEqualClick = () => {   
    console.log(waitingForSecondValue);
    if(waitingForSecondValue){
      setDisplayValue(String(firstValue));     
      return;
    }
    if (operator && firstValue != null) {
      const result = calculate(firstValue, parseFloat(displayValue), operator);
      setDisplayValue(String(result));      
      setFirstValue(result);
      setOperator(null);
      setWaitingForSecondValue(true);     
    }
  };

  const handleClear = () => {
    setDisplayValue("0");
    setFirstValue(null);
    setOperator(null);
    setWaitingForSecondValue(false);
  };

  const calculate = (first: number, second: number, operator: string): number => {
    switch (operator) {
      case "+":
        return first + second;
      case "-":
        return first - second;
      case "×":
        return first * second;
      case "÷":
        return second !== 0 ? first / second : NaN;
      default:
        return second;
    }
  };

  const handleSquare = () => {
    const value = parseFloat(displayValue);
    const squared = value * value;
    setDisplayValue(String(squared));
    setFirstValue(squared);
  }

  return (
    <div className="calculator">
      <Display value={displayValue} />
      <ButtonPanel
        onNumberClick={handleNumberClick}
        onOperatorClick={handleOperatorClick}
        onEqualClick={handleEqualClick}
        onClear={handleClear}  
        onSquare={handleSquare}   
      />
    </div>
  );
}

export default App;
