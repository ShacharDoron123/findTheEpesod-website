import { useLocation, useNavigate } from "react-router-dom";
import Table from "../components/Table.jsx";
import { The_Big_Bang_Theory } from "../tables-Information/The-Big-Bang-Theory.js";
import Young_Sheldon from "../tables-Information/Young_Sheldon.js";

export default function SeriesInfo() {
  const location = useLocation();
  const seriesItem = location.state;
  const navigate = useNavigate();

  if (!seriesItem) {
    return <p>No series selected</p>;
  }

  if (seriesItem.title === "The Big Bang Theory") {
    return (
      <>
       <div className="search-bar">
      <input
        type="text"
        placeholder="Search..."
      />
      <button >Search</button>
    </div>
        <button onClick={() => navigate(-1)}>
      ⬅ Back
    </button>
      <div className="series-info">
      {/* כותרת */}
      <h2 className="series-title">{seriesItem.title}</h2>

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

      {/* טבלאות לפי עונות */}
      {Object.entries(The_Big_Bang_Theory).map(([seasonKey, seasonData], i) => (
        <Table
          key={i}
          season={seasonKey.replace("season", "")}
          columns={seasonData.columns}
          data={seasonData.data}
        />
      ))}
    </div>
    </>
        );  

      
  }
      if (seriesItem.title === "young Sheldon") {
    return (
      <>
       <div className="search-bar">
      <input
        type="text"
        placeholder="Search..."
      />
      <button >Search</button>
    </div>
        <button onClick={() => navigate(-1)}>
      ⬅ Back
    </button>
      <div className="series-info">
      {/* כותרת */}
      <h2 className="series-title">{seriesItem.title}</h2>

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

      {/* טבלאות לפי עונות */}
      {Object.entries(Young_Sheldon).map(([seasonKey, seasonData], i) => (
        <Table
          key={i}
          season={seasonKey.replace("season", "")}
          columns={seasonData.columns}
          data={seasonData.data}
        />
      ))}
    </div>
      </>
        );  
      }
}
