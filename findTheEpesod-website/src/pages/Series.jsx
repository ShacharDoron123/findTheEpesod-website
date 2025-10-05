import Card from "../components/Card.jsx";
import { Link } from "react-router-dom";
import The_Big_Bang_Theory from "../assets/The_Big_Bang_Theory.webp";
import Brooklyn_Nine_Nine from "../assets/Brooklyn_Nine_Nine.jpg";
import Young_Sheldon from "../assets/Young_Sheldon.webp";

export default function Series() {
  const seriesList = [
  {
    title: "The Big Bang Theory",
    description:
      "A popular sitcom about a group of friends who are scientists and their interactions with each other and the people around them.",
    image: The_Big_Bang_Theory,
  },
  {
    title: "young Sheldon",
    description:
      "A spin-off prequel to The Big Bang Theory, focusing on the childhood of Sheldon Cooper in East Texas.",
    image: Young_Sheldon,
  },
  {
    title: "Brooklyn Nine-Nine",
    description:
      "A comedic look at the lives of detectives in a Brooklyn precinct.",
    image: Brooklyn_Nine_Nine,
  },
];

  return (
    <>
    <h2 className="title">Series Page:</h2>
    <br/>
        <div className="search-bar">
      <input
        type="text"
        placeholder="Search..."
      />
      <button >Search</button>
    </div>
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
    </>  
  );
}

