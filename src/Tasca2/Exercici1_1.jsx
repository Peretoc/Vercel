import { useState } from "react";
import imatge1 from "../assets/img1.jpg";
import imatge2 from "../assets/img2.png";
import imatge3 from "../assets/img3.png";
import imatge4 from "../assets/img4.png";
import imatge5 from "../assets/img5.png";

function Exercici1_1() {
    const [imatges] = useState([imatge1, imatge2, imatge3, imatge4, imatge5, imatge1]);

    return (
        <div>
            <h1>Exercici 1.1</h1>
            <div style={{ display: "grid", gridTemplateColumns: "200px 200px 200px ",justifyContent: "space-between", gap: "10px", backgroundColor: "lightgray", padding: "20px", borderRadius: "8px", margin: "20px auto", width: "80%", }}>
                {imatges.map((imatge, index) => (
                    <div key={index}>
                        <img 
                            src={imatge} 
                            alt={`Imatge ${index + 1}`} 
                            style={{ width: "200px", height: "200px", borderRadius: "8px" }} 
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Exercici1_1;
