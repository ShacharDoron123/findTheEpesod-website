import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Table from "../components/Table.jsx";
import Brooklyn_Nine_Nine from "../tables-Information/Brooklyn-Nine-Nine.js";
import { The_Big_Bang_Theory } from "../tables-Information/The-Big-Bang-Theory.js";
import Young_Sheldon from "../tables-Information/Young_Sheldon.js";

export default function SeriesInfo() {
  const location = useLocation();
  const seriesItem = location.state;
  const navigate = useNavigate();
  const [selectedSeason, setSelectedSeason] = useState("season1"); 

  if (!seriesItem) {
    return <p>No series selected</p>;
  }

  const title = seriesItem.title.toLowerCase();
  let seriesData;

  if (title === "the big bang theory".toLowerCase()) {
    seriesData = The_Big_Bang_Theory;
  } else if (title === "young sheldon".toLowerCase()) {
    seriesData = Young_Sheldon;
  } else if (title === "brooklyn nine-nine".toLowerCase()) {
    seriesData = Brooklyn_Nine_Nine;
  }else {
    return <p>Series not found</p>;
  }

 return (
  <div className="series-info">
    {/* כותרת */}
    <h2 className="series-title">{seriesItem.title}</h2>

    {/* סרגל עליון */}
    <div className="top-bar">
      <button onClick={() => navigate(-1)}>⬅ Back</button>
    </div>

    {/* טקסט ותמונה */}
    <div className="info-content">
      <div className="info-text">
        <p>{seriesItem.description}</p>
      </div>

      {seriesItem.image && (
        <div className="info-image">
          <img
            src={seriesItem.image}
            alt={seriesItem.title}
            className="img-SeriesInfo"
          />
        </div>
      )}
    </div>

    {/* ניווט בין עונות */}
     <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <button>Search</button>
      </div>
        <p>
           Here you can search for keywords to find the episode you’re looking for, or
           by its name, release date.
        </p>
    <nav className="season-nav">
      {Object.keys(seriesData).map((seasonKey) => (
        <button
          key={seasonKey}
          className={selectedSeason === seasonKey ? "active" : ""}
          onClick={() => setSelectedSeason(seasonKey)}
        >
          {seasonKey.replace("season", "Season ")}
        </button>
      ))}
    </nav>

    {/* הצגת העונה שנבחרה בלבד */}
    {seriesData[selectedSeason] && (
      <Table
        season={selectedSeason.replace("season", "")}
        columns={seriesData[selectedSeason].columns}
        data={seriesData[selectedSeason].data}
      />
    )}
  </div>
);

}
