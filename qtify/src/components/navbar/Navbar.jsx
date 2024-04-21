import { Box } from '@mui/material'
import React from 'react'
import Logo from '../logo/Logo'
import Searchbar from '../searchbar/Searchbar'
import Buttons from '../buttons/Buttons'

import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <Box className={styles.navbar}>
      <Logo />
      <Searchbar />
      <Buttons>Give Feedback</Buttons>
    </Box>
  )
}

export default Navbar
