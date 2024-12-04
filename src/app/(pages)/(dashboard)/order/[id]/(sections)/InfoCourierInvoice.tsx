import { Box, Chip, Typography } from '@mui/material'
import React from 'react'

const InfoCourierInvoice = () => {
  return (
    <>
    <Box py={2}></Box>
        <Box display={'flex'} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
          {/* <Box flex={6}>
            asas
          </Box> */}
          <Box flex={6}>
            <Typography>Pengiriman: <b>JNE Express</b></Typography>
            <Box py={1}></Box>
            <Typography>Metode Pembayaran: <b>Mandiri</b></Typography>
          </Box>
      </Box>
    </>
  )
}

export default InfoCourierInvoice