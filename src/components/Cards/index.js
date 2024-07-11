import "./Cards.css";
import Tooltip from '@mui/material/Tooltip';

const Cards = ({ imgSrc, followers, songTitle, title, onClick }) => {
  return (
    <>
     <Tooltip title={title? `${title} songs` : ''} placement="top" arrow >
    <div className="card-wrapper" onClick={onClick}>
      <div className="card-content">
        <div>
          <img src={imgSrc} alt={title} style={{borderRadius: "8px 8px 0px 0px"}}/>
        </div>
        <div className="card-pills">
          <p className="pills-title">
          <span className="pills">
          {followers} Follows
          </span>
           {/* {followers ? (<span className="pills">{followers} follows</span>) :(<span className="pills">
            {`${likes} Likes`} </span>)}  */}
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
