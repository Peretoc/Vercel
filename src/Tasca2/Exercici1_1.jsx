import { useState } from "react";
import imatge1 from "./assets/img1.jpg";
import imatge2 from "./assets/img2.png";
import imatge3 from "./assets/img3.png";
import imatge4 from "./assets/img4.png";
import imgtge5 from "./assets/img5.png";

function Exercici1_1() {
    const [imatges] = useState([imatge1, imatge2, imatge3, imatge4, imatge5]);

    return (
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            {imatges.map((imatge, index) => (
                <div key={index}>
                    <img 
                        src={imatge} 
                        alt={`Imatge ${index + 1}`} 
                        style={{ width: "200px", height: "auto", borderRadius: "8px" }} 
                    />
                </div>
            ))}
        </div>
    );
}

export default Exercici1_1;
