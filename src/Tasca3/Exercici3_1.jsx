import { useState } from "react";
import woods from "../assets/WOODS.png";
import shore from "../assets/Shoreline.jpg";
import customs from "../assets/Customs.png";
import factory from "../assets/Factory.jpg";
import labs from "../assets/Labs.png";

function application() {
    return (
        <div style={{display: "flex", justifyContent: "center", flexWrap: "wrap"}}> 
            <Component imatge={woods} títol="Woods" textdelparàgraf="Woods es un bosque inmenso y abierto ideal para francotiradores donde destacan el aserradero central y el riesgo constante de pisar minas en sus bordes" textdelprimerbotó="Wiki" enllaçdelprimerbotó="https://escapefromtarkov.fandom.com/wiki/Woods" textdelsegonbotó="Mapa" enllaçdelsegonbotó="https://escapefromtarkov.fandom.com/wiki/Map:Woods?"/>
            <Component imatge={shore} títol="Shoreline" textdelparàgraf="Shoreline combina una costa extensa con un enorme resort de salud en el centro que concentra todo el botín valioso y los tiroteos intensos en interiores" textdelprimerbotó="Wiki" enllaçdelprimerbotó="https://escapefromtarkov.fandom.com/wiki/Shoreline" textdelsegonbotó="Mapa" enllaçdelsegonbotó="https://escapefromtarkov.fandom.com/wiki/Map:Shoreline?"/>
            <Component imatge={customs} títol="Customs" textdelparàgraf="Customs es una zona industrial con una carretera central que conecta almacenes y dormitorios siendo el mapa principal para misiones iniciales con combates de media distancia" textdelprimerbotó="Wiki" enllaçdelprimerbotó="https://escapefromtarkov.fandom.com/wiki/Customs" textdelsegonbotó="Mapa" enllaçdelsegonbotó="https://escapefromtarkov.fandom.com/wiki/Map:Customs?"/>
            <Component imatge={factory} títol="Factory" textdelparàgraf="Factory es un mapa diminuto de una planta química donde la acción es inmediata y frenética centrada totalmente en el combate cercano y partidas muy rápidas" textdelprimerbotó="Wiki" enllaçdelprimerbotó="https://escapefromtarkov.fandom.com/wiki/Factory" textdelsegonbotó="Mapa" enllaçdelsegonbotó="https://escapefromtarkov.fandom.com/wiki/Map:Factory?"/>
            <Component imatge={labs} títol="Labs" textdelparàgraf="Labs es una instalación subterránea secreta de alta dificultad que requiere tarjeta de acceso para entrar no tiene seguro de equipo y ofrece el botín más caro del juego" textdelprimerbotó="Wiki" enllaçdelprimerbotó="https://escapefromtarkov.fandom.com/wiki/The_Lab" textdelsegonbotó="Mapa" enllaçdelsegonbotó="https://escapefromtarkov.fandom.com/wiki/Map:The_Lab?"/>
        </div>
    );
}

function Component({imatge, títol, textdelparàgraf, textdelprimerbotó, enllaçdelprimerbotó, textdelsegonbotó, enllaçdelsegonbotó}) {
    return (
        <div style={{display: "flex", height:"500px", border: "1px solid black", margin: "10px", flexDirection: "column", alignItems: "center", width: "460px", overflow:"hidden", borderRadius:"20px"}}>
            <img src={imatge} alt="" style={{width: "100%", height: "250px", objectFit: "cover"}} />
            <div style={{padding:"10px 10px 0px 25px"}}>
                <p style={{margin: "0 0 0 0", fontSize:"50px"}}>{títol}</p>
                <p style={{margin:"0 0 0 0", fontSize:"20px"}}>{textdelparàgraf}</p>
            </div>
            <div style={{marginTop:"20px", marginBottom:"10px"}}>
                <button style={{fontWeight:"bold",fontSize:"20px", marginRight:"15px", borderRadius:"10px", border:"none", outline:"none", backgroundColor:"white", color:"#2179d0"}}>
                    <a href={enllaçdelprimerbotó} style={{color:"inherit", textDecoration:"none"}}>{textdelprimerbotó}</a>
                </button>
                <button style={{fontWeight:"bold",fontSize:"20px", marginRight:"15px", borderRadius:"10px", border:"none", outline:"none", backgroundColor:"white", color:"#2179d0"}}>
                    <a href={enllaçdelsegonbotó} style={{color:"inherit", textDecoration:"none"}}>{textdelsegonbotó}</a>
                </button>
            </div>
        </div>
    );
}

export default application;
