import React, {useState}from 'react'
import Header from '../../header/header'
import Footer from '../../footer/footer'
import Main from '../../main/main'

export default function Home(){

    const [saldo, setSaldo] = useState(0)
    const [troco, seTroco] = useState(0)
    return (
        
        <div>
            <Header saldo={saldo} troco={saldo} setSaldo={setSaldo} />
            <Main setSaldo={setSaldo} saldo={saldo}/>
            <Footer setSaldo={setSaldo} saldo={saldo}/>
        </div>
    )
       
}