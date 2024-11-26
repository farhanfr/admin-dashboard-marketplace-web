import PageContainer from '@/components/container/PageContainer'
import BlankCard from '@/components/shared/BlankCard'
import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import ProductCarousel from '../(components)/ProductCarousel'

const InformationProduct = () => {
    return (
        <>
            <Box py={3} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant='h3'>Detail Produk</Typography>
            </Box>
            <BlankCard>
                <Box p={3} display={'flex'} flexDirection={'row'} justifyContent={'space-between'} >
                    <Box flex={2}>
                    <ProductCarousel />
                    </Box>
                    <Box flex={5}>
                        <h3>Nama Produk</h3>
                    </Box>
                </Box>
                
            </BlankCard>
        </>
    )
}

export default InformationProduct