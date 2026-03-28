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
        {/* LEFT */}
        <div className="left">
          <FaBars className="icon" onClick={() => setMenuOpen(true)} />
          <span className="logo">ANIME</span>
        </div>

        {/* RIGHT */}
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
    </div>
  );
}
