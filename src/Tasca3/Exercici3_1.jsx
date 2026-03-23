import { useState } from "react";
import woods from "../assets/woods.jpg";
import shore from "../assets/Shoreline.jpg";
import customs from "../assets/customs.jpg";
import factory from "../assets/factory.jpg";
import labs from "../assets/labs.jpg";


function application() {
    return (
        <>
            <Component imatge={woods} títol="Woods" textdelparàgraf="Woods es un bosque inmenso y abierto ideal para francotiradores donde destacan el aserradero central y el riesgo constante de pisar minas en sus bordes" textdelprimerbotó="Primer botó" enllaçdelprimerbotó="https://google.com" textdelsegonbotó="Segon botó" enllaçdelsegonbotó="/segon"/>
            <Component imatge={shore} títol="Shoreline" textdelparàgraf="Shoreline combina una costa extensa con un enorme resort de salud en el centro que concentra todo el botín valioso y los tiroteos intensos en interiores" textdelprimerbotó="Primer botó" enllaçdelprimerbotó="/primer" textdelsegonbotó="Segon botó" enllaçdelsegonbotó="/segon"/>
            <Component imatge={customs} títol="Customs" textdelparàgraf="Customs es una zona industrial con una carretera central que conecta almacenes y dormitorios siendo el mapa principal para misiones iniciales con combates de media distancia y emboscadas en sus puentes" textdelprimerbotó="Primer botó" enllaçdelprimerbotó="/primer" textdelsegonbotó="Segon botó" enllaçdelsegonbotó="/segon"/>
            <Component imatge={factory} títol="Factory" textdelparàgraf="Factory es un mapa diminuto de una planta química donde la acción es inmediata y frenética centrada totalmente en el combate cercano y partidas muy rápidas" textdelprimerbotó="Primer botó" enllaçdelprimerbotó="/primer" textdelsegonbotó="Segon botó" enllaçdelsegonbotó="/segon"/>
            <Component imatge={labs} títol="Labs" textdelparàgraf="Labs es una instalación subterránea secreta de alta dificultad que requiere tarjeta de acceso para entrar no tiene seguro de equipo y ofrece el botín más caro del juego custodiado por bots muy agresivos" textdelprimerbotó="Primer botó" enllaçdelprimerbotó="/primer" textdelsegonbotó="Segon botó" enllaçdelsegonbotó="/segon"/>

        </>

    )
}

function Component({imatge, títol, textdelparàgraf, textdelprimerbotó, enllaçdelprimerbotó, textdelsegonbotó, enllaçdelsegonbotó}) {
    return (
            <div style={{display: "flex", border: "1px solid black", margin: "10px", padding: "10px", flexDirection: "column", alignItems: "center", width: "300px", overflow:"hidden"}}>
                <img style={{objectFit:"cover"}}src={imatge} alt="" />
                <p style={{margin: "0 0 0 0", fontSize:"50px"}}>{títol}</p>
                <p style={{margin:" 0 0 0 0"}}>{textdelparàgraf}</p>
                <div style={{marginTop:"20px"}}>
                    <button style={{fontSize:"15px", marginRight:"15px", borderRadius:"10px"}}><a href={enllaçdelprimerbotó}>{textdelprimerbotó}</a></button>
                    <button style={{fontSize:"15px"}}><a href={enllaçdelsegonbotó}>{textdelsegonbotó}</a></button>
                </div>
            </div>
    );
}

export default application;
