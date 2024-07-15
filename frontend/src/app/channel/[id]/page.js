import React from 'react';
import { Box } from '@mui/material';
import ChannelDetail from "../../../components/ChannelDetail";
import { Navbar } from '@/components';

const ChannelPage = ({params}) => {

  const { id } = params;

  return (
    <Box sx={{ backgroundColor: '#fff' }}>
     <Navbar/>
      <ChannelDetail channelId={id} />
    </Box>
  );
};

export default ChannelPage;
