import React from 'react'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function Footer({setSaldo, saldo}){
    return(
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12} style={{display:'flex', margin:'2% 0 0 35%'}}>
                    <Typography variant="h6" gutterBottom component="div" style={{padding:'0 2% 0 0'}}>
                        Valores
                    </Typography>
                    <Button style={{margin:'0 0 0 2%'}} variant="outlined" onClick={()=> setSaldo(saldo+1)}>Moeda R$: 1,00</Button>
                    <Button style={{margin:'0 0 0 2%'}} variant="outlined" onClick={()=> setSaldo(saldo+2)}>Moeda R$: 2,00</Button>
                    <Button style={{margin:'0 0 0 2%'}} variant="outlined" onClick={()=> setSaldo(saldo+5)}>Moeda R$: 5,00</Button>
                </Grid>
            </Grid>
        </div>
    )
}
