import Swipper from "../Swiper";
import "./CardList.css";
import Cards from "../Cards";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CardList = ({ title, navId, topAlbum, songs }) => {
  console.log("songs", songs)
  const [show, setShow] = useState(false);
  console.log("navId", navId);

  const navigate = useNavigate();

  const handleCardClick = (albumId, type) => {
    console.log("albumId", albumId)
    if (type === "album") {
      navigate(`/album-details/${albumId}`);
    } else if (type === "song") {
      // Handle click for single song
      console.log(`Clicked on single song with id ${albumId}`);
      // Optionally implement a different action for single songs
    }
  };
  
  return (
    <div className="cardList-container">
      <div className="card-heading">
        <p>{title}</p>
        <p className="collapse-btn" onClick={() => setShow(!show)}>
          {" "}
          {show ? "Collapse" : "Show All"}
        </p>
      </div>

      {show === false ? (
        <Swipper
          topAlbum={topAlbum}
          navId={navId}
          handleCardClick={handleCardClick}
        />
      ) : (
        <div className="card-container">
          {topAlbum.map((item) => (
            <Cards
              key={item.id}
              imgSrc={item.image}
              //followers={item.follows ? `${item.follows}` : `${item.likes}`}
              //followers={item}
              followers={item.follows}
              songTitle={item.title}
              title={item.songs.length}
              onClick={() => handleCardClick(item.id, "album")}
            />
          ))}

          
          {/* Render cards for single songs */}
          {songs.map((song) => (
            <Cards
              key={song.id}
              imgSrc={song.image}
              followers={song.followers}
              songTitle={song.title}
              title="Single Song"
              onClick={() => handleCardClick(song.id, "song")}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CardList;
