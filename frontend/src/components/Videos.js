import React from "react";
import { Stack, Box } from "@mui/material";

import { ChannelCard, Loader, VideoCard } from "./";

const Videos = ({ videos, direction }) => {
 
  if (!videos?.length) return <Loader />;

  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="center"
      alignItems="center"
      gap={4}
    >
      {videos.map((item, idx) => (
        <Box key={idx} sx={{borderRadius:"5px", width: { xs: "100%", sm: "450px"} ,
      boxShadow:" rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
