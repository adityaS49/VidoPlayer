"use client"
import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";

import { fetchFromAPI } from "../../utils/FetchAPi";
import { Videos, Sidebar } from "./";
import styles from "./Style.module.css"
const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    setVideos(null);

    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items))
    }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box sx={{ height: { sx: "auto", md: "92vh" }, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 } }}>
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        
        <Typography className={styles.copyright} variant="body2" sx={{ mt: 1.5, color: "#fff" }}>
          Copyright © 2022 JSM Media
        </Typography>
      </Box>

      <Box className = {styles.feed} p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography variant="h2" fontWeight="bold" mb={2} sx={{ color: "black" }}>
          {selectedCategory} <span style={{ color: "#FC1503" }}>videos</span>
        </Typography>

        <Videos videos={videos} />
      </Box>
    </Stack>
  );
  };

export default Feed;