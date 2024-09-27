import Card from "./Card";
import "../styles/grid-card.css";

export default function GridCardList({ characters }) {
  return (
    <main className="grid">
      {characters.map((character) => (
        <Card
          key={character.id}
          name={character.name}
          image={character.image}
        />
      ))}
    </main>
  );
}
