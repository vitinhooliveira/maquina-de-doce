import React from 'react'
import boloFoto from '../../imagens/bolo.png'
import doceFoto from '../../imagens/doce.png'
import sorveteFoto from '../../imagens/sorvete.png'

export default function Main({setSaldo, saldo}){
    return(
        <div>
            <img onClick={()=> setSaldo(saldo - 6)} src={doceFoto} alt="doce" height="200" width="630" />
            <img onClick={()=> setSaldo(saldo - 7)} src={sorveteFoto} alt="sorvete" height="200" width="630"/>
            <img onClick={()=> setSaldo(saldo - 8)} src={boloFoto} alt="bolo" height="200" width="630"/>
        </div>
    )
}