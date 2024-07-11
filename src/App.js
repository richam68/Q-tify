import "./App.css";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import CardList from "./components/CardList";
import { useState, useEffect } from "react";
import {
  fetchTopAlbum,
  fetchNewAlbum,
  fetchAllSongs,
  fetchSongsByGenre,
  fetchFAQ,
} from "./components/api/index";
import SectionFilter from "./components/SectionFilter";
import Accordion from "./components/Accordion";
import MusicPlayer from "./components/MusicPlayer";
import { Routes, Route } from "react-router-dom";
import AlbumDetails from "./components/AlbumDetails";


function App() {
  const [topAlbum, setTopAlbum] = useState([]);
  const [newAlbum, setNewAlbum] = useState([]);
  const [songs, setAllSongs] = useState([]);
  const [filterSongs, setFilterSongs] = useState([]);
  const [genreData, setGenreData] = useState([]);
  const [accordionData, setAccordionData] = useState([]);

  useEffect(() => {
    getTopAlbum();
    getNewAlbum();
    getFilterSongs();
    getGenreData();
    getAccordionData();
  }, []);

  async function getTopAlbum() {
    try {
      let data = await fetchTopAlbum();
      setTopAlbum(data);
    } catch (error) {
      console.log("error found", error);
    }
  }
  console.log("topAlbum", topAlbum);
  async function getNewAlbum() {
    try {
      let data = await fetchNewAlbum();
      setNewAlbum(data);
    } catch (error) {
      console.log("err", error);
    }
  }

  async function getFilterSongs() {
    try {
      let data = await fetchAllSongs();
      console.log("data", data);
      setAllSongs(data);
      setFilterSongs(data);
    } catch (error) {
      console.log("err", error);
    }
  }

  async function getGenreData() {
    try {
      let data = await fetchSongsByGenre();
      //in array we don't have all section so we have to added manually
      setGenreData([{ key: "all", label: "All" }, ...data.data]);
    } catch (error) {
      console.log("err", error);
    }
  }

  async function getAccordionData() {
    try {
      let data = await fetchFAQ();
      setAccordionData(data.data);
    } catch (error) {
      console.log("err", error);
    }
  }

  let mergeTopAndNewAlbum = [...topAlbum, ...newAlbum];
  console.log("newAlbum", accordionData);

console.log("songs", songs)
return (
  <div className="App">
    <Navbar searchData={mergeTopAndNewAlbum} />
    <Routes>
      <Route path="/" element={
        <>
         <HeroSection />
          <CardList title="Top Album" navId="ta" topAlbum={topAlbum} songs={songs} />
          <CardList title="New Album" navId="na" topAlbum={newAlbum} songs={songs}/>
          <SectionFilter
            title="Songs"
            songs={filterSongs}
            genreData={genreData}
            executeFilter={(genre) => {
              if (genre === "all") {
                setFilterSongs(songs);
              } else {
                setFilterSongs(songs.filter((item) => item.genre.key === genre));
              }
            }}
          />
          <Accordion accordionData={accordionData} />
          <MusicPlayer />
        </>
      } />
      <Route path="/album-details/:albumId" element={<AlbumDetails mergeTopAndNewAlbum={mergeTopAndNewAlbum}/>} />
    </Routes>
  </div>
);
}
export default App;