"use client"
import { useState, useEffect } from "react";
import { Typography, Box } from "@mui/material";
import { fetchFromAPI } from "../../utils/FetchAPi";
import Videos from "./Videos";

const SearchFeed = ({searchTerm}) => {
  const [videos, setVideos] = useState(null);
  console.log(searchTerm);
  useEffect(() => {
    if (searchTerm) {
      fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
        .then((data) => setVideos(data.items));
    }
  }, [searchTerm]);

  return (
    <Box p={2} minHeight="95vh">
      <Typography variant="h2" fontWeight={900} color="white" p = {2} mb={6} ml={{ sm: "100px" }}>
        Search Results for <span style={{ color: "#FC1503" }}>{searchTerm}</span> videos
      </Typography>
      <Box display="flex">
        <Box sx={{ mr: { sm: '100px' } }} />
        {<Videos videos={videos} />}
      </Box>
    </Box>
  );
};

export default SearchFeed;
