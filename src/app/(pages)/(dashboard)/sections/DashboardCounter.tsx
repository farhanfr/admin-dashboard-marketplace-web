import BlankCard from '@/components/shared/BlankCard'
import { Box, Grid, Typography } from '@mui/material'
import { IconCheck, IconClock, IconCoin, IconCoinRupee } from '@tabler/icons-react'
import React from 'react'

const DashboardCounter = () => {
    return (
        <>
            <Box>
                <Grid container spacing={3}>
                    <Grid item xs={12} lg={6}>
                        <BlankCard 
                        paddingY={3}
                        children={
                            <Box sx={{display:'flex',flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
                                <Box sx={{display:'flex',flexDirection:'column',alignItems:'start'}}>
                                   <Box>
                                    <Typography variant="h2" color={'primary'}>10</Typography>
                                   </Box>
                                   <Box>
                                   <Typography variant="h5" color={'GrayText'}>Pesanan Diproses</Typography>
                                   </Box>
                                </Box>
                                <Box>
                                  <IconClock size={55} color='#5D87FF'/>
                                </Box>
                            </Box>
                        } />
                    </Grid>
                    <Grid item xs={12} lg={6}>
                    <BlankCard 
                        paddingY={3}
                        children={
                            <Box sx={{display:'flex',flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
                                <Box sx={{display:'flex',flexDirection:'column',alignItems:'start'}}>
                                   <Box>
                                    <Typography variant="h2" color={'primary'}>10</Typography>
                                   </Box>
                                   <Box>
                                   <Typography variant="h5" color={'GrayText'}>Pesanan Selesai</Typography>
                                   </Box>
                                </Box>
                                <Box>
                                  <IconCheck size={55} color='#5D87FF'/>
                                </Box>
                            </Box>
                        } />
                    </Grid>
                    <Grid item xs={12} lg={6}>
                    <BlankCard 
                        paddingY={3}
                        children={
                            <Box sx={{display:'flex',flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
                                <Box sx={{display:'flex',flexDirection:'column',alignItems:'start'}}>
                                   <Box>
                                    <Typography variant="h2" color={'primary'}>Rp 1.000.000</Typography>
                                   </Box>
                                   <Box>
                                   <Typography variant="h5" color={'GrayText'}>Total Diproses (Rp)</Typography>
                                   </Box>
                                </Box>
                                <Box>
                                  <IconCoin size={55} color='#5D87FF'/>
                                </Box>
                            </Box>
                        } />
                    </Grid>
                    <Grid item xs={12} lg={6}>
                    <BlankCard 
                        paddingY={3}
                        children={
                            <Box sx={{display:'flex',flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
                                <Box sx={{display:'flex',flexDirection:'column',alignItems:'start'}}>
                                   <Box>
                                    <Typography variant="h2" color={'primary'}>Rp 1.000.000</Typography>
                                   </Box>
                                   <Box>
                                   <Typography variant="h5" color={'GrayText'}>Total Selesai (Rp)</Typography>
                                   </Box>
                                </Box>
                                <Box>
                                  <IconCoin size={55} color='#5D87FF'/>
                                </Box>
                            </Box>
                        } />
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default DashboardCounter