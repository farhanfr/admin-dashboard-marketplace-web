"use client"

import PageContainer from '@/components/container/PageContainer';
import BlankCard from '@/components/shared/BlankCard';
import { Box, Container, Typography } from '@mui/material';
import { useParams } from 'next/navigation';
import React from 'react'
import HeaderInvoice from './(sections)/HeaderInvoice';
import AddressInvoice from './(sections)/AddressInvoice';
import InfoCourierInvoice from './(sections)/InfoCourierInvoice';
import ListProductInvoice from './(sections)/ListProductInvoice';
import HistoryTransactionInvoice from './(sections)/HistoryTransactionInvoice';

const DetailInvoicePage = () => {

  return (
    <PageContainer title="Detail Pesanan" description="Detail Pesanan">
      <Box px={20}>
      <BlankCard paddingX={3} paddingY={3}>
        <HeaderInvoice/>
        <AddressInvoice/>
        <InfoCourierInvoice/>
        <ListProductInvoice/>
        <HistoryTransactionInvoice/>
      </BlankCard>
      </Box>
    </PageContainer>
  )
}

export default DetailInvoicePage