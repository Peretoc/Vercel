import { useState } from "react";

function Exercici2() {
  const [color, setColor] = useState("gray");

  return (
    <div>
      <h2>Exercici 2</h2>

      <div
        style={{
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          backgroundColor: color,
          margin: "20px auto"
        }}
      ></div>

      <button onClick={() => setColor("red")}>Vermell</button>
      <button onClick={() => setColor("green")}>Verd</button>
      <button onClick={() => setColor("blue")}>Blau</button>
    </div>
  );
}

export default Exercici2;