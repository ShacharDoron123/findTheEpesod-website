import Card from "../components/Card.jsx";
import { Link } from "react-router-dom";
import The_Big_Bang_Theory from "../assets/The_Big_Bang_Theory.webp";

export default function Series() {
  const seriesList = [
  {
    title: "The Big Bang Theory",
    description:
      "A popular sitcom about a group of friends who are scientists and their interactions with each other and the people around them.",
    image: The_Big_Bang_Theory,
  },
  {
    title: "Friends",
    description:
      "Six friends living in Manhattan navigate life, love, and laughter together.",
    image: "",
  },
  {
    title: "Brooklyn Nine-Nine",
    description:
      "A comedic look at the lives of detectives in a Brooklyn precinct.",
    image: "",
  },
];

  return (
    <div>
      <h2>Series Page</h2>
      <p>This is the Series page.</p>

      <div>
  <div>
    <h2>Popular:</h2>
  </div>
  <div className="cards-grid">
    {seriesList.map((seriesItem, index) => (
      <Link
        key={index}
        to="/SeriesInfo"
        state={seriesItem}
        className="link-wrapper"
      >
        <Card
          title={seriesItem.title}
          image={seriesItem.image}
          description={seriesItem.description}
        />
      </Link>
    ))}
  </div>
 </div>
</div>
  );
}

