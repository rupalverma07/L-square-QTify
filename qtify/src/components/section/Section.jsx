import React, { useEffect, useState } from 'react'
import { getTopAlbumData } from '../../apiService/service';
import styles from './Section.module.css';
import Cards from '../card/Cards';

const Section = ({children}) => {
    const[topAlbums, setTopAlbums] = useState([]);
const getData =async() =>{
    const albums = await getTopAlbumData()
    console.log(albums)
    setTopAlbums(albums.data)
}
    useEffect(() =>{
       getData()
    },[])
  return (
    <div className={styles.container}>
        <div className={styles.btnContainer}>
            <h2 className={styles.topText}>{children}</h2>
            <button className={styles.topBtn}>Collapse</button>
        </div>
      <div className={styles.row}>
        {topAlbums.length>0 ? (topAlbums.map(item => <div className={styles.col} key={item.id}><Cards data={item}/></div>)) : (<p>No data available</p>)}
      </div>
    </div>
  )
}

export default Section
