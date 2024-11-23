"use client"

import PageContainer from '@/components/container/PageContainer'
import BlankCard from '@/components/shared/BlankCard';
import DashboardCard from '@/components/shared/DashboardCard'
import { Box, Button, Paper, Typography } from '@mui/material'
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Image from 'next/image';

const ListProduct = () => {

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'No', width: 70 },
    {
      field: 'image', headerName: 'Gambar', width: 150,
      headerAlign: 'center',
      renderCell: (params) => (
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', bgcolor: 'transparent', height: '100%' }}>
          <Image
            src={"https://api-mojosadean.rodiginesia.com/product/PRDCT_IMGS_krwl6ya6_0_30_2024_.jpg"}
            alt={params.row.name}
            width={100}
            height={100}
            style={{ objectFit: 'cover', borderRadius: '10px' }}
          />
        </Box>
      )

    },
    { field: 'name', headerName: 'Nama Produk', width: 150 },
    { field: 'category', headerName: 'Kategori', width: 150 },
    { field: 'stock', headerName: 'Stok', width: 150 },
    { field: 'price', headerName: 'Harga', width: 150 },
    { field: 'status', headerName: 'Status', width: 150 },
    { field: 'variant_product', headerName: 'Produk Variasi', width: 150 },
    { field: 'created_at', headerName: 'Dibuat tanggal', width: 150 },
    {
      field: 'action', headerName: 'Aksi', width: 200,
      renderCell: (params) => (
        <div>
          <strong>
            <Button
              variant="contained"
              color="info"
              size="small"
              style={{ marginLeft: 16 }}
              onClick={() => {

              }}
            >
              Ubah
            </Button>
          </strong>
          <strong>
            <Button
              variant="contained"
              color="error"
              size="small"
              style={{ marginLeft: 16 }}
              onClick={() => {

              }}
            >
              Hapus
            </Button>
          </strong>
        </div>
      )
    },
    // {
    //   field: 'age',
    //   headerName: 'Age',
    //   type: 'number',
    //   width: 90,
    // },
    // {
    //   field: 'fullName',
    //   headerName: 'Full name',
    //   description: 'This column has a value getter and is not sortable.',
    //   sortable: false,
    //   width: 160,
    //   valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
    // },
  ];

  const rows = [
    { id: 1, image: 'Snow', name: 'Jon', category: 35, stock: 'Jon', price: 'Jon', status: 'Jon', variant_product: 'Jon', created_at: 'Jon', action: <><h3>hahaha</h3></> },
    { id: 2, image: 'Snow', name: 'Jon2', category: 35, stock: 'Jon', price: 'Jon', status: 'Jon', variant_product: 'Jon', created_at: 'Jon', action: <><h3>hahaha</h3></> },
    { id: 3, image: 'Snow', name: 'Jon2', category: 35, stock: 'Jon', price: 'Jon', status: 'Jon', variant_product: 'Jon', created_at: 'Jon', action: <><h3>hahaha</h3></> },
    { id: 4, image: 'Snow', name: 'Jon2', category: 35, stock: 'Jon', price: 'Jon', status: 'Jon', variant_product: 'Jon', created_at: 'Jon', action: <><h3>hahaha</h3></> },
  ];

  const paginationModel = { page: 0, pageSize: 5 };


  return (
    <PageContainer title="Daftar Produk" description="Daftar Produk">
        <Box py={3} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant='h3'>Daftar Produk</Typography>
            <Button variant='contained'>Tambah Produk</Button>
          </Box>
      <BlankCard>
        <Box sx={{ width: "100%", display: "table", tableLayout: "fixed" }}>
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

export default ListProduct