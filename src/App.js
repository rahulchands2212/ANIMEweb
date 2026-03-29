import Home from "./pages/Home";
import Watch from "./pages/Watch";
import { useState } from "react";

export default function App() {
  const [page, setPage] = useState("home");

  const goWatch = () => {
    setPage("watch");
  };

  const goHome = () => {
    setPage("home");
  };

  return (
    <>
      {page === "home" && <Home goWatch={goWatch} />}
      {page === "watch" && <Watch goHome={goHome} />}
    </>
  );
}