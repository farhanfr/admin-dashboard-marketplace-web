import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { IconCircleChevronRight, IconPlus, IconX } from '@tabler/icons-react';
import { Box, Grid, Typography } from '@mui/material';
import Image from 'next/image';

export default function ProductGalleryDialog() {
    const [open, setOpen] = React.useState(false);
    const [previewImg, setPreviewImg] = React.useState('https://api-mojosadean.rodiginesia.com/product/PRDCT_IMGS_9wf95xs7_0_30_2024_.jpg');

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const images = [
        'https://api-mojosadean.rodiginesia.com/product/PRDCT_IMGS_krwl6ya6_0_30_2024_.jpg',
        'https://api-mojosadean.rodiginesia.com/product/PRDCT_IMGS_9wf95xs7_0_30_2024_.jpg'

    ]

    return (
        <React.Fragment>
            <IconCircleChevronRight color='#5D87FF' onClick={handleClickOpen} />
            <Dialog
                open={open}
                onClose={handleClose}
                fullWidth
                maxWidth='md'
            >
                <DialogTitle>Galeri Produk</DialogTitle>
                <DialogContent>
                    <Box display={'flex'} flexDirection={'row'}>
                        <Box flex={4}>
                            <Image
                                src={previewImg}
                                alt="Gambar Produk"
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: '100%', height: 'auto', borderRadius: '15px' }} // optional
                            />
                        </Box>
                        <Box px={1}></Box>
                        <Box flex={6}>
                            <Grid container spacing={2}>
                                {
                                    Array.from({ length: 2 }).map((_, index, array) => (
                                        <Grid item xs={6} md={3}>
                                            <Image
                                                src={images[index]}
                                                alt="Gambar Produk"
                                                width={0}
                                                height={0}
                                                sizes="100vw"
                                                style={{ width: '100%', height: 'auto', borderRadius: '15px' }}
                                                onClick={() => setPreviewImg(images[index])} // optional
                                            />
                                        </Grid>
                                    ))
                                }

                            </Grid>
                        </Box>
                    </Box>
                </DialogContent>
            </Dialog>
        </React.Fragment>
    );
}