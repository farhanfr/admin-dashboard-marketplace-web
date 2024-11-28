"use client"

import PageContainer from '@/components/container/PageContainer'
import React from 'react'
import InformationProduct from './(sections)/InformationProduct'
import DescriptionProduct from './(sections)/DescriptionProduct'
import { Box, useMediaQuery, useTheme } from '@mui/material'
import HistoryTransactionProduct from './(sections)/HistoryTransactionProduct'

const ProductDetailPage = () => {
    const theme = useTheme();
    const isTablet = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <PageContainer title="Detail Produk" description="Detail Produk">
            <InformationProduct />
            <Box py={2}></Box>
            <DescriptionProduct/>
            <Box py={2}></Box>
            <HistoryTransactionProduct/>
        </PageContainer>
    )
}

export default ProductDetailPage