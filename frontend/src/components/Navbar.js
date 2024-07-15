"use client";
import { Stack, Button } from "@mui/material";
import Link from "next/link";
import { logo } from "../../utils/Constants";
import { SearchBar } from "./";

const Navbar = ({ onLogout, isLoggedIn }) => (
  <Stack
  direction="row"
    alignItems="center"
    sx={{
      padding: "2px 12px",
      background: "#fff",
      top: 0,
      justifyContent: "space-between",
      boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    }}
  >
    <Link
      href="/"
      style={{
        display: "flex",
        gap: "1rem",
        alignItems: "center",
        textDecoration: "none",
      }}
    >
      <img src={logo} alt="logo" height={45} />
      <h1 style={{ color: "black" }}>VidoPlayer</h1>
    </Link>
    <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }}>
      <SearchBar />
      {isLoggedIn && (
        <Button
          variant="contained"
          color="secondary"
          onClick={onLogout}
        >
          Logout
        </Button>
      )}
    </Stack>
  </Stack>
);

export default Navbar;
