import React, { useState, useEffect } from "react";
import "./songList.css";

const SongList = ({ songLists,inputText }) => {
  console.log("dd", songLists);
  const [artistName, setArtistName] = useState([]);

  const findArtist = () => {
    if (songLists && songLists.length > 0) {
    let artist = songLists[0].songs.map((item) => item.artists);
    setArtistName(artist);
    }
  };
  console.log("hh", artistName);

  useEffect(() => {
    findArtist();
  }, [inputText]);

  if (!songLists || songLists.length === 0) {
    return <div className="songlist-error">No data found</div>;
  }
  return (
    <div className="songlist-wrapper">
      {Boolean(songLists.length > 1) && 
      <>
      {songLists.map((item) => (
        <div className="songlist-inner-wrapper" key={item.id}>
           
          <img src={item.image} alt={item.title} width={66} height={71} />
        
          <div className="songs-title">
            <p>{item.title}</p>
            {item.songs[0].artists[1] ? (
              <div className="songs-artist">
                <p>
                  {item.songs[0].artists[0]}, {item.songs[0].artists[1]}
                </p>
              </div>
            ) : (
              <div className="songs-artist">
                <p>{item.songs[0].artists[0]}</p>
              </div>
            )}
          </div>
          <div className="songlist-follows">{item.follows} Follows</div>
        </div>
      ))}
      </>
    }
    </div>
  );
};

export default SongList;
