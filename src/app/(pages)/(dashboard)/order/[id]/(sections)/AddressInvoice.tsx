import { Box, Typography } from '@mui/material'
import React from 'react'

const AddressInvoice = () => {
  return (
    <>
        <Box display={'flex'} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
            <Box flex={6} display={'flex'} flexDirection={'column'}>
                <Typography fontWeight={'bold'} variant='h5'>Penerima:</Typography>
                <Box py={1}></Box>
                <Typography fontWeight={'bold'}>Bima</Typography>
                <Typography>Bima@gmail.com</Typography>
                <Box py={1}></Box>
                <Typography>jalan salak no 5, jakarta</Typography>
                <Box py={1}></Box>
                <Typography>+(62) 85648782***</Typography>
            </Box>
            <Box flex={6} display={'flex'} flexDirection={'column'}>
                <Typography fontWeight={'bold'} variant='h5'>Penerima:</Typography>
                <Box py={1}></Box>
                <Typography fontWeight={'bold'}>Bima</Typography>
                <Typography>-</Typography>
                <Box py={1}></Box>
                <Typography>jalan salak no 5, jakarta</Typography>
                <Box py={1}></Box>
                <Typography>+(62) 85648782***</Typography>
            </Box>
        </Box>
    </>
  )
}

export default AddressInvoice