import React from "react";
import SearchBox from "../SearchBox";
import Button from "../Button";
import "./Navbar.css"
const Navbar = ({searchData}) => {
    return(
        <div className="navbar">
           <img src="Group 1.png" alt="logo_image" width={67} height={34}/>
            <SearchBox searchData={searchData}/>
            <Button>Give Feedback</Button>
        </div>
    )
};


export default Navbar;