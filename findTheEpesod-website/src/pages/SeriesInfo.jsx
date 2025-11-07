import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Table from "../components/Table.jsx";
import Brooklyn_Nine_Nine from "../tables-Information/Brooklyn-Nine-Nine.js";
import { The_Big_Bang_Theory } from "../tables-Information/The-Big-Bang-Theory.js";
import Young_Sheldon from "../tables-Information/Young_Sheldon.js";

export default function SeriesInfo() {
  const [search, setSearch] = useState("");
  const [yearSearch, setYearSearch] = useState("");
  const [selectedSeason, setSelectedSeason] = useState("season1");

  const location = useLocation();
  const navigate = useNavigate();
  const seriesItem = location.state;

  if (!seriesItem) return <p>No series selected</p>;

  const title = seriesItem.title.toLowerCase();
  let seriesData;

  if (title === "the big bang theory") seriesData = The_Big_Bang_Theory;
  else if (title === "young sheldon") seriesData = Young_Sheldon;
  else if (title === "brooklyn nine-nine") seriesData = Brooklyn_Nine_Nine;
  else return <p>Series not found</p>;

  const updateSearch = (e) => setSearch(e.target.value.toLowerCase());
  const updateYearSearch = (e) => setYearSearch(e.target.value);

  const isTextSearching = search.trim().length > 0;
  const isYearSearching = yearSearch.trim().length > 0;

 const getFilteredData = () => {
  if (!isTextSearching && !isYearSearching)
    return seriesData[selectedSeason].data;

  // איסוף כל הפרקים מכל העונות
  const allEpisodes = Object.values(seriesData).flatMap(
    (season) => season.data
  );

  // סינון לפי שם וגם לפי שנה, כולל hiddenInfo
  const filtered = allEpisodes.filter((episode) => {
    const matchText = search
      ? Object.values(episode).some((value) =>
          value.toLowerCase().includes(search)
        )
      : true;

    const matchYear = yearSearch
      ? Object.values(episode).some((value) =>
          value.includes(yearSearch)
        )
      : true;

    return matchText && matchYear;
  });

  return filtered;
};

  const filteredData = getFilteredData();

  return (
    <div className="series-info">
      <h2 className="series-title">{seriesItem.title}</h2>

      <div className="top-bar">
        <button onClick={() => navigate(-1)}>⬅ Back</button>
      </div>

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

      {/* תיבות חיפוש */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for episode name, date, etc..."
          onChange={updateSearch}
          value={search}
        />
        <input
          type="number"
          placeholder="Enter the air year of the episode you're looking for"
          min={seriesItem.min}
          max={seriesItem.max}
          step="1"
          onChange={updateYearSearch}
          value={yearSearch}
        />
      </div>

      <p>
        Here you can search for keywords to find the episode you’re looking for,
        by its name or release date — across all seasons.
      </p>

      {/* ניווט בין עונות */}
      <nav className="season-nav">
        {Object.keys(seriesData).map((seasonKey) => (
          <button
            key={seasonKey}
            className={selectedSeason === seasonKey ? "active" : ""}
            onClick={() => setSelectedSeason(seasonKey)}
            disabled={isTextSearching || isYearSearching}
          >
            {seasonKey.replace("season", "Season ")}
          </button>
        ))}
      </nav>

      {/* טבלה */}
      {filteredData.length === 0 ? (
        <p>No results found for "{search || yearSearch}"</p>
      ) : (
        <Table
          season={
            isTextSearching || isYearSearching
              ? "Search Results"
              : selectedSeason.replace("season", "")
          }
          columns={seriesData.season1.columns}
          data={filteredData}
        />
      )}
    </div>
  );
}
