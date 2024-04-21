import React, { useState } from "react";
import { ReactComponent as SearchIcon } from "./Search icon.svg";
import "./SearchBox.css";
import SongList from "../SongList";

const SearchBox = ({ searchData }) => {
  const [inputText, setInputText] = useState("");
  const [songLists, setSongList] = useState([]);
  const [popup, setPopup] = useState(false);

  const handleInput = (e) => {
    let value = e.target.value;
    setInputText(e.target.value);
    setPopup(!popup);

    let search = searchData.filter((item) =>
      item.title.toLowerCase().includes(value.toLowerCase())
    );
    setSongList(search);
  };

  return (
    <div className="navbar-parent">
      <form className="navbar_searchbar_form">
        <input
          type="text"
          className="navbar_input_box"
          placeholder=" Search a album of your choice"
          value={inputText}
          onChange={handleInput}
        />
        <button className="search_icon" type="submit">
          <SearchIcon style={{ width: "20px", height: "20px" }} />
        </button>
      </form>
      <div className="songlist-parent">
        {popup && <SongList songLists={songLists} />}
      </div>
    </div>
  );
};

export default SearchBox;
