import { Box, styled, Typography } from '@mui/material'
import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const ProductVariantTable = () => {

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: '#5D87FF',
          color: theme.palette.common.white,
          fontSize: 14,
          fontWeight: 'bold',
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 14,
          fontWeight: '500',
          border:'1px solid silver'
        },
      }));


    function createData(
        name: number,
        calories: number,
        fat: number,
        carbs: number,
        protein: number,
    ) {
        return { name, calories, fat, carbs, protein };
    }

    const rows = [
        createData(1, 159, 6.0, 24, 4.0),
        createData(2, 237, 9.0, 37, 4.3),
        createData(3, 262, 16.0, 24, 6.0),
        createData(4, 305, 3.7, 67, 4.3),
        createData(5, 356, 16.0, 49, 3.9),
    ];

    return (
        <Box p={3} sx={{ width: "100%", display: "table", tableLayout: "fixed" }}>
             <Typography variant='h4'>Variasi Produk</Typography>
             <Box py={1}></Box>
            <TableContainer >
                <Table sx={{ minWidth: 500 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell width={50}>No</StyledTableCell>
                            <StyledTableCell>Nama Varian</StyledTableCell>
                            <StyledTableCell>SKU</StyledTableCell>
                            <StyledTableCell>Stok Barang</StyledTableCell>
                            <StyledTableCell>Harga Jual</StyledTableCell>
                            <StyledTableCell>Pajak</StyledTableCell>
                            <StyledTableCell>Diskon</StyledTableCell>
                            <StyledTableCell>Harga Total</StyledTableCell>
                            <StyledTableCell>Utama</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <StyledTableCell>
                                    {row.name}
                                </StyledTableCell>
                                <StyledTableCell>Baju ukuran xl merah</StyledTableCell>
                                <StyledTableCell>{row.fat}</StyledTableCell>
                                <StyledTableCell>{row.carbs}</StyledTableCell>
                                <StyledTableCell>{row.protein}</StyledTableCell>
                                <StyledTableCell>{row.protein}</StyledTableCell>
                                <StyledTableCell>{row.protein}</StyledTableCell>
                                <StyledTableCell>{row.protein}</StyledTableCell>
                                <StyledTableCell>{row.protein}</StyledTableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    )
}

export default ProductVariantTable