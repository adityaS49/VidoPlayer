import React from "react";

import { Box } from "@mui/material";
import SearchFeed from "../../../components/SearchFeed";
import { Navbar } from "@/components";

const page = ({ params }) => {
  const { searchterm } = params;

  return (
    <Box sx={{ backgroundColor: "#000" }}>
    <Navbar/>
      <SearchFeed searchTerm={searchterm} />
    </Box>
  );
};

export default page;
