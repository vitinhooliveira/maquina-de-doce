import React from 'react'
import boloFoto from '../../imagens/bolo.png'
import doceFoto from '../../imagens/doce.png'
import sorveteFoto from '../../imagens/sorvete.png'

export default function Main({setSaldo, saldo, setDoce, doce}){

    const setValuesBala = ()=>{
        setDoce(doce + 1)
        setSaldo(saldo - 6)
    }

    const setValuesSorvete = ()=>{
        setDoce(doce + 1)
        setSaldo(saldo - 7)
    }

    const setValuesBolo = ()=>{
        setDoce(doce + 1)
        setSaldo(saldo - 8)
    }

    const imgDoceNegativo=<img style={{'opacity':'0.3'}} src={doceFoto} alt="doce" height="200" width="630" />
    const imgDocePositivo=<img style={{cursor: 'pointer'}} onClick={()=> setValuesBala()} src={doceFoto} alt="doce" height="200" width="630" />
    const imgSorveteNegativo=<img style={{'opacity':'0.3'}} src={sorveteFoto} alt="sorvete" height="200" width="630"/>
    const imgSorvetePositivo=<img style={{cursor: 'pointer'}} onClick={()=> setValuesSorvete()} src={sorveteFoto} alt="sorvete" height="200" width="630"/>
    const imgBoloNegativo=<img style={{'opacity':'0.3'}} src={boloFoto} alt="bolo" height="200" width="630"/>
    const imgBoloPositivo=<img style={{cursor: 'pointer'}} onClick={()=> setValuesBolo()} src={boloFoto} alt="bolo" height="200" width="630"/>
    return(
        <div>
            { doce < 1 && saldo>=6? imgDocePositivo: imgDoceNegativo }
            { doce < 1 && saldo>=7? imgSorvetePositivo: imgSorveteNegativo }
            { doce < 1 && saldo>=8? imgBoloPositivo: imgBoloNegativo }
        </div>
    )
}