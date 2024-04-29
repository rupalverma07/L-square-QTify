import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea } from '@mui/material';
import styles from './Cards.module.css';
import Chip from '@mui/material/Chip';
import Tooltip from '@mui/material/Tooltip';

const Cards = ({data, type}) => {
  // const[chipText, setChipText] = useState('')

  const like = data.likes+' Likes';
  const chipText = data.follows+" Follows";
  // const noOfSongs = data.songs.length+" songs"
  return (
<Tooltip title={type==='album' ? (data.songs.length+" songs") : ("")} placement={type==='album' ? ("top") : ("")} arrow>
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
          {type ==='album' ?(<Chip  className={styles.customChip} label={chipText} />):(<Chip  className={styles.customChip} label={like} />)}
          
          
        </CardContent>
      </CardActionArea>
    </Card>
    <Typography className={styles.cardText} variant="h5" component="div">
            {data.title}
          </Typography>
    </Box>
    </Tooltip>
  )
}

export default Cards;
