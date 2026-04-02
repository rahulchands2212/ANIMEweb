import React, { useState, useEffect } from "react";
import "../list.css";

import { FaBars, FaSearch, FaHome } from "react-icons/fa";
import { IoArrowBack } from "react-icons/io5";
import { MdList } from "react-icons/md";

const alphabets = [
  "All",
  "#",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const animeListLeft = [
  "Attack on Titan",
  "Akira",
  "Another",
  "Angel Beats!",
  "Assassination Classroom",
  "A Silent Voice",
  "Astra Lost in Space",
  "Arifureta: From Commonplace to World's Strongest",
  "Ao Haru Ride",
  "Akame ga Kill!",
  "A Certain Magical Index",
  "A Certain Scientific Railgun",
  "Accel World",
  "Ace of Diamond",
  "Alderamin on the Sky",
  "Aharen-san wa Hakarenai",
  "Ajin: Demi-Human",
  "Air",
  "Akebi's Sailor Uniform",
  "Amagi Brilliant Park",
];

const animeListRight = [
  "Arknights",
  "Arslan Senki",
  "Asobi Asobase",
  "Atelier Ryza: Ever Darkness & the Secret Hideout",
  "Ayakashi Triangle",
  "Ao Ashi",
  "A3! Season Spring & Summer",
  "A3! Season Autumn & Winter",
  "A Sister's All You Need",
  "A Galaxy Next Door",
  "A Playthrough of a Certain Dude's VRMMO Life",
  "A Returner's Magic Should Be Special",
  "A Condition Called Love",
  "A Sign of Affection",
  "A Girl & Her Guard Dog",
  "A Herbivorous Dragon of 5,000 Years Gets Unfairly Villainized",
  "A Destructive God Sits Next to Me",
  "A Good Librarian Like a Good Shepherd",
  "A Town Where You Live",
  "A Will Eternal",
];

export default function Animelist({ goHome }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [activeLetter, setActiveLetter] = useState("All");
  const [activePage, setActivePage] = useState(1);

  /* 🔥 TRUE SCROLL REPEAT ANIMATION */
  useEffect(() => {
    const items = document.querySelectorAll(".anime-item");

    const handleScroll = () => {
      items.forEach((item) => {
        const rect = item.getBoundingClientRect();

        if (rect.top < window.innerHeight - 50 && rect.bottom > 0) {
          item.classList.add("show");
        } else {
          item.classList.remove("show");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    // first load
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="container">
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

          <li className="active">
            <MdList className="menu-icon" />
            Anime List
          </li>
        </ul>
      </div>

      {/* MAIN */}
      <div className="main">
        <div className="header">
          <h2 className="anime-notice">Anime List</h2>

          <div className="pagination">
            {[1, 2, 3, 4, 5].map((num) => (
              <span
                key={num}
                className={activePage === num ? "active-page" : ""}
                onClick={() => setActivePage(num)}
              >
                {num}
              </span>
            ))}
          </div>
        </div>

        {/* ALPHABET */}
        <div className="alphabet">
          {alphabets.map((char, index) => (
            <span
              key={index}
              className={activeLetter === char ? "active-letter" : ""}
              onClick={() => setActiveLetter(char)}
            >
              {char}
            </span>
          ))}
        </div>

        {/* LIST */}
        <div className="list">
          <ul>
            {animeListLeft.map((anime, index) => (
              <li key={index} className="anime-item">
                {anime}
              </li>
            ))}
          </ul>

          <ul>
            {animeListRight.map((anime, index) => (
              <li key={index} className="anime-item">
                {anime}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
