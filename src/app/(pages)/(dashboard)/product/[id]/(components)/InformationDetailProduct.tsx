import { formatRupiah } from '@/utils/extension'
import { Box, Chip, Table, Typography } from '@mui/material'
import React from 'react'
import { ShieldExclamation } from 'react-bootstrap-icons'

const InformationDetailProduct = () => {
  return (
    <>
        <Typography variant='h2'>Baju Kaos Masa Kini 2024</Typography>
        <Box py={2}></Box>
        <Box>
            <Typography variant='h6' pb={1}>SKU</Typography>
            <Typography variant='body1'>awdkja092384092</Typography>
        </Box>
        <Box py={1}></Box>
        <Box>
            <Typography variant='h6' pb={1}>Kategori</Typography>
            <Box display={'flex'} flexDirection={'row'} gap={1}>
            <Chip label="Baju" color="primary" />
            <Chip label="wanita" color="primary" />
            </Box>
            
        </Box>
        <Box py={1}></Box>
        <Box>
            <Typography variant='h6' pb={1}>Status</Typography>
            <Typography variant='body1'>{formatRupiah(1000000)}</Typography>
        </Box>
        <Box py={1}></Box>
        <Box>
            <Typography variant='h6'>Harga</Typography>
            <ul>
                <li>asas</li>
                <li>asas</li>
                <li>asas</li>
            </ul>
        </Box>
        <Box py={1}></Box>
        <Box>
            <Typography variant='h6' pb={1}>Berat</Typography>
            <Typography variant='body1'>Rp. 100.000</Typography>
        </Box>
        <Box py={1}></Box>
        <Box>
            <Typography variant='h6'>Ukuran/Volume</Typography>
            <ul>
                <li>asas</li>
                <li>asas</li>
                <li>asas</li>
            </ul>
        </Box>
        <Box py={1}></Box>
        <Box>
            <Typography variant='h6' pb={1}>Asuransi Pengiriman</Typography>
            <Typography variant='body1'>
                Opsional Asuransi Pengiriman</Typography>
        </Box>
    </>
  )
}

export default InformationDetailProduct