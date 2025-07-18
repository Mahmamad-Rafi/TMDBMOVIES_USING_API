import React from "react";

import "./Navbar.css";
import DarkMode from "../DarkMode/DarkMode";
import Fire from "../../assets/fire.png";
import Star from "../../assets/glowing-star.png";
import Party from "../../assets/partying-face.png";
import happy from "../../assets/happy.png"; // 👈 add an icon for now playing

const Navbar = () => {
    return (
        <nav className='navbar'>
            <h1>TBDMOVIES</h1>

            <div className='navbar_links'>
                <DarkMode />
                <a href='#popular'>
                    Popular{" "}
                    <img src={Fire} alt='fire emoji' className='navbar_emoji' />
                </a>
                <a href='#top_rated'>
                    Top Rated{" "}
                    <img src={Star} alt='star emoji' className='navbar_emoji' />
                </a>
                <a href='#now_playing'>
                    Now Playing {" "}
                    <img src={happy} alt='happy emoji' className='navbar_emoji' />
                </a>
                <a href='#upcoming'>
                    Upcoming{" "}
                    <img
                        src={Party}
                        alt='party face emoji'
                        className='navbar_emoji'
                    />
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
