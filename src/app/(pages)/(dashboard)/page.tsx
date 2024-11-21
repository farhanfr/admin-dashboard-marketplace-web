'use client'
import { Grid, Box } from '@mui/material';
import PageContainer from '@/components/container/PageContainer';
// components
import SalesOverview from '@/components/dashboard/SalesOverview';
import DashboardCounter from './sections/DashboardCounter';
import { spacing } from '@mui/system';
import DashboardListNotification from './sections/DashboardListNotification';

const Dashboard = () => {
  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
      <DashboardCounter/>
      <Box sx={{ py: 3 }} />
      <DashboardListNotification/>
    </PageContainer>
  )
}

export default Dashboard;
