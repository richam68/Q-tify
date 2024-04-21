import "./Cards.css";
import Tooltip from '@mui/material/Tooltip';
import { useNavigate } from 'react-router-dom';


const Cards = ({ imgSrc, followers, songTitle, title }) => {
  const navigate = useNavigate();

  const goToAlbumDetailsPage = () => {
    console.log("hh")
    navigate("/album-details")
  };

  return (
    <>
     <Tooltip title={title? `${title} songs` : ''} placement="top" arrow >
    <div className="card-wrapper" onClick={goToAlbumDetailsPage}>
      <div className="card-content">
        <div>
          <img src={imgSrc} alt={title} style={{borderRadius: "8px 8px 0px 0px"}}/>
        </div>
        <div className="card-pills">
          <p className="pills-title">
            <span className="pills">{followers} follows</span>
          </p>
        </div>
      </div>
      <p className="card-album-name">{songTitle}</p>
    </div>
    </Tooltip>
    
    </>
  );
};

export default Cards;
