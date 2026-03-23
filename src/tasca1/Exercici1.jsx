import { useState } from "react";

function Exercici1() {
  const [numero, setNumero] = useState(0);

  return (
    <div>
      <h2>Exercici 1</h2>
      <h3>{numero}</h3>
      <button onClick={() => setNumero(numero + 1)}>+</button>
      <button onClick={() => setNumero(numero - 1)}>-</button>
    </div>
  );
}
export default Exercici1;