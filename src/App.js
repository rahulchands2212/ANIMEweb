import { useState } from "react";

import Home from "./pages/Home";
import Animelist from "./pages/Animelist";
import Season from "./pages/Season";
import Watch from "./pages/Watch"; // 🔥 NEW

export default function App() {
  const [page, setPage] = useState("home");

  return (
    <>
      {page === "home" && (
        <Home
          goList={() => setPage("list")}
          goSeason={() => setPage("season")}
        />
      )}

      {page === "list" && <Animelist goHome={() => setPage("home")} />}

      {page === "season" && (
        <Season
          goHome={() => setPage("home")}
          goList={() => setPage("list")}
          goWatch={() => setPage("watch")} // 🔥 ADD
        />
      )}

      {/* 🔥 WATCH PAGE */}
      {page === "watch" && (
        <Watch goHome={() => setPage("home")} goList={() => setpage("list")} />
      )}
    </>
  );
}
