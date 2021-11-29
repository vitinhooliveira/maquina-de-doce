import React, {useState}from 'react'
import Header from '../../header/header'
import Footer from '../../footer/footer'
import Main from '../../main/main'

export default function Home(){

    const [saldo, setSaldo] = useState(0)
    const [comprou, setComprou] = useState(0)
    const [doce, setDoce] = useState(0)
    
    return (
        
        <div>
            <Header saldo={saldo} troco={saldo} setSaldo={setSaldo} setDoce={setDoce} doce={doce} comprou={comprou} setComprou={setComprou} />
            <Main setSaldo={setSaldo} saldo={saldo} setDoce={setDoce} doce={doce}/>
            <Footer setSaldo={setSaldo} saldo={saldo}doce={doce} comprou={comprou} setComprou={setComprou}/>
        </div>
    )
       
}