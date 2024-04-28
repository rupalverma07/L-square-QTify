import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Hero from './components/HeroSection/Hero';
import Cards from './components/card/Cards';
import Section from './components/section/Section';
import { getNewAlbumData, getSongsData, getTopAlbumData } from './apiService/service';
import { useEffect, useState } from 'react';
import Carausel from './components/carausel/Carausel';


function App() {
  const[topAlbums, setTopAlbums] = useState([]);
  const[newAlbums, setNewAlbums] = useState([]);
  const[songs, setSongs] = useState([])
const topAlbumData =async() =>{
    const albums = await getTopAlbumData()
    console.log(albums)
    setTopAlbums(albums.data)
}

const newAlbumData =async() =>{
  const albums = await getNewAlbumData()
  console.log(albums)
  setNewAlbums(albums.data)
}

const songsData =async() =>{
  const songs = await getSongsData()
  console.log(songs)
  setSongs(songs.data)
}
    useEffect(() =>{
      topAlbumData()
      newAlbumData()
      songsData()
    },[])
  return (
    <div>
      <Navbar />
      <Hero />
      <div style={{borderBottom:"1px solid #34c94b", marginBottom:"10px", paddingBottom:"7px"}}>
      <Section title="Top Albums" data={topAlbums} type="album"/>
      </div>
      <Section title="New Albums" data={newAlbums} type="album"/>
      <Section title="Songs" data={songs} type="song"/>
      {/* <Carausel /> */}
    </div>
  );
}

export default App;
