"use client";
import React, { useState, useEffect } from "react";

import { Box } from "@mui/material";
import { Videos, ChannelCard } from "./";
import { fetchFromAPI } from "../../utils/FetchAPi";

const ChannelDetail = ({channelId}) => {
  const [channelDetail, setChannelDetail] = useState();
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    if (channelId) {
      const fetchResults = async () => {
        const data = await fetchFromAPI(`channels?part=snippet&channelId=${channelId}`);

        setChannelDetail(data?.items[0]);

        const videosData = await fetchFromAPI(
          `search?channelId=${channelId}&part=snippet%2Cid&order=date`
        );

        setVideos(videosData?.items);
      };

      fetchResults();
    }
  }, [channelId]);

  return (
    <Box minHeight="100vh" sx={{ backgroundColor: "Red" }}>
      <Box>
        <div
          style={{
            height: "350px",
            background:
              "linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)",
            zIndex: 10,
          }}
        />
        {channelDetail && <ChannelCard channelDetail={channelDetail} marginTop="-93px" />
      }
      </Box>
      <Box p={2} display="flex">
        <Box sx={{ mr: { sm: "100px" } }} />
        {videos && <Videos videos={videos} />}
      </Box>
    </Box>
  );
};

export default ChannelDetail;
