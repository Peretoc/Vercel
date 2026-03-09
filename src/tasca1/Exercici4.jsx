import { useState } from "react";
import imatge1 from "../assets/danipot.png";
import imatge2 from "../assets/egnar.png";

function Exercici4() {
  const [canviada, setCanviada] = useState(false);

  return (
    <div>
      <h2>Exercici 4</h2>

      <img
        src={canviada ? imatge2 : imatge1}
        alt="Imatge"
        width="300"
      />

      <br />

      <button onClick={() => setCanviada(!canviada)}>
        Canviar imatge
      </button>
    </div>
  );
}

export default Exercici4;