"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Videos from "../components/Videos";
import Loader from "../components/Loader";
import { fetchFromAPI } from "../../utils/FetchAPi";
import styles from "./Style.module.css";
const VideoDetail = ({ videoId }) => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  console.log(videoId);
  useEffect(() => {
    if (videoId) {
      fetchFromAPI(`videos?part=snippet,statistics&id=${videoId}`).then(
        (data) => setVideoDetail(data.items[0])
      );

      fetchFromAPI(
        `search?part=snippet&relatedToVideoId=${videoId}&type=video`
      ).then((data) => setVideos(data.items));
    }
  }, [videoId]);

  if (!videoDetail?.snippet) return <Loader />;

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail;

  return (
    <Box minHeight="100vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={4}>
          <Box
            sx={{
              width: "100%",
              justifyContent: "center",
              display: "flex",
              flexDirection: "column",
              textDecoration:"none",
              padding:"2rem",
              borderRadius:"10px"
            }}
          >
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${videoId}`}
              className={styles.reactPlayer}
              controls
              sx={{textDecoration:"none"}}
            />
            <Typography sx={{textDecoration:"none"}} color="black" variant="h5" fontWeight="bold" p={2} >
               {title}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ color: "black" }}
              py={1}
              px={2}
            >
              <Link sx={{textDecoration:"none"}} href={`/channel/${channelId}`}>
                <Typography
                  variant={{ sm: "subtitle1", md: "h2" }}
                  color="black"
                  sx={{textDecoration:"none"}}
                >
                  {channelTitle}
                  <CheckCircleIcon
                    sx={{ fontSize: "14px", color: "gray", ml: "5px" }}
                  />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{ opacity: 0.7 ,fontWeight: 600}}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7,fontWeight: 600 }}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box
          flex={2}
          px={2}
          py={{ md: 4, xs: 5 }}
          justifyContent="center"
          alignItems="center"
          display="flex"
          flexWrap="wrap"
        >
          <Videos videos={videos} direction="column" />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
