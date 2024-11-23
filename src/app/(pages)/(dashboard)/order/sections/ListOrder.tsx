"use client"

import PageContainer from '@/components/container/PageContainer'
import BlankCard from '@/components/shared/BlankCard';
import { Box, Button, Divider, Paper, Tab, Tabs, Typography } from '@mui/material'
import { DataGrid, GridColDef, GridMenuIcon } from '@mui/x-data-grid';
import Image from 'next/image';
import { useState } from 'react';
import { Cancel, CancelOutlined, ConfirmationNumber, Menu } from '@mui/icons-material';
import { IconBox, IconCar, IconCheck, IconClock, IconClockExclamation, IconProgress, IconProgressCheck, IconTruckDelivery } from '@tabler/icons-react';

const ListOrder = () => {

    const [value, setValue] = useState(0);

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'No', width: 70 },
        { field: 'invoice_number', headerName: 'Nomor Invoice', width: 400 },
        { field: 'buyer_name', headerName: 'Nama Pembeli', width: 150 },
        { field: 'qty', headerName: 'Total Barang', width: 150 },
        { field: 'grand_total', headerName: 'Total Barang', width: 150 },
        { field: 'delivery', headerName: 'Pengiriman', width: 150 },
        { field: 'created_at', headerName: 'Dibuat Tanggal', width: 150 },
        { field: 'invoice_status', headerName: 'Status Pesanan', width: 250 },
        // {
        //   field: 'Aksi', headerName: 'Aksi', width: 200,
        //   renderCell: (params) => (
        //     <div>
        //       <strong>
        //         <Button
        //           variant="contained"
        //           color="info"
        //           size="small"
        //           style={{ marginLeft: 16 }}
        //           onClick={() => {

        //           }}
        //         >
        //           {/* {params.row.invoice_status} */}
        //           Ubah
        //         </Button>
        //       </strong>
        //       <strong>
        //         <Button
        //           variant="contained"
        //           color="error"
        //           size="small"
        //           style={{ marginLeft: 16 }}
        //           onClick={() => {

        //           }}
        //         >
        //           Hapus
        //         </Button>
        //       </strong>
        //     </div>
        //   )
        // },
    ];

    const rows = [
        { id: 1, invoice_number: 'INV-MPKM/2024102/PMYTCIMB/niu5pgGE3w', buyer_name: 'John Doe', qty: 3, grand_total: 'Rp 10.000', delivery: 'Dikirim', created_at: '2023-01-01', invoice_status: 'Menunggu Konfirmasi Toko' },
        { id: 2, invoice_number: 'INV-MPKM/2024102/PMYTCIMB/sfs5pgGE3w', buyer_name: 'Jane Smith', qty: 5, grand_total: 'Rp 20.000', delivery: 'Belum Dikirim', created_at: '2023-02-01', invoice_status: 'Paket sudah tiba' },
    ];

    const paginationModel = { page: 0, pageSize: 5 };

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <PageContainer title="Daftar Pesanan" description="Daftar Pesanan">
            <Box py={2}>
                <Typography variant="h3" sx={{ mb: 2 }}>Daftar Pesanan</Typography>
            </Box>
            <BlankCard>
                <Box sx={{ width: "100%", display: "table", tableLayout: "fixed" }}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        variant='scrollable'
                        aria-label="icon position tabs example"
                        allowScrollButtonsMobile
                    >
                        <Tab icon={<GridMenuIcon />} iconPosition="start" label="Semua" />
                        <Tab icon={<IconClock />} iconPosition="start" label="Menunggu Konfirmasi Toko" sx={{ minWidth: "fit-content", flex: 1 }} />
                        <Tab icon={<IconProgressCheck />} iconPosition="start" label="Diproses Toko" sx={{ minWidth: "fit-content", flex: 1 }} />
                        <Tab icon={<IconTruckDelivery />} iconPosition="start" label="Dalam Proses Pengantaran" sx={{ minWidth: "fit-content", flex: 1 }} />
                        <Tab icon={<IconBox />} iconPosition="start" label="Paket Sudah Tiba" sx={{ minWidth: "fit-content", flex: 1 }} />
                        <Tab icon={<IconCheck />} iconPosition="start" label="Transaksi Selesai" sx={{ minWidth: "fit-content", flex: 1 }} />
                        <Tab icon={<CancelOutlined />} iconPosition="start" label="Transaksi Dibatalkan" sx={{ minWidth: "fit-content", flex: 1 }} />
                    </Tabs>
                    <Divider />
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        initialState={{ pagination: { paginationModel } }}
                        pageSizeOptions={[5, 10]}
                        checkboxSelection
                        disableRowSelectionOnClick
                        rowHeight={150}
                        sx={{ border: 0, '& .MuiDataGrid-cell': { borderColor: 'silver', fontSize: '14px', fontWeight: '500' }, '& .MuiDataGrid-columnHeaderTitle': { fontWeight: 'bold', fontSize: '14px' } }}
                    />
                </Box>
            </BlankCard>
        </PageContainer>
    )
}

export default ListOrder