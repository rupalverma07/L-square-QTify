import React, { useEffect, useState } from 'react'
import { getTopAlbumData } from '../../apiService/service';
import styles from './Section.module.css';
import Cards from '../card/Cards';
import Carausel from '../carausel/Carausel';
import CarauselLeftBtn from '../carausel/CarauselLeftBtn';
import CarauselRightBtn from '../carausel/CarauselRightBtn';

const Section = ({title,data}) => {
  const[isCarausel, setIsCarausel] = useState(true)
  return (
    <div className={styles.container}>
        <div className={styles.btnContainer}>
            <h2 className={styles.topText}>{title}</h2>
            <button className={styles.topBtn} onClick={() => setIsCarausel(!isCarausel)}>{isCarausel ? 'Show All' : 'Collapse'}</button>
        </div>
      <div className={styles.row}>
        {isCarausel ? (<Carausel data={data} renderCardItem={(item) => <Cards data={item}/>} />) : (data.length>0 ? (data.map(item => <div className={styles.col} key={item.id}><Cards data={item}/></div>)) : (<p>No data available</p>))}
        
        {/* <Carausel data={data} /> */}
        {/* {data.length>0 ? (data.map(item => <div className={styles.col} key={item.id}><Cards data={item}/></div>)) : (<p>No data available</p>)} */}
      </div>
    </div>
  )
}

export default Section;