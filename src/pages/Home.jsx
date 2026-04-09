import { useState } from "react";
import "../styles.css";

import { FaBars, FaSearch, FaHome } from "react-icons/fa";
import { MdList } from "react-icons/md";
import { IoArrowBack } from "react-icons/io5";

export default function Home({ goList, goSeason, page, setPage }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [search, setSearch] = useState("");

  // 🔥 DATA
  const animeData = [
    "Attack on Titan",
    "Fire Force Season 3",
    "Dark Moon: The Blood Altar",
    "Hell Mode",
    "Frieren",
    "MF Ghost",
    "Jujutsu Kaisen",
    "Fullmetal Alchemist",
    "Demon Slayer",
    "One piece",
    "the rising of the shield hero",
    "an adventurer's daily grind at age 29",
    "naruto shippuden",
    "expose of heera bhai",
  ];

  // 🔥 FILTER
  const filtered = animeData.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  // 🔥 SEARCH BUTTON
  const handleSearch = () => {
    const found = animeData.find((item) =>
      item.toLowerCase().startsWith(search.toLowerCase())
    );

    if (found) {
      alert("Opening: " + found);
      goSeason(); // sab ke liye same page
    } else {
      alert("Anime not found");
    }
  };

  function highlightText(text, query) {
    if (!query) return text;

    const regex = new RegExp(`(${query})`, "gi");

    return text.split(regex).map((part, i) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <span key={i} className="highlight">
          {part}
        </span>
      ) : (
        part
      )
    );
  }

  return (
    <div>
      {/* NAVBAR */}
      <div className="navbar">
        <div className="left">
          <FaBars className="icon" onClick={() => setMenuOpen(true)} />
          <span
            className="logo"
            onClick={() => {
              setPage("home");
              setMenuOpen(false);
            }}
          >
            ANIME
          </span>
        </div>

        <div className="right">
          {searchOpen ? (
            <div className="search-box">
              <IoArrowBack
                className="icon"
                onClick={() => setSearchOpen(false)}
              />

              {/* 🔥 SEARCH + SUGGESTION */}
              <div style={{ position: "relative", width: "200px" }}>
                <input
                  type="text"
                  placeholder="search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />

                {search && (
                  <div className="suggestions">
                    {filtered.length > 0 ? (
                      filtered.map((item, index) => (
                        <div
                          key={index}
                          className="suggest-item"
                          onClick={() => setSearch(item)}
                        >
                          {highlightText(item, search)}
                        </div>
                      ))
                    ) : (
                      <div className="suggest-item">No result</div>
                    )}
                  </div>
                )}
              </div>

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
          <li
            className={page === "home" ? "active" : ""}
            onClick={() => {
              setPage("home");
              setMenuOpen(false);
            }}
          >
            <FaHome className="menu-icon" />
            <span>Home</span>
          </li>
          <li
            onClick={() => {
              goList();
              setMenuOpen(false);
            }}
          >
            <MdList className="menu-icon" />
            <span>Anime List</span>
          </li>
        </ul>
      </div>

      {/* NOTICE */}
      <div className="notice">
        welcome our anime website made by Rahul,Ayush,Deepak,Heeralala. THANK
        YOU 🙂
      </div>

      {/* TITLE */}
      <div className="section-title">Recent Releases</div>

      {/* ================= CARDS ================= */}
      <div className="grid">
        {/* 🔥 ONLY AOT CLICKABLE */}
        <div className="card">
          <div className="img-box">
            <img src="https://m.media-amazon.com/images/M/MV5BZjliODY5MzQtMmViZC00MTZmLWFhMWMtMjMwM2I3OGY1MTRiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" />
            <span className="badge">SUB</span>
          </div>
          <h3>Attack on Titan</h3>
        </div>

        {/* BAQI SAB SAME */}
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
            <img src="https://m.media-amazon.com/images/M/MV5BMDZlMzhlMDktNWViMC00MDZjLWIzOTgtZDU1NjQ1YzU5ZGViXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" />
            <span className="badge">SUB</span>
          </div>
          <h3>365 days to get married</h3>
        </div>

        <div className="card">
          <div className="img-box">
            <img src="https://m.media-amazon.com/images/I/81FwHN6RPpL._AC_UF1000,1000_QL80_.jpg" />
            <span className="badge">SUB</span>
          </div>
          <h3>A sister all you need</h3>
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
            <img src="https://m.media-amazon.com/images/M/MV5BNDFhYjkwMDMtMTFmZS00ZjMyLWJlN2MtMWYyZTc2MzAzN2Q1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" />
            <span className="badge">SUB</span>
          </div>
          <h3>Ajin sea 2</h3>
        </div>

        <div className="card">
          <div className="img-box">
            <img src="https://upload.wikimedia.org/wikipedia/en/d/dc/DARLING_in_the_FRANXX%2C_second_key_visual.jpg" />
            <span className="badge">SUB</span>
          </div>
          <h3>Darling in the franxx</h3>
        </div>

        <div className="card">
          <div className="img-box">
            <img src="https://gogoanimes.cv/wp-content/uploads/2026/01/jujutsu-kaisen-the-culling-game-part-1-2026.jpg" />
            <span className="badge">SUB</span>
          </div>
          <h3>Jujutsu Kaisen</h3>
        </div>

        <div className="card">
          <div className="img-box">
            <img src="https://m.media-amazon.com/images/M/MV5BM2JkMzM2ZmYtNWU4MS00MjZhLWFhZWUtYWFjYTJkN2RhZDliXkEyXkFqcGc@._V1_.jpg" />
            <span className="badge">SUB</span>
          </div>
          <h3>Cyberpunk</h3>
        </div>

        <div className="card">
          <div className="img-box">
            <img src="https://m.media-amazon.com/images/M/MV5BNjg0YTVjNTItZTI1ZC00MDZlLTllYjQtMDY0ODMxNDdlYjY3XkEyXkFqcGc@._V1_.jpg" />
            <span className="badge">SUB</span>
          </div>
          <h3>Alya sometime hide her feeling</h3>
        </div>

        <div className="card">
          <div className="img-box">
            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/9/95/Magical_Sempai_volume_1_cover.jpg/250px-Magical_Sempai_volume_1_cover.jpg" />
            <span className="badge">SUB</span>
          </div>
          <h3>Magical senpai</h3>
        </div>

        <div className="card">
          <div className="img-box">
            <img src="https://m.media-amazon.com/images/I/818wfdUhx9L._AC_UF1000,1000_QL80_.jpg" />
            <span className="badge">SUB</span>
          </div>
          <h3>Misfit of demon series</h3>
        </div>

        <div className="card">
          <div className="img-box">
            <img src="https://m.media-amazon.com/images/M/MV5BYWQwNjk3MDItNDAxMS00YTQ2LWEyNDctMGYyZTE5OGQxNGQ1XkEyXkFqcGc@._V1_.jpg" />
            <span className="badge">SUB</span>
          </div>
          <h3>Mushoku tensei series</h3>
        </div>

        <div className="card">
          <div className="img-box">
            <img src="https://cdn.myanimelist.net/images/anime/1208/94745.jpg" />
            <span className="badge">SUB</span>
          </div>
          <h3>Fullmetal Alchemist</h3>
        </div>

        <div className="card" onClick={goSeason}>
          <div className="img-box">
            <img src="https://cdn.myanimelist.net/images/anime/1286/99889.jpg" />
            <span className="badge">SUB</span>
          </div>
          <h3>Demon Slayer</h3>
        </div>
      </div>

      {/* ================= POPULAR SECTION (UNCHANGED) ================= */}
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

      {/* ===============FOOTER ====================*/}
      <div className="footer">
        <h2> ANIME</h2>
      </div>
    </div>
  );
}
