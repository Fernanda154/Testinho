import React from 'react'
import './geolocalizacao.css'

function Geolocalizacao(){
    return(
        <div className="switch__container">
        <span className="label">Geolocalização ativa</span>
        <input id="switch-shadow" className="switch switch--shadow" type="checkbox" checked/>
        <label htmlFor="switch-shadow"></label>
        </div>

    );
}
export default Geolocalizacao;