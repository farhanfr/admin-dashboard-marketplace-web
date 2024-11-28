import PageContainer from '@/components/container/PageContainer'
import BlankCard from '@/components/shared/BlankCard'
import { Box, Button, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import ProductCarousel from '../(components)/ProductCarousel'
import InformationDetailProduct from '../(components)/InformationDetailProduct'
import ProductVariantTable from '../(components)/ProductVariantTable'

const InformationProduct = () => {
    const theme = useTheme();
    const isTablet = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <>
            <Box py={3} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant='h3'>Detail Produk</Typography>
            </Box>
            <BlankCard>
                <Box p={3} display={'flex'} flexDirection={isTablet ? 'column' : 'row'} justifyContent={'space-between'} >
                    <Box flex={3}>
                        <ProductCarousel />
                    </Box>
                    <Box py={isTablet ? 1 : 0} px={isTablet ? 0 : 2}></Box>
                    <Box flex={5}>
                        <InformationDetailProduct/>
                    </Box>
                </Box>
            
            <ProductVariantTable/>

            </BlankCard>
        </>
    )
}

export default InformationProduct