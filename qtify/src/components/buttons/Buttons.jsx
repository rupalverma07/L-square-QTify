import React from 'react';
import styles from './Button.module.css';
import Button from '@mui/material/Button';

const Buttons = ({children}) => {
  return <Button variant='contained' className={styles.btn}>{children}</Button>
}

export default Buttons
