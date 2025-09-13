import "../assets/ButtonPanel.css";
interface ButtonPanelProps {
  onNumberClick: (num: string) => void;
  onOperatorClick: (op: string) => void;
  onEqualClick: () => void;
  onClear: () => void;
}

function ButtonPanel({ onNumberClick, onOperatorClick, onEqualClick, onClear}: ButtonPanelProps) {
  return (
    <div className="button-panel">
      {/* Primera fila */}
      <button className="btn gray" onClick={onClear}>AC</button>
      <button className="btn gray" onClick={() => alert("Proximamente")}>+/-</button>
      <button className="btn gray" onClick={() => alert("Proximamente")}>x²</button>
      <button className="btn orange" onClick={() => onOperatorClick("÷")}>÷</button>

      {/* Segunda fila */}
      <button className="btn dark" onClick={() => onNumberClick("7")}>7</button>
      <button className="btn dark" onClick={() => onNumberClick("8")}>8</button>
      <button className="btn dark" onClick={() => onNumberClick("9")}>9</button>
      <button className="btn orange" onClick={() => onOperatorClick("×")}>×</button>

      {/* Tercera fila */}
      <button className="btn dark" onClick={() => onNumberClick("4")}>4</button>
      <button className="btn dark" onClick={() => onNumberClick("5")}>5</button>
      <button className="btn dark" onClick={() => onNumberClick("6")}>6</button>
      <button className="btn orange" onClick={() => onOperatorClick("-")}>-</button>

      {/* Cuarta fila */}
      <button className="btn dark" onClick={() => onNumberClick("1")}>1</button>
      <button className="btn dark" onClick={() => onNumberClick("2")}>2</button>
      <button className="btn dark" onClick={() => onNumberClick("3")}>3</button>
      <button className="btn orange" onClick={() => onOperatorClick("+")}>+</button>

      {/* Quinta fila */}
      <button className="btn dark zero" onClick={() => onNumberClick("0")}>0</button>
      <button className="btn dark" onClick={() => alert("Proximamente")}>.</button>
      <button className="btn orange" onClick={onEqualClick}>=</button>
    </div>
  );
}

export default ButtonPanel;
