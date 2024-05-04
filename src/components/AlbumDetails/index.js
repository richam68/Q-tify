import { useNavigate } from "react-router-dom";
import "./albumDetails.css";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import StickyHeadTable from "../Table";
const AlbumDetails = () => {
  const navigate = useNavigate();

  const backToHome = () => {
    navigate("/");
  };

  return (
    <div>
      <div className="album-detail-wrapper">
        <div onClick={backToHome}>
          <ArrowCircleLeftOutlinedIcon
            style={{ width: "40px", height: "40px", border: "1px" }}
          />
        </div>

        <div className="album-header">
          <div>
            <img src="hi" alt="Album image" width = {288} height = {329}/>
          </div>

          <div className="album-content">
            <h2>Best of Punjabi Bae in 2022</h2>
            <p>Catch the most best romantic punjabi songs 
                <br/>
                <span>2022</span>
            </p>
            <span>75 songs</span>
            <span>3 hr 45 minutes</span>
            <span>100 follows</span>
            <br />
            <button>Shuffle</button>
            <button>Add to Library</button>
          </div>
        </div>
      </div>
        <div className="album-detail-body">
           <StickyHeadTable/>
        </div>
    </div>
  );
};
export default AlbumDetails;
