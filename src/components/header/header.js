import React from 'react'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Dialogue from '../dialog/dialogue'


export default function Header({saldo, troco, setSaldo, setDoce, doce, comprou, setComprou}){

    const [open, setOpen] = React.useState(false);

    const handleClose = () => {
        setOpen(false);
        setSaldo(saldo - troco)
        setDoce(doce - 1)
    };
    
    const setTroco = () =>{
        setOpen(true);
    }

    return(
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12} style={{display:'flex', margin:'0.5% 0 0.5% 36%'}}>
                    <Typography variant="h4" gutterBottom component="div" style={{padding:'0 40% 0 0'}}>
                        MÁQUINA DE DOCE
                    </Typography>
                    {saldo>=6? <Button variant="outlined">Saldo R$: {saldo}</Button>: <Button variant="outlined" color='error'>Saldo R$: {saldo}</Button>}
                    <Button style={{margin:'0 0 0 2%'}} variant="contained" onClick={()=>setTroco()}>Troco R$: {troco}</Button>
                    <Dialogue open={open} handleClose={handleClose} saldo={saldo} comprou={comprou} setComprou={setComprou} />
                </Grid>
            </Grid>
        </div>
    )
}