import React from 'react'
import boloFoto from '../../imagens/bolo.png'
import doceFoto from '../../imagens/doce.png'
import sorveteFoto from '../../imagens/sorvete.png'

export default function Main({setSaldo, saldo}){
    const imgDoceNegativo=<img style={{'opacity':'0.3'}} src={doceFoto} alt="doce" height="200" width="630" />
    const imgDocePositivo=<img style={{cursor: 'pointer'}} onClick={()=> setSaldo(saldo - 6)} src={doceFoto} alt="doce" height="200" width="630" />
    const imgSorveteNegativo=<img style={{'opacity':'0.3'}} src={sorveteFoto} alt="sorvete" height="200" width="630"/>
    const imgSorvetePositivo=<img style={{cursor: 'pointer'}} onClick={()=> setSaldo(saldo - 7)} src={sorveteFoto} alt="sorvete" height="200" width="630"/>
    const imgBoloNegativo=<img style={{'opacity':'0.3'}} src={boloFoto} alt="bolo" height="200" width="630"/>
    const imgBoloPositivo=<img style={{cursor: 'pointer'}} onClick={()=> setSaldo(saldo - 8)} src={boloFoto} alt="bolo" height="200" width="630"/>
    return(
        <div>
            {saldo>=6? imgDocePositivo: imgDoceNegativo }
            {saldo>=7? imgSorvetePositivo: imgSorveteNegativo }
            {saldo>=8? imgBoloPositivo: imgBoloNegativo }
        </div>
    )
}