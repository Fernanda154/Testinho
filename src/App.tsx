import React from 'react'
import TituloPagina from "./components/titulo/TituloPagina";
import Geolocalizacao from "./components/geolocalizacao/Geolocalizacao"
import BotaoTodas from "./components/botao-todas/BotaoTodas"
import './App.css'

import Card from './components/card/Card'

function App() {
  var cliqueBotao = function(titulo:string){console.log(titulo)};
  return (
    <div className="app">
        <div className="ui cards">
        <TituloPagina/>
        <Geolocalizacao/>
        <div className="break"></div>
        
        <Card tipo="participacao" instituicao="SP Invisível" local="Natal, RN" onCardClick={cliqueBotao}/>
        <Card tipo="doacao" instituicao="SP Invisível" local="Natal, RN" onCardClick={cliqueBotao}/>
        <Card tipo="doacao" instituicao="SP Invisível" local="Natal, RN" onCardClick={cliqueBotao}/>

        <Card tipo="doacao" instituicao="SP Invisível" local="Natal, RN" onCardClick={cliqueBotao}/>
        <Card tipo="participacao" instituicao="SP Invisível" local="Natal, RN" onCardClick={cliqueBotao}/>
        <Card tipo="contribuir" instituicao="SP Invisível" local="Natal, RN" onCardClick={cliqueBotao}/>

        <Card tipo="doacao" instituicao="SP Invisível" local="Natal, RN" onCardClick={cliqueBotao}/>
        <Card tipo="participacao" instituicao="SP Invisível" local="Natal, RN" onCardClick={cliqueBotao}/>
        <Card tipo="doacao" instituicao="SP Invisível" local="Natal, RN" onCardClick={cliqueBotao}/>
        <BotaoTodas/>
        </div>
    </div>
  );
}

export default App;
