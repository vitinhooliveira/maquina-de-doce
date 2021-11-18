import React, { useState, useEffect } from 'react'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import './header.css'



export default function Header({saldo, troco, setSaldo}){
    const cor = true
    return(
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12} className='gridheader'>
                    <Typography variant="h5" gutterBottom component="div" className='typographyh5'>
                        MÁQUINA DE DOCE
                    </Typography>
                    <Button variant="outlined" color='error'>Saldo R$: {saldo}</Button>
                    <Button variant="contained" className='troco'onClick={()=>setSaldo(saldo - troco)}>Troco R$: {troco}</Button>
                </Grid>
            </Grid>
        </div>
    )
}