import React from 'react'
import TituloPagina from "./components/titulo/TituloPagina";
import Geolocalizacao from "./components/geolocalizacao/Geolocalizacao"
import CardParticipacao from "./components/card-participacao/CardParticipacao"
import CardDoacao from "./components/card-doacao/CardDoacao"
import CardContribuicao from "./components/card-contribuicao/CardContribuicao"
import BotaoTodas from "./components/botao-todas/BotaoTodas"
import './App.css'

function App() {
  return (
    <div className="app">
        <div className="ui cards">
        <TituloPagina/>
        <Geolocalizacao/>
        <div className="break"></div>
        <CardParticipacao/>
        <CardDoacao/>
        <CardDoacao/>

        <CardDoacao/><CardParticipacao/><CardContribuicao/>

        <CardDoacao/><CardParticipacao/><CardDoacao/>

        <BotaoTodas/>
        </div>
    </div>
  );
}

export default App;
