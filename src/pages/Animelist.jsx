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
  "365 days to get married",
  "a sister all you need",
  "ajin sea 2",
  "aku",
  "alya sometime hide her feeling",
  "another",
  "arcane series",
  "Asobi Asobase",
  "BITH series",
  "bunny girl",
  "Charlotte",
  "code geass series",
  "cupid chocolate",
  "cyberpunk",
  "darling in the franxx",
  "death parade",
  "demon slayer series",
  "devil saviour 2",
  "Domestic na Kanojo",
  "dororo",
  "ergo proxy",
  "fate stay night series",
  "from the new world",
  "full metal Alchemist series",
  "galaxy next to the door",
  "girls bravo",
  "god of high school",
  "golden time",
  "hatsukoi limited",
  "hell paradise",
  "High School DXD",
  "High Rise Invasion",
  "horimiya piece",
  "hugtatsu when they cry",
  "hunter x hunter series",
  "im the hero",
  "isekai cheat",
  "KANOKON",
  "killer seven",
  "Kimi no ko",
  "kwooon genie romance",
  "love and lie",
  "love is war series",
  "lv2 kara cheat data",
  "mage",
];

const animeListRight = [
  "magical senpai",
  "manga assistance",
  "mashel",
  "masou HxH",
  "merchant and wise wolf",
  "misfit of demon series",
  "MONSTER",
  "more than a married couple",
  "movies",
  "mushoku tensei series",
  "my little monster",
  "naruto series",
  "NEIR AUTOMATA series",
  "neon genesis",
  "Nichijou",
  "no game no life",
  "noragami",
  "noza no kanojo",
  "one punch man series",
  "ONIA",
  "Oreshura",
  "oshi no ko",
  "overlord",
  "parinomogatar series",
  "pon no michi",
  "protocol rain",
  "ray the animation",
  "school days",
  "science fell in love",
  "sekirei series",
  "Seto no Hanayome [1080]",
  "Shingeki no Kyojin",
  "Shinigami Bocchan to Kuro Maid",
  "SteinsGate series",
  "Summer time series",
  "taiagi series",
  "temple",
  "the eminence of shadow",
  "the fable",
  "the melancholy of harushi",
  "to heart to series",
  "toilet bound hanako kun",
  "uzaki san double",
  "VIVY floating song",
  "world break arisa",
  "xxx holic",
  "Yesterday o Utatte",
  "Yosuga no Sora",
];

export default function Animelist({ goHome }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [activeLetter, setActiveLetter] = useState("All");
  const [activePage, setActivePage] = useState(1);

  const allAnime = [...animeListLeft, ...animeListRight];

  const filteredAnime =
    activeLetter === "All"
      ? allAnime
      : activeLetter === "#"
      ? allAnime.filter((item) => !isNaN(item[0]))
      : allAnime.filter((item) =>
          item.toLowerCase().startsWith(activeLetter.toLowerCase())
        );

  const sortedAnime = [...filteredAnime].sort((a, b) => {
    if (!search) return 0;

    const aMatch = a.toLowerCase().includes(search.toLowerCase());
    const bMatch = b.toLowerCase().includes(search.toLowerCase());

    return bMatch - aMatch; // 🔥 match wale upar
  });

  const highlightText = (text) => {
    if (!search) return text;

    const parts = text.split(new RegExp(`(${search})`, "gi"));

    return parts.map((part, index) =>
      part.toLowerCase() === search.toLowerCase() ? (
        <span key={index} style={{ color: "#ff3b3b", fontWeight: "bold" }}>
          {part}
        </span>
      ) : (
        part
      )
    );
  };

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
  }, [filteredAnime]);

  return (
    <div className="container">
      {/* NAVBAR */}
      <div className="navbar">
        <div className="left">
          <FaBars className="icon" onClick={() => setMenuOpen(true)} />
          <span
            className="logo"
            onClick={() => {
              goHome();
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
        {filteredAnime.length === 0 ? (
          <p className="no-result">No anime found 😢</p>
        ) : (
          <div className="list">
            <ul>
              {sortedAnime
                .slice(0, Math.ceil(sortedAnime.length / 2))
                .map((anime, index) => (
                  <li key={index} className="anime-item">
                    {highlightText(anime)}
                  </li>
                ))}
            </ul>

            <ul>
              {sortedAnime
                .slice(Math.ceil(sortedAnime.length / 2))
                .map((anime, index) => (
                  <li key={index} className="anime-item">
                    {highlightText(anime)}
                  </li>
                ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
