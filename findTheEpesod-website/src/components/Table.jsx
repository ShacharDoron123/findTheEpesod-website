export default function Table({ season, columns, data }) {
  const visibleColumns = columns.filter(col => col !== "hiddenInfo");

  return (
    <>
      <h1>Season {season}</h1>
      <table className="my-table">
        <thead>
          <tr>
            {visibleColumns.map((col, i) => (
              <th key={i}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i}>
              {visibleColumns.map((col, j) => (
                <td key={j}>{row[col] || ""}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
