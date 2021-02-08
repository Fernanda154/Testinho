import React from 'react'
import './botaoAcao.css';
function BotaoAcao(props:any){
    return(
        <button className="acao" onClick={props.onAcaoClick} >{props.nome}</button>
    );
}
export default BotaoAcao;