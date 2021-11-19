import React from 'react'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


export default function Header({saldo, troco, setSaldo}){
    return(
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12} style={{display:'flex', margin:'0.5% 0 0.5% 36%'}}>
                    <Typography variant="h4" gutterBottom component="div" style={{padding:'0 40% 0 0'}}>
                        MÁQUINA DE DOCE
                    </Typography>
                    {saldo>=6? <Button variant="outlined">Saldo R$: {saldo}</Button>: <Button variant="outlined" color='error'>Saldo R$: {saldo}</Button>}
                    <Button style={{margin:'0 0 0 2%'}} variant="contained" onClick={()=>setSaldo(saldo - troco)}>Troco R$: {troco}</Button>
                </Grid>
            </Grid>
        </div>
    )
}