import { Box, InputAdornment, TextField } from '@mui/material'
import React from 'react';

import { Search } from "@mui/icons-material";
import styles from './Searchbar.module.css';

const Searchbar = () => {
  return (
    <Box>
        <form>

        <input type='text' className={styles.search} placeholder='Search a song of your choice'/>
        <button type='submit' className={styles.searchBtn}><Search /></button>
        </form>

      {/* <TextField
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Search color="primary" />
            </InputAdornment>
          ),
        }}
        placeholder="Search a song of your choice"
        name="search"
       
      /> */}
    </Box>
  )
}

export default Searchbar
