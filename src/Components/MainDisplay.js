import React, { useState } from "react";
import Overview from "./Overview";
import Weather from "./Weather";
import Symbols from "./Symbols";
import { useSelector } from "react-redux";
import { selectDisplay } from "../redux/slices/displayCountrySlice";

// Display of country selected from search
const MainDisplay = () => {
  // Getting the capital of the selecetd country
  let currentDisplay = useSelector(selectDisplay);
  const givenCapital = currentDisplay.capital;
  // Making the "Overveiw" the first default view with useState above
  const [view, setView] = useState("Overview");
  return (
    <div className="stack">
      <div className="tab-select">
        <button onClick={() => setView("Overview")}>Overview</button>
        <button onClick={() => setView("Weather")}>
          Current Weather in {givenCapital}
        </button>
        <button onClick={() => setView("Symbols")}>Symbols</button>
      </div>
      {view === "Overview" && <Overview />}
      {view === "Weather" && <Weather />}
      {view === "Symbols" && <Symbols />}
    </div>
  );
};

export default MainDisplay;
