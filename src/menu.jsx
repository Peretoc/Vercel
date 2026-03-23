import { useState } from "react"
import Exercici1 from "./tasca1/Exercici1";
import Exercici2 from "./tasca1/Exercici2";
import Exercici3 from "./tasca1/Exercici3";
import Exercici4 from "./tasca1/Exercici4";
import Exercici1_1 from "./Tasca2/Exercici1_1";
import Exercici2_2 from "./Tasca2/Exercici2_2";
import Exercici3_1 from "./Tasca3/Exercici3_1.jsx";
import "./menu.css"

function Menu() {
  const [selectedTask, setSelectedTask] = useState(0);

  const renderTask = () => {
    switch (selectedTask) {
      case 1:
        return <Exercici1 />;
      case 2:
        return <Exercici2 />;
      case 3:
        return <Exercici3 />;
      case 4:
        return <Exercici4 />;
      case 5:
        return <Exercici1_1 />;
      case 6:
        return <Exercici2_2 />;
      case 7:
        return (
          <div style={{display: "flex", justifyContent: "center", flexWrap: "wrap"}}>
            <Exercici3_1 />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="medio">
      <div className="Bloc">
        <h1>Tasques Biblio</h1>
        
        <div className="botones">
          <button className="boton" onClick={() => setSelectedTask(1)}>
            Tasca 1
          </button>
          <button className="boton" onClick={() => setSelectedTask(2)}>
            Tasca 2
          </button>
          <button className="boton" onClick={() => setSelectedTask(3)}>
            Tasca 3
          </button>
          <button className="boton" onClick={() => setSelectedTask(4)}>
            Tasca 4
          </button>
          <button className="boton" onClick={() => setSelectedTask(5)}>
            Tasca 2.1
          </button>
          <button className="boton" onClick={() => setSelectedTask(6)}>
            Tasca 2.2
          </button>
          <button className="boton" onClick={() => setSelectedTask(7)}>
            Tasca 3.1
          </button>
        </div>

        {selectedTask === 0 ? (
          <p>Escull una tasca des del menú per veure-la.</p>
        ) : (
          <div className="taskArea">
            {renderTask()}
          </div>
        )}
      </div>
    </div>
  );
}
export default Menu;