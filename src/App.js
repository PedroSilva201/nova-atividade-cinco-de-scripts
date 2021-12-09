import React, {useState, createContext, useContext} from "react";
import {useState} from "react";
import "./style.css";
//import axios from "axios";
//import hooks from "./hooks";
//import Context from "./Contexto";
import api from "./api";
//import {Router} from "react-dom";

export default async function App() {
  const [botao, setBotao] = useState("App");
  const [registros, setRegistros] = useState([ ]);
  const list = async () => {
    try{
      const {data} = await api.get("/list");//aqui e feito a soma dos numeros, por meio de um registro mediante a soma dos numeros
      console.log (data.registros);
      setRegistros(data.registros);
       } catch(e){
         console.log(e.message);
         alert(e.response.date.error[0]);
       }
     };
     await list();
     console.log(registros);
  return (
    <div>
      <h1>Numeros Aleatorios!!!</h1>
      <h2>O grande jogo de bincar com os numeros</h2>
      <p>Escolhe um dos cinco botoes e aperta quantas vezes voce quiser</p>

      <button onClick={()=>setBotao("App")}>Resetar todos os numeros    </button>
      <button onClick={()=>setBotao("App")}>Gerar novos numeros aqui </button>

      <button onClick={()=>setBotao("App")}>: </button>
      <button onClick={()=>setBotao("App")}>: </button>
      <button onClick={()=>setBotao("App")}>: </button>
      <button onClick={()=>setBotao("App")}>: </button>
      <button onClick={()=>setBotao("App")}>: </button>
      </div>
  );
}
