import React from 'react'
import './instituicao.css'

function Instituicao(props:any){
    return(
        <div className="porta-instituicao">
            <span className="instituicao">{props.instituicao}</span>
        </div>
        
    );
}

export default Instituicao;