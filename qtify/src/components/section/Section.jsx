import React, { useEffect, useState } from 'react'
import { getTopAlbumData } from '../../apiService/service';
import styles from './Section.module.css';
import Cards from '../card/Cards';
import Carausel from '../carausel/Carausel';
import CarauselLeftBtn from '../carausel/CarauselLeftBtn';
import CarauselRightBtn from '../carausel/CarauselRightBtn';
import Filters from '../Filters/Filters';

const Section = ({title,data, type}) => {
  const[isCarausel, setIsCarausel] = useState(true);
  const[allData, setAllData] = useState([])

  const applyFilter = (key) =>{
    if(key !== 'All'){
    const filteredData = data.filter(item => item.genre.key === key);
    console.log(filteredData)
    setAllData(filteredData)
    }else{
      setAllData(data)
    }
  }

  useEffect(() =>{
    setAllData(data)
  },[data])

  return (
    <div className={styles.container}>
        <div className={styles.btnContainer}>
            <h2 className={styles.topText}>{title}</h2>
            {type === 'album' ? (<button className={styles.topBtn} onClick={() => setIsCarausel(!isCarausel)}>{isCarausel ? 'Show All' : 'Collapse'}</button>) : ('')}
            </div>
            {type === 'song' ? (<Filters callApplyFilter={applyFilter} />) : ('')}
        
      <div className={styles.row}>
        {type==='song'?(<Carausel data={allData} renderCardItem={(item) => <Cards data={item} type={type}/>} />) : (isCarausel ? (<Carausel data={data} renderCardItem={(item) => <Cards data={item} type={type}/>} />) : (data.length>0 ? (data.map(item => <div className={styles.col} key={item.id}><Cards data={item} type={type}/></div>)) : (<p>No data available</p>)))}
        {/* {isCarausel ? (<Carausel data={data} renderCardItem={(item) => <Cards data={item} type={type}/>} />) : (data.length>0 ? (data.map(item => <div className={styles.col} key={item.id}><Cards data={item} type={type}/></div>)) : (<p>No data available</p>))} */}
        
        {/* <Carausel data={data} /> */}
        {/* {data.length>0 ? (data.map(item => <div className={styles.col} key={item.id}><Cards data={item}/></div>)) : (<p>No data available</p>)} */}
      </div>
    </div>
  )
}

export default Section;