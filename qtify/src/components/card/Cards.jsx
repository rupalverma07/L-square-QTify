import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea } from '@mui/material';
import styles from './Cards.module.css';
import Chip from '@mui/material/Chip';

const Cards = ({data}) => {
  const chipText = data.follows+" Follows"
  return (
    <Box className={styles.cardOuter}>
    <Card className={styles.customCard} >
      <CardActionArea>
        <CardMedia
        className={styles.cardImg}
          component="img"
          height="140"
          image={data.image}
          alt={data.title}
        />
        <CardContent style={{padding:"8px"}}>
          <Chip  className={styles.customChip} label={chipText} />
          
        </CardContent>
      </CardActionArea>
    </Card>
    <Typography className={styles.cardText} variant="h5" component="div">
            {data.title}
          </Typography>
    </Box>
  )
}

export default Cards;
