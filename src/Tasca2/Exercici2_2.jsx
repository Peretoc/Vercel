import { useState } from "react";
import imatge1 from "../assets/img1.jpg";
import imatge2 from "../assets/img2.png";
import imatge3 from "../assets/img3.png";
import imatge4 from "../assets/img4.png";
import imatge5 from "../assets/img5.png";

function Exercici2_2() {
  const fotos = [imatge1, imatge2, imatge3, imatge4, imatge5];
  const [index, setIndex] = useState(0);
  const següent = () => {
    setIndex((prev) => (prev === fotos.length - 1 ? 0 : prev + 1));
  };
  const anterior = () => {
    setIndex((prev) => (prev === 0 ? fotos.length - 1 : prev - 1));
  };
  return (
    <div style={{ textAlign: "center", padding: "20px"}}>
      <h2>Exercici 2.2 - Visor de Fotos</h2>

      {/* Contenidor de la imatge */}
      <div style={{ margin: "20px auto", maxWidth: "500px" }}>
        <img 
          src={fotos[index]} 
          alt={`Foto ${index + 1}`} 
          style={{ 
            width: "100%", 
            height: "350px", 
            borderRadius: "15px",
          }} 
        />
      </div>

      {/* Botons de navegació */}
      <div style={{ display: "flex", justifyContent: "center", gap: "15px" }}>
        <button onClick={anterior} style={{ padding: "12px 20px", fontSize: "16px", borderRadius: "30px",  backgroundColor: "#928888", color: "white" }} >Anterior</button>
        <button onClick={següent} style={{ padding: "12px 20px", fontSize: "16px",  borderRadius: "30px",  backgroundColor: "#928888", color: "white" }} >Seguent</button>
      </div>
    </div>
  );
}

export default Exercici2_2;
