import React from 'react'
import '../card-participacao/card-participacao.css'
import { Card } from 'semantic-ui-react'
import iconBox from '../../icons/box.png'
import BotaoDoar from '../botao-doar/BotaoDoar'
import Instituicao from '../instituicao/Instituicao'
import styled from 'styled-components'

const Cabecalho = styled(Card.Content)`
  color: palevioletred;
  font-weight: bold;
`;
const description = (
  <div className="descricao">
    <div className="text"><h2>Arrecadação de alimentos para moradores de rua</h2></div>
    <div className="img"><img src={iconBox} className="icon-hands" alt="Ícone ilustrativo para doação de materiais"/></div>
    <Instituicao/>
    <div className="break"></div> 
    <p>36</p> <div className="horas-semana"><span>ITENS DISPONÍVEIS</span></div>
    <BotaoDoar />
  </div>
  
)

const CardDoacao = () => (
  <Card className="card-doacao">
     <Cabecalho className="titulo-card" header='DOAÇÃO DE MATERIAIS' /> 
    {/* <Card.Content>
      <Card.Header>DOAÇÃO DE MATERIAIS</Card.Header>
    </Card.Content> */}
    <Card.Content description={description} />
    <Card.Content extra>
      Natal, RN
    </Card.Content>
  </Card>
)

export default CardDoacao;