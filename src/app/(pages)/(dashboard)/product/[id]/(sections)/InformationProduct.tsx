import PageContainer from '@/components/container/PageContainer'
import BlankCard from '@/components/shared/BlankCard'
import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import ProductCarousel from '../(components)/ProductCarousel'
import InformationDetailProduct from '../(components)/InformationDetailProduct'

const InformationProduct = () => {
    return (
        <>
            <Box py={3} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant='h3'>Detail Produk</Typography>
            </Box>
            <BlankCard>
                <Box p={3} display={'flex'} flexDirection={'row'} justifyContent={'space-between'} >
                    <Box flex={3}>
                        <ProductCarousel />
                    </Box>
                    <Box px={2}></Box>
                    <Box flex={5}>
                        <InformationDetailProduct/>
                    </Box>
                </Box>

            </BlankCard>
        </>
    )
}

export default InformationProduct