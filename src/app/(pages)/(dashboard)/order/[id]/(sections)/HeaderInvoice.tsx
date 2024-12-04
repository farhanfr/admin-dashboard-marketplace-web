import { Box, Chip, Typography } from '@mui/material'
import React from 'react'

const HeaderInvoice = () => {
  return (
    <>
      <Box display={'flex'} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
          <Box flex={6}>
            asas
          </Box>
          <Box flex={6}>
            <Typography fontWeight={'bold'} variant='h6'>Invoice INV-MPKM/20241024/PMYTCIMB/j2LDGE7ykH</Typography>
            <Box py={1}></Box>
            <Typography variant='h6'><b>Tanggal Invoice :</b> 24-10-2024 22:31</Typography>
            <Box py={1}></Box>
            <Chip label="Transaksi Dibatalkan" color="error"/>
            <Box py={1}></Box>
          </Box>
      </Box>
    </>
  )
}

export default HeaderInvoice