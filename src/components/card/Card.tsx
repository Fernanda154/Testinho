import React from 'react'
import './card.css'
import { Card } from 'semantic-ui-react'
import BotaoAcao from './BotaoAcao'
import Instituicao from '../instituicao/Instituicao'
import iconHands from '../../icons/hands.png'
import iconCoin from '../../icons/coin.png'
import iconBox from '../../icons/box.png'

function TipoCard(props:any) {
    var tipo = props.tipo;
    var titulo = "";
    var descricao = "";
    var alt = "";
    var local = props.local;
    var instituicao = props.instituicao;
    var icon;
    var botao;
    var detalheLabel= "";
    var detalheNum = "";
    if(tipo == "participacao"){
        titulo = "VAGA DE VOLUNTARIADO";
        descricao = "Entrega de roupa e alimentos para moadores de rua";
        icon = iconHands;
        alt = "Ícone ilustrativo para vaga de voluntariado";
        botao = "Participar";
        detalheLabel = "HORAS SEMANA";
        detalheNum = "2-6";
    }
    if(tipo == "doacao"){
        titulo = "DOAÇÃO DE MATERIAIS";
        descricao = "Arrecadação de alimentos para moradores de rua";
        icon = iconBox;
        alt = "Ícone ilustrativo para doação de materiais";
        botao = "Doar";
        detalheNum = "36";
        detalheLabel = "ÍTENS DISPONÍVEIS";
    }
    if(tipo == "contribuir"){
        titulo = "CAMPANHA DE ARRECADAÇÃO";
        descricao = "Arrecadação de alimentos para moadores de rua";
        icon = iconCoin;
        alt = "Ícone ilustrativo para arrecadação de materiais";
        botao = "Contribuir";
        detalheLabel = "VALOR ESPERADO";
        detalheNum = "5.000";
    }
    var onAcaoClick = function(){ props.onCardClick(titulo) } ;
    return(
        <Card>
            <Card.Content className="titulo-card" header={titulo} />
            <Card.Content >
                <div className="descricao">
                    <div className="text"><h2>{descricao}</h2></div>
                    <div className="img"><img src={icon} className="icon" alt={alt}/></div>
                    <Instituicao instituicao={instituicao}/>
                    <div className="break"></div> 
                    <p>{detalheNum}</p> <div className="horas-semana"><span>{detalheLabel}</span></div>
                    <BotaoAcao nome={botao} onAcaoClick = { onAcaoClick }/>
                </div>
            </Card.Content>
            <Card.Content extra>
            {local}
            </Card.Content>
        </Card>
        )
    
}
export default TipoCard;