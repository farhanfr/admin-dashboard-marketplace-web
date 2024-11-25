import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { IconPlus } from '@tabler/icons-react';
import { Box, Typography } from '@mui/material';

export default function AddStockDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
     <Button variant='contained' color='primary' startIcon={<IconPlus/>} onClick={handleClickOpen}>Tambah Stok</Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries((formData as any).entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
        }}
      >
        <DialogTitle>Tambah Stok</DialogTitle>
        <DialogContent>
          <DialogContentText>
          Proses penambahan stok akan dicatat dalam riwayat transaksi.
          </DialogContentText>

        <Box sx={{mt:2}}>
          <Typography variant='body1' sx={{fontWeight:'bold'}}>Jumlah Stok</Typography>
          <TextField
            autoFocus
            required
            margin="dense"
            type="number"
            fullWidth
            variant="outlined"
            placeholder='Masukkan jumlah stok'
          />
          </Box>
          <Box mt={2}>
          <Typography variant='body1' sx={{fontWeight:'bold'}}>Catatan</Typography>
          <TextField
            autoFocus
            required
            margin="dense"
            type="number"
            fullWidth
            variant="outlined"
            multiline
            rows={5}
            placeholder='Masukkan catatan'
          />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='error'>Batal</Button>
          <Button type="submit" color="primary">Tambahkan</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}