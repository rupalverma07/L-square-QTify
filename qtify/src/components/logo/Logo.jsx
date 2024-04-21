import React from 'react';
import logoImage from "../../assets/logo.png";
import { Box } from '@mui/material';

const Logo = () => {
  return (
    <Box>
      <img src={logoImage} alt='logo' width={67} height={34}/>
    </Box>
  )
}

export default Logo
