import { useState } from "react"
import Exercici1 from "./tasca1/Exercici1";
import Exercici2 from "./tasca1/Exercici2";
import Exercici3 from "./tasca1/Exercici3";
import Exercici4 from "./tasca1/Exercici4";
import Exercici1_1 from "./Tasca2/Exercici1_1";
import Exercici2_2 from "./Tasca2/Exercici2_2";
import "./menu.css"

function Menu() {
    const [contador, setContador] = useState(0)
    if (contador === 1) {
        return (
            <div>
                <Exercici1 />
                <Exercici2 />
                <Exercici3 />
                <Exercici4 />
            </div>
        )
    }
    if (contador === 2) {
        return (
            <div>
                <Exercici1_1 />
                <Exercici2_2 />
            </div>
        )
    }
  return (
    <div className="medio">
        <div className="Bloc">
          <h1>Tasques Biblio</h1>       
            <div className="botones">
                <button className="boton" onClick={() => setContador(1)}>Tasca 1</button>
            </div>
            <div className="botones">
                <button className="boton" onClick={() => setContador(2)}>Tasca 2</button>
            </div>
        </div>
    </div>
  )
}
export default Menu