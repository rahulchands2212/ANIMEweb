import { useState } from "react";
import "../styles.css";

import { FaBars, FaSearch, FaHome } from "react-icons/fa";
import { MdList } from "react-icons/md";
import { IoArrowBack } from "react-icons/io5";

export default function Season({ goHome, goList, goWatch }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [search, setSearch] = useState("");

  return (
    <div className="season-page">
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

              <FaSearch className="icon yellow" />
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
          <li
            onClick={() => {
              setMenuOpen(false);
              goHome();
            }}
          >
            <FaHome className="menu-icon" />
            Home
          </li>

          <li
            onClick={() => {
              setMenuOpen(false);
              goList();
            }}
          >
            <MdList className="menu-icon" />
            Anime List
          </li>
        </ul>
      </div>

      {/* TITLE */}
      <div className="season-top">
        DEMON SLAYER: KIMETSU NO YAIBA HASHIRA TRAINING ARC (2024)
      </div>

      {/* MAIN */}
      <div className="season-body">
        <img
          className="season-poster"
          src="https://cdn.myanimelist.net/images/anime/1286/99889.jpg"
        />

        <div className="season-text">
          <h2>DEMON SLAYER: KIMETSU NO YAIBA HASHIRA TRAINING ARC (2024)</h2>

          <p>
            <span className="label">Type:</span> TV
          </p>

          <p>
            <span className="label">Synopsis:</span>
          </p>

          <p className="desc">
            After a series of mighty clashes with Upper Rank Demons, the
            Ubuyashiki clan prepares for one last battle with Muzan.
          </p>

          <p className="desc">
            Tanjiro begins training with the Hashira to prepare for the final
            war.
          </p>

          <p>
            <span className="label">Genres:</span> Action, Supernatural
          </p>
          <p>
            <span className="label">Released:</span> 2024
          </p>
          <p>
            <span className="label">Status:</span> Completed
          </p>
        </div>
      </div>

      {/* 🔥 EPISODES / SEASON BUTTON */}
      <div className="episode-block">
        <h3>Seasons</h3>

        <div className="line"></div>

        {/* 🔥 CLICK → WATCH PAGE */}
        <button className="season-btn" onClick={goWatch}>
          ▶ Season 5
        </button>
      </div>

      {/* FOOTER */}
      <div className="footer">
        <h2>GOGO ANIME</h2>
        <p>Copyright © 2026</p>
      </div>
    </div>
  );
}
