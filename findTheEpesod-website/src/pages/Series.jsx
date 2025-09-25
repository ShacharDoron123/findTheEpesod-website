import Table from "../components/Table";   
import { seriesData } from "../tables-Information/The-Big-Bang-Theory.js";

export default function Series() {
  return (
    <div>
      <h2>Series Page</h2>
      <p>This is the Series page.</p>

      {Object.entries(seriesData).map(([seasonKey, season]) => (
        <Table
          key={seasonKey}
          season={seasonKey.replace("season", "")}
          columns={season.columns}
          data={season.data}
        />
      ))}
    </div>
  );
}
