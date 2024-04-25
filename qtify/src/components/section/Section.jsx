import React, { useEffect, useState } from 'react'
import { getTopAlbumData } from '../../apiService/service';
import styles from './Section.module.css';
import Cards from '../card/Cards';

const Section = ({title,data}) => {
  return (
    <div className={styles.container}>
        <div className={styles.btnContainer}>
            <h2 className={styles.topText}>{title}</h2>
            <button className={styles.topBtn}>Collapse</button>
        </div>
      <div className={styles.row}>
        {data.length>0 ? (data.map(item => <div className={styles.col} key={item.id}><Cards data={item}/></div>)) : (<p>No data available</p>)}
      </div>
    </div>
  )
}

export default Section
