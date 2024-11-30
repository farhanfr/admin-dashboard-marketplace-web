import { Box, Typography } from '@mui/material'
import React from 'react'

const AddressInvoice = () => {
  return (
    <>
        <Box display={'flex'} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
            <Box flex={6} display={'flex'} flexDirection={'column'}>
                <Typography>Penerima:</Typography>
                <Typography>Bima</Typography>
                <Typography>jalan</Typography>
                <Typography>+(62) 85648782***</Typography>
            </Box>
            <Box flex={6} display={'flex'} flexDirection={'column'}>
                <Typography>Penerima:</Typography>
                <Typography>Bima</Typography>
                <Typography>jalan</Typography>
                <Typography>+(62) 85648782***</Typography>
            </Box>
        </Box>
    </>
  )
}

export default AddressInvoice