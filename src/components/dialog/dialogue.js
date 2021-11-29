import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


export default function Dialogue({open, handleClose, saldo, comprou, setComprou }){

    const valorBala = comprou - 6
    const valorSorvete = comprou - 7

    return(
        <div>
            <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
                <DialogTitle id="alert-dialog-title">
                    Seu troco e o que você comprou
                </DialogTitle>
                <DialogContent>
                    <DialogContentText DialogContentText id="alert-dialog-description">
                        Seu troco é de: {saldo}
                        {<br></br>}
                        E você comprou: { comprou === saldo? 'nada': valorBala === saldo? 'uma bala': valorSorvete === saldo? 'um sorvete' : 'um bolo'}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose}>Sair</Button>
                </DialogActions>
            </Dialog> 
        </div>
    )
}