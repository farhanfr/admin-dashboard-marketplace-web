"use client"

import PageContainer from '@/components/container/PageContainer'
import React from 'react'
import InformationProduct from './(sections)/InformationProduct'

const ProductDetailPage = () => {
    return (
        <PageContainer title="Detail Produk" description="Detail Produk">
            <InformationProduct />
        </PageContainer>
    )
}

export default ProductDetailPage