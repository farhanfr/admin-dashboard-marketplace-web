"use client"

import PageContainer from '@/components/container/PageContainer'
import BlankCard from '@/components/shared/BlankCard'
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Typography, Box, Button } from '@mui/material'
import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { IconPlus, IconTrash } from '@tabler/icons-react'
import AddStockDialog from '../components/AddStockDialog'

const ListInventory = () => {

  const [product, setProduct] = React.useState('');
  const [variantProduct, setVariantProduct] = React.useState('');

  const handleChangeProduct = (event: SelectChangeEvent) => {
    setProduct(event.target.value as string);
  };

  const handleChangeVariantProduct = (event: SelectChangeEvent) => {
    setVariantProduct(event.target.value as string);
  };

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'No',width:70 },
    { field: 'invoice_number', headerName: 'Nama Produk',width:300 },
    { field: 'buyer_name', headerName: 'Stok',width:200 },
    { field: 'qty', headerName: 'Status',width:200 },
    { field: 'grand_total', headerName: 'Catatan',width:200 },
    { field: 'delivery', headerName: 'Dibuat Pada',width:200 },
    {
      field: 'action', headerName: 'Aksi',width:200,
      renderCell: (params) => (
        <div>
          <strong>
            <Button
              variant="contained"
              color="error"
              startIcon={<IconTrash />}
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
];

const rows = [
    { id:1, invoice_number: 'INV-001', buyer_name: 'John Doe', qty: '10', grand_total: 'Rp. 10.000', delivery: '10-10-2022'},
];

const paginationModel = { page: 0, pageSize: 5 };

  return (
    <PageContainer title="Modul Persediaan Produk" description="Modul Persediaan">
      <h3> Modul Persediaan Produk </h3>
      <BlankCard paddingX={3} paddingY={2}>
        <Typography variant="h6">Pilih Produk</Typography>
        <Box sx={{ height: '10px' }}></Box>
        <FormControl fullWidth>
          <Select
            value={product}
            onChange={handleChangeProduct}
            variant="outlined" size="small" fullWidth
            displayEmpty
            renderValue={(selected) => {
              if (selected.length === 0) {
                return <span>Pilih produk</span>;
              }

              return selected;
            }}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <Box sx={{ height: '20px' }}></Box>
        <Box>
        <Typography variant="h6">Pilih Variant Produk</Typography>
        <Box sx={{ height: '10px' }}></Box>
        <FormControl fullWidth>
          <Select
            value={variantProduct}
            onChange={handleChangeVariantProduct}
            variant="outlined" size="small" fullWidth
            displayEmpty
            renderValue={(selected) => {
              if (selected.length === 0) {
                return <span>Pilih variant produk</span>;
              }

              return selected;
            }}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        </Box>

      </BlankCard>
      <Box sx={{ height: '10px' }}></Box>
      <BlankCard paddingX={3} paddingY={2}>
        <Typography variant="h3">Modul Persediaan</Typography>
        <Box sx={{ height: '10px' }}></Box>
        <Typography variant="body1">Gunakan Modul Persediaan untuk mengatur stok produk anda, semua perubahan stok akan tercatat dalam modul ini</Typography>
        <Box sx={{ height: '20px' }}></Box>
        <Box sx={{ width: "100%", display: "table", tableLayout: "fixed",border:1,borderColor:"silver" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{ pagination: { paginationModel } }}
            pageSizeOptions={[5, 10]}
            disableRowSelectionOnClick
            rowHeight={150}
            sx={{ border: 0, 
              '& .MuiDataGrid-columnHeader': {
            backgroundColor: '#F16C27',
            color: 'white',
          },
              '& .MuiDataGrid-cell': { border:1,borderColor: '#EDEDED', fontSize: '14px', fontWeight: '500' }, '& .MuiDataGrid-columnHeaderTitle': { fontWeight: 'bold', fontSize: '14px' } }}
          />
        </Box>
        <Box sx={{height:'30px'}}></Box>
        <AddStockDialog/>
      </BlankCard>
    </PageContainer>
  )
}

export default ListInventory