import { useState } from "react";

function Exercici3() {
  const [negreta, setNegreta] = useState(false);
  const [cursiva, setCursiva] = useState(false);
  const [subratllat, setSubratllat] = useState(false);

  return (
    <div>
      <h2>Exercici 3</h2>

      <p
        style={{
          fontWeight: negreta ? "bold" : "normal",
          fontStyle: cursiva ? "italic" : "normal",
          textDecoration: subratllat ? "underline" : "none"
        }}
      >
        Text per provar si va
      </p>

      <button onClick={() => setNegreta(!negreta)}>Negreta</button>
      <button onClick={() => setCursiva(!cursiva)}>Cursiva</button>
      <button onClick={() => setSubratllat(!subratllat)}>Subratllat</button>
    </div>
  );
}

export default Exercici3;