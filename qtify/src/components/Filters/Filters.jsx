import React, { useEffect, useState } from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { getFiltersData } from '../../apiService/service';
import styles from './Filters.module.css'
import './filter.css'
const Filters = ({callApplyFilter}) => {
    const[filterData, setFilterData] = useState([])
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
const getData = async() =>{
    const res = await getFiltersData()
   console.log(res.data.data)
    setFilterData(res.data.data)
    console.log(filterData)
}

const btnHandler =(item)=>{
    callApplyFilter(item)
}
    useEffect(() =>{
        getData()
    },[])
  return (
    <Box sx={{ width: '100%' , marginBottom:"20px"}}>
      <Tabs
       onChange={handleChange}
       value={value}
        aria-label="Tabs where selection follows focus"
        selectionFollowsFocus
      >
        <Tab label="All" onClick={()=>btnHandler("All")} className={styles.customTab}/>
        {filterData.length>0 && filterData.map(item => <Tab label={item.label}  className={styles.customTab} onClick={()=>btnHandler(item.key)} />)}
      </Tabs>
    </Box>
  )
}

export default Filters
