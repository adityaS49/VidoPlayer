"use client";
import React from "react";
import { Box } from "@mui/material";
import VideoDetail from "../../../components/VideoDetail";
import { Navbar } from "@/components";

const page = ({ params }) => {
  // const router = useRouter();
  const { id } = params;

  return (
    <Box sx={{ backgroundColor: "#fff" }}>
      <Navbar />
      <VideoDetail videoId={id} />
    </Box>
  );
};

export default page;
