import React from 'react'
import '../card-participacao/card-participacao.css'
import { Card } from 'semantic-ui-react'
import iconCoin from '../../icons/coin.png'
import BotaoContribuir from '../botao-contribuir/BotaoContribuir'
import Instituicao from '../instituicao/Instituicao'

const description = (
  <div className="descricao">
    <div className="text"><h2>Arrecadação de alimentos para moadores de rua</h2></div>
    <div className="img"><img src={iconCoin} className="icon-hands" alt="Ícone ilustrativo para vaga de voluntariado"/></div>
    <Instituicao/>
    <div className="break"></div> 
    <p>5.000</p> <div className="horas-semana"><span>VALOR ESPERADO</span></div>
    <BotaoContribuir />
  </div>
  
)

const CardContribuicao = () => (
  <Card>
    <Card.Content className="titulo-card" header='CAMPANHA DE ARRECADAÇÃO' />
    <Card.Content description={description} />
    <Card.Content extra>
      Natal, RN
    </Card.Content>
  </Card>
)

export default CardContribuicao;