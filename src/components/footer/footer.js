import React, { useState } from 'react'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function Footer({setSaldo, saldo}){
    return(
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12} className='gridheader'>
                    <Typography variant="h6" gutterBottom component="div" className='typographyh5'>
                        Valores
                    </Typography>
                    <Button variant="outlined" className='saldo' onClick={()=> setSaldo(saldo+1)}>Moeda R$: 1,00</Button>
                    <Button variant="outlined" className='saldo' onClick={()=> setSaldo(saldo+2)}>Moeda R$: 2,00</Button>
                    <Button variant="outlined" className='saldo' onClick={()=> setSaldo(saldo+5)}>Moeda R$: 5,00</Button>
                    <Button variant="contained" className='troco'>Enviar</Button>
                </Grid>
            </Grid>
        </div>
    )
}
