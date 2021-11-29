import React from 'react'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function Footer({setSaldo, saldo, doce, comprou, setComprou}){

    const moeda1 = ()=>{
        setSaldo(saldo+1)
        setComprou(comprou+1)
    }

    const moeda2 = ()=>{
        setSaldo(saldo+2)
        setComprou(comprou+2)
    }

    const moeda5 = ()=>{
        setSaldo(saldo+5)
        setComprou(comprou+5)
    }

    const Moeda1Negativa=<Button style={{margin:'0 0 0 2%', 'opacity':'0.3'}} variant="outlined">Moeda R$: 1,00</Button>
    const Moeda1Positivo=<Button style={{margin:'0 0 0 2%', cursor: 'pointer'}} variant="outlined" onClick={()=> moeda1()}>Moeda R$: 1,00</Button>
    const Moeda2Negativa=<Button style={{margin:'0 0 0 2%', 'opacity':'0.3'}} variant="outlined">Moeda R$: 2,00</Button>
    const Moeda2Positivo=<Button style={{margin:'0 0 0 2%', cursor: 'pointer'}} variant="outlined" onClick={()=> moeda2()}>Moeda R$: 2,00</Button>
    const Moeda5Negativa=<Button style={{margin:'0 0 0 2%', 'opacity':'0.3'}} variant="outlined">Moeda R$: 5,00</Button>
    const Moeda5Positivo=<Button style={{margin:'0 0 0 2%', cursor: 'pointer'}} variant="outlined" onClick={()=> moeda5()}>Moeda R$: 5,00</Button>
    return(
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12} style={{display:'flex', margin:'2% 0 0 35%'}}>
                    <Typography variant="h6" gutterBottom component="div" style={{padding:'0 2% 0 0'}}>
                        Valores
                    </Typography>
                    {doce<1? Moeda1Positivo:Moeda1Negativa}
                    {doce<1? Moeda2Positivo:Moeda2Negativa}
                    {doce<1? Moeda5Positivo:Moeda5Negativa}
                </Grid>
            </Grid>
        </div>
    )
}
