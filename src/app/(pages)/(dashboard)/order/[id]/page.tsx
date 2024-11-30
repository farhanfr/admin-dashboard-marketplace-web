"use client"

import PageContainer from '@/components/container/PageContainer';
import BlankCard from '@/components/shared/BlankCard';
import { Box, Container, Typography } from '@mui/material';
import { useParams } from 'next/navigation';
import React from 'react'
import HeaderInvoice from './(sections)/HeaderInvoice';
import AddressInvoice from './(sections)/AddressInvoice';

const DetailInvoicePage = () => {

  return (
    <PageContainer title="Detail Pesanan" description="Detail Pesanan">
      <Box px={20}>
      <BlankCard>
        <HeaderInvoice/>
        <AddressInvoice/>
      </BlankCard>
      </Box>
    </PageContainer>
  )
}

export default DetailInvoicePage