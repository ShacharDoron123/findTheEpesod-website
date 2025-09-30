import { useLocation } from "react-router-dom";

export default function SeriesInfo() {
  const location = useLocation();
  const seriesItem = location.state;

  if (!seriesItem) {
    return <p>No series selected</p>;
  }

  return (
    <div className="series-info">
      <h2>{seriesItem.title}</h2>
      <p>{seriesItem.description}</p>
      {seriesItem.image && (
        <img src={seriesItem.image} alt={seriesItem.title} />
      )}
    </div>
  );
}
