import { useState } from "react";
import "./styles.css";

import { FaBars, FaSearch, FaHome } from "react-icons/fa";
import { MdList } from "react-icons/md";
import { IoArrowBack } from "react-icons/io5";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    alert("Searching: " + search);
  };

  return (
    <div>
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
          <li>
            <FaHome className="menu-icon" />
            <span>Home</span>
          </li>

          <li>
            <MdList className="menu-icon" />
            <span>Anime List</span>
          </li>
        </ul>
      </div>

      {/*====================== NOTICE BAR========================== */}
      <div className="notice">
        welcome our anime website made by Rahul,Ayush,Deepak,Heeralala. THANK
        YOU 🙂
      </div>

      {/*============================= SECTION TITLE ============================*/}
      <div className="section-title">Recent Releases</div>

      {/* ==================================🔥 CARDS SECTION (IMPORTANT FIX) img 1================*/}
      <div className="grid">
        <div className="card">
          <div className="img-box">
            <img src="https://gogoanimes.cv/wp-content/uploads/2026/01/fire-force-season-3-part-2-2026.jpg" />
            <span className="badge">SUB</span>
          </div>
          <h3>Fire Force Season 3 Part 2 (2026)</h3>
        </div>

        <div className="card">
          <div className="img-box">
            <img src="https://gogoanimes.cv/wp-content/uploads/2026/01/dark-moon-the-blood-altar-2026.jpg" />
            <span className="badge">SUB</span>
          </div>
          <h3>Dark Moon: The Blood Altar (2026)</h3>
        </div>

        <div className="card">
          <div className="img-box">
            <img src="https://gogoanimes.cv/wp-content/uploads/2026/01/hell-mode-the-hardcore-gamer-dominates-in-another-world-with-garbage-balancing-2026.jpg" />
            <span className="badge">SUB</span>
          </div>
          <h3>Hell Mode: The Hardcore Gamer</h3>
        </div>

        <div className="card">
          <div className="img-box">
            <img src="https://cdn.myanimelist.net/images/anime/1015/138006.jpg" />
            <span className="badge">SUB</span>
          </div>
          <h3>Frieren: Beyond Journey’s End</h3>
        </div>

        <div className="card">
          <div className="img-box">
            <img src="https://gogoanimes.cv/wp-content/uploads/2026/01/mf-ghost-season-3-2026.jpg" />
            <span className="badge">SUB</span>
          </div>
          <h3>MF Ghost Season 3 (2026)</h3>
        </div>

        <div className="card">
          <div className="img-box">
            <img src="https://gogoanimes.cv/wp-content/uploads/2026/01/jujutsu-kaisen-the-culling-game-part-1-2026.jpg" />
            <span className="badge">SUB</span>
          </div>
          <h3>Jujutsu Kaisen: The Culling Game Part 1 (2026)</h3>
        </div>

        <div className="card">
          <div className="img-box">
            <img src="https://cdn.myanimelist.net/images/anime/1208/94745.jpg" />
            <span className="badge">SUB</span>
          </div>
          <h3>Fullmetal Alchemist: Brotherhood (2009)</h3>
        </div>

        <div className="card">
          <div className="img-box">
            <img src="https://cdn.myanimelist.net/images/anime/1286/99889.jpg" />
            <span className="badge">SUB</span>
          </div>
          <h3>Demon Slayer</h3>
        </div>
      </div>

      {/*===================== POPULAR SECTION =============*/}
      <div className="section-title">Popular Ongoing</div>

      <div className="list">
        <div className="list-item">
          <img src="https://cdn.myanimelist.net/images/anime/1286/99889.jpg" />
          <div>
            <h4>Demon Slayer</h4>
          </div>
        </div>

        <div className="list-item">
          <img src="https://cdn.myanimelist.net/images/anime/6/73245.jpg" />
          <div>
            <h4>One Piece</h4>
          </div>
        </div>

        <div className="list-item">
          <img src="https://bollyflixcdn.site/wp-content/uploads/2026/03/Download-The-Rising-of-the-Shield-Hero.jpg" />
          <div>
            <h4>The Rising of the Shield Hero</h4>
          </div>
        </div>

        <div className="list-item">
          <img src="https://bollyflixcdn.site/wp-content/uploads/2026/01/Download-An-Adventurers-Daily-Grind-at-Age-29.jpg" />
          <div>
            <h4>An Adventurer’s Daily Grind at Age 29</h4>
          </div>
        </div>

        <div className="list-item">
          <img src="https://cdn.myanimelist.net/images/anime/1565/111305l.jpg" />
          <div>
            <h4>Naruto Shippuden</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
