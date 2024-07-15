// Ensure this is a client-side component
"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Paper, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import styles from "./Style.module.css"
const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();

  const onHandleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      router.push(`/search/${searchTerm}`);
      setSearchTerm('');
    }
  };

  return (
    <Paper
      component='form'
      onSubmit={onHandleSubmit}
      sx={{
        display:"flex",
        borderRadius: 20,
        border: '2px solid #e3e3e3',
        pl: 2,
        boxShadow: 'none',
        mr: { sm: 0 },
      }}
    >
      <input
        className={styles.searchBar}
        placeholder='Search...'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <IconButton type='submit' sx={{ p: '10px', color: 'black' }} aria-label='Search'>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
