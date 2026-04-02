import { useState, useRef } from "react";
import "../styles.css";

import { FaBars, FaSearch, FaHome } from "react-icons/fa";
import { MdList } from "react-icons/md";
import { IoArrowBack } from "react-icons/io5";

export default function Watch({ goHome, goList }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [search, setSearch] = useState("");

  const videoRef = useRef(null); // 🔥 IMPORTANT

  const handleSearch = () => {
    alert("Searching: " + search);
  };

  const goWatch = () => {
    console.log("Already on watch page");
  };

  return (
    <div className="watch-page">
      {/* NAVBAR */}
      <div className="navbar">
        <div className="left">
          <FaBars className="icon" onClick={() => setMenuOpen(true)} />
          <span className="logo">ANIME</span>
        </div>

        <div className="right">
          {searchOpen ? (
            <div className="search-box">
              <IoArrowBack
                className="icon"
                onClick={() => setSearchOpen(false)}
              />

              <input
                type="text"
                placeholder="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />

              <FaSearch className="icon yellow" onClick={handleSearch} />
            </div>
          ) : (
            <FaSearch
              className="icon yellow"
              onClick={() => setSearchOpen(true)}
            />
          )}
        </div>
      </div>

      {/* OVERLAY */}
      {menuOpen && (
        <div className="overlay" onClick={() => setMenuOpen(false)}></div>
      )}

      {/* SIDEBAR */}
      <div className={`sidebar ${menuOpen ? "open" : ""}`}>
        <div className="close" onClick={() => setMenuOpen(false)}>
          ✖
        </div>

        <ul>
          <li onClick={goHome}>
            <FaHome className="menu-icon" />
            <span>Home</span>
          </li>

          <li onClick={goWatch}>
            <MdList className="menu-icon" />
            <span>Anime List</span>
          </li>
        </ul>
      </div>

      {/* 🎬 VIDEO WITH DOUBLE TAP */}
      <div className="video-wrapper">
        <video ref={videoRef} controls width="100%">
          <source
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            type="video/mp4"
          />
        </video>

        {/* ⏪ LEFT DOUBLE TAP */}
        <div
          className="tap-zone left"
          onDoubleClick={(e) => {
            e.stopPropagation();
            if (videoRef.current) {
              videoRef.current.currentTime -= 10;
            }
          }}
        ></div>

        {/* ⏩ RIGHT DOUBLE TAP */}
        <div
          className="tap-zone right"
          onDoubleClick={(e) => {
            e.stopPropagation();
            if (videoRef.current) {
              videoRef.current.currentTime += 10;
            }
          }}
        ></div>
      </div>

      {/* BUTTONS */}
      <div className="episode-nav">
        <button className="nav-btn">‹ Prev</button>
        <button className="nav-btn">All Episodes</button>
        <button className="nav-btn">Next ›</button>
      </div>

      {/* EPISODES */}
      <div className="episode-section">
        <div className="episode-header">
          <span>List of episodes:</span>
          <input placeholder="Number of Ep" />
        </div>

        <div className="episode-list">
          {[...Array(12)].map((_, i) => (
            <div key={i} className={`episode-item ${i === 0 ? "active" : ""}`}>
              <span className="ep-num">{i + 1}</span>
              <p>Episode {i + 1}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
