import React from 'react'
import './card-participacao.css'
import { Card } from 'semantic-ui-react'
import iconHands from '../../icons/hands.png'
import BotaoParticipar from '../botao-participar/BotaoParticipar'
import Instituicao from '../instituicao/Instituicao'

const description = (
  <div className="descricao">
    <div className="text"><h2>Entrega de roupa e alimentos para moadores de rua</h2></div>
    <div className="img"><img src={iconHands} className="icon-hands" alt="Ícone ilustrativo para vaga de voluntariado"/></div>
    <Instituicao/>
    <div className="break"></div> 
    <p>2-6</p> <div className="horas-semana"><span>HORAS SEMANA</span></div>
    <BotaoParticipar />
  </div>
  
)

const CardParticipacao = () => (
  <Card>
    <Card.Content className="titulo-card" header='VAGA DE VOLUNTARIADO' />
    <Card.Content description={description} />
    <Card.Content extra>
      Natal, RN
    </Card.Content>
  </Card>
)

export default CardParticipacao;