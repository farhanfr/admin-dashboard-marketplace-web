import { Alert, Typography } from '@mui/material'
import React from 'react'
import { Box } from '@mui/material'
import BlankCard from '@/components/shared/BlankCard'

const DashboardListNotification = () => {
    return (
        <>
            <BlankCard
             children={
                <Box p={3} sx={{ display: 'flex', flexDirection: 'column', height: '500px' }}>
                    <Typography variant='h4'>Notifikasi Penting</Typography>
                    <Box sx={{height: '10px'}}></Box>
                    {
                        Array.from({ length: 5 }).map((_, index) => (
                            <Box py={1}>
                                <Alert variant='filled' severity="success">This is a success Alert.</Alert>
                            </Box>
                            
                        ))
                    }
                </Box>
            } />

        </>
    )
}

export default DashboardListNotification