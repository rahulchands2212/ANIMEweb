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
      page={page}
      setPage={setPage}   // ✅ IMPORTANT
    />
      )}

      {page === "list" && (
        <Animelist
          goHome={() => setPage("home")}
          page={page}
          setPage={setPage}
        />
      )}

      {page === "season" && (
        <Season
          goHome={() => setPage("home")}
          goList={() => setPage("list")}
          goWatch={() => setPage("watch")}
          page={page}
          setPage={setPage}
        />
      )}

      {/* 🔥 WATCH PAGE */}
      {page === "watch" && (
        <Watch
          goHome={() => setPage("home")}
          goList={() => setPage("list")}
          page={page}
          setPage={setPage}
        />
      )}
    </>
  );
}
