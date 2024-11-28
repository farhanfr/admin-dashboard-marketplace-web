import BlankCard from '@/components/shared/BlankCard'
import { Box, Divider, Tab, Tabs, Typography } from '@mui/material'
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import React, { useState } from 'react'

const HistoryTransactionProduct = () => {

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
        <>
            <Box sx={{ width: "100%", display: "table", tableLayout: "fixed" }}>
                <BlankCard>

                    <Tabs
                        value={value}
                        onChange={handleChange}
                        variant='scrollable'
                        aria-label="icon position tabs example"
                        allowScrollButtonsMobile
                    >
                        <Tab label="xl" />
                        <Tab label="XXL" />
                    </Tabs>
                    <Divider />

                    <Box p={3}>
                        <Typography variant='h4'>Riwayat Transaksi</Typography>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        initialState={{ pagination: { paginationModel } }}
                        pageSizeOptions={[5, 10]}
                        rowHeight={150}
                        disableRowSelectionOnClick
                        className='rowClick'
                        // onRowClick={handleRowClick}
                        sx={{
                            border: 0, '& .MuiDataGrid-cell': { borderColor: 'silver', fontSize: '14px', fontWeight: '500' }, '& .MuiDataGrid-columnHeaderTitle': { fontWeight: 'bold', fontSize: '14px' }, // disable cell selection style
                            '.MuiDataGrid-cell:focus': {
                                outline: 'none'
                            },
                            // pointer cursor on ALL rows
                            '& .MuiDataGrid-row:hover': {
                                cursor: 'pointer'
                            }
                        }}
                    />
                    </Box>
                </BlankCard>
            </Box>
        </>
    )
}

export default HistoryTransactionProduct