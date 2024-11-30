import { Box, Chip, Typography } from '@mui/material'
import React from 'react'

const InfoCourierInvoice = () => {
  return (
    <>
        <Box display={'flex'} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
          <Box flex={6}>
            asas
          </Box>
          <Box flex={6}>
            <Typography>Invoice INV-MPKM/20241024/PMYTCIMB/j2LDGE7ykH</Typography>
            <Typography>Tanggal Invoice : <b>24-10-2024 22:31</b></Typography>
            <Chip label="Print" color="error"/>
          </Box>
      </Box>
    </>
  )
}

export default InfoCourierInvoice