import Swipper from "../Swiper";
import "./CardList.css";
import Cards from "../Cards";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CardList = ({ title, navId, topAlbum }) => {
  const [show, setShow] = useState(false);
  console.log("navId", navId);

  const navigate = useNavigate();

  const handleCardClick = (albumId) => {
    navigate(`/album-details/${albumId}`);
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
              onClick={() => handleCardClick(item.id)}
            />
          ))}

          
        </div>
      )}
    </div>
  );
};

export default CardList;
