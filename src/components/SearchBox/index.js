import React, { useEffect, useState } from "react";
import { ReactComponent as SearchIcon } from "./Search icon.svg";
import "./SearchBox.css";
import SongList from "../SongList";

const SearchBox = ({ searchData }) => {
  const [inputText, setInputText] = useState("");
  const [songLists, setSongList] = useState([]);
  const [popup, setPopup] = useState(false);
  const [debouncedInput, setDebounceInput] = useState(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounceInput(inputText);
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [inputText]);

   // Filtering logic
   useEffect(() => {
    if (debouncedInput) {
      const filtering = searchData.filter((song) =>
        song.title.toLowerCase().includes(debouncedInput.toLowerCase())
      );
      setSongList(filtering);
      setPopup(true);
    } else {
      setSongList([]);
      setPopup(false);
    }
  }, [debouncedInput, searchData]);

  const handleInput = (e) => {
    let value = e.target.value;
    setInputText(value);
  };
  console.log("songLists", songLists);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="navbar-parent">
      <form className="navbar_searchbar_form" onSubmit={handleSubmit}>
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
        {popup && <SongList songLists={songLists} inputText={inputText} />}
      </div>
    </div>
  );
};

export default SearchBox;
